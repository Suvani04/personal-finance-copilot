const Transaction = require("../models/Transaction");
const Budget = require("../models/Budget");

exports.getTransactions = async (req, res) => {
  try {
    const { type, category, startDate, endDate, limit = 50 } = req.query;
    let filter = { user: req.user.id };
    if (type) filter.type = type;
    if (category) filter.category = category;
    if (startDate || endDate) {
      filter.date = {};
      if (startDate) filter.date.$gte = new Date(startDate);
      if (endDate) filter.date.$lte = new Date(endDate);
    }
    const transactions = await Transaction.find(filter)
      .sort({ date: -1 })
      .limit(Number(limit));
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.create({
      ...req.body,
      user: req.user.id
    });

    if (transaction.type === "expense") {
      const month = new Date(transaction.date).toISOString().slice(0, 7);
      await Budget.findOneAndUpdate(
        { user: req.user.id, category: transaction.category, month },
        { $inc: { spent: transaction.amount } }
      );
    }

    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );
    if (!transaction) return res.status(404).json({ message: "Not found" });
    res.json(transaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id
    });
    if (!transaction) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSummary = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user.id });
    const income = transactions
      .filter(t => t.type === "income")
      .reduce((s, t) => s + t.amount, 0);
    const expense = transactions
      .filter(t => t.type === "expense")
      .reduce((s, t) => s + t.amount, 0);
    const byCategory = {};
    transactions.filter(t => t.type === "expense").forEach(t => {
      byCategory[t.category] = (byCategory[t.category] || 0) + t.amount;
    });
    res.json({ income, expense, balance: income - expense, byCategory });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMonthlyTrend = async (req, res) => {
  try {
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const transactions = await Transaction.find({
      user: req.user.id,
      date: { $gte: sixMonthsAgo }
    });

    const trend = {};
    transactions.forEach(t => {
      const month = new Date(t.date).toISOString().slice(0, 7);
      if (!trend[month]) trend[month] = { income: 0, expense: 0 };
      trend[month][t.type] += t.amount;
    });

    res.json(trend);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};