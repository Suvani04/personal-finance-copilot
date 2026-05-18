const express = require("express");
const router = express.Router();
const {
  getTransactions,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  getSummary,
  getMonthlyTrend,
} = require("../controllers/transactionController");
const auth = require("../middleware/auth");

// All routes are protected
router.use(auth);

// @route  GET /api/transactions
router.get("/", getTransactions);

// @route  POST /api/transactions
router.post("/", createTransaction);

// @route  GET /api/transactions/summary
router.get("/summary", getSummary);

// @route  GET /api/transactions/trend
router.get("/trend", getMonthlyTrend);

// @route  PUT /api/transactions/:id
router.put("/:id", updateTransaction);

// @route  DELETE /api/transactions/:id
router.delete("/:id", deleteTransaction);

module.exports = router;