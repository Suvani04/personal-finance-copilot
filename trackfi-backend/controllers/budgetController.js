const Budget = require("../models/Budget");

exports.getBudgets = async (req, res) => {
  try {
    const { month } = req.query;
    const filter = { user: req.user.id };
    if (month) filter.month = month;
    const budgets = await Budget.find(filter);
    res.json(budgets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createBudget = async (req, res) => {
  try {
    const { category, limit, month } = req.body;
    let budget = await Budget.findOne({
      user: req.user.id, category, month
    });
    if (budget) {
      budget.limit = limit;
      await budget.save();
    } else {
      budget = await Budget.create({
        user: req.user.id, category, limit, month
      });
    }
    res.status(201).json(budget);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteBudget = async (req, res) => {
  try {
    await Budget.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id
    });
    res.json({ message: "Budget deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};