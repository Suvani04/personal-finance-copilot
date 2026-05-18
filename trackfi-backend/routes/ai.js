const express = require("express");
const router = express.Router();
const {
  getBudgets,
  createBudget,
  deleteBudget,
} = require("../controllers/budgetController");
const auth = require("../middleware/auth");

// All routes are protected
router.use(auth);

// @route  GET /api/budgets
router.get("/", getBudgets);

// @route  POST /api/budgets
router.post("/", createBudget);

// @route  DELETE /api/budgets/:id
router.delete("/:id", deleteBudget);

module.exports = router;