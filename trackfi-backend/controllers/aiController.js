const OpenAI = require("openai");
const Transaction = require("../models/Transaction");
const pdfParse = require("pdf-parse");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

exports.getInsights = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user.id })
      .sort({ date: -1 })
      .limit(50);

    const summary = transactions.map(t =>
      `${t.type}: ₹${t.amount} on ${t.category} - ${t.description || ""}`
    ).join("\n");

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{
        role: "user",
        content: `Analyze these transactions and give 3-5 personalized financial insights in simple language:\n\n${summary}`
      }]
    });

    res.json({ insights: response.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.categorizeTransaction = async (req, res) => {
  try {
    const { description, amount } = req.body;
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{
        role: "user",
        content: `Categorize this transaction into one of: Food, Transport, Shopping, Entertainment, Health, Education, Bills, Salary, Investment, Other.
        Transaction: "${description}" for ₹${amount}
        Reply with ONLY the category name.`
      }]
    });
    res.json({ category: response.choices[0].message.content.trim() });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.parsePDF = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const data = await pdfParse(req.file.buffer);
    const text = data.text;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{
        role: "user",
        content: `Extract all transactions from this bank statement and return as JSON array with fields: date, description, amount, type (income/expense), category.
        Bank Statement:\n${text}\n
        Return ONLY valid JSON array, no explanation.`
      }]
    });

    const raw = response.choices[0].message.content.trim();
    const cleaned = raw.replace(/```json|```/g, "").trim();
    const transactions = JSON.parse(cleaned);

    res.json({ transactions });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};