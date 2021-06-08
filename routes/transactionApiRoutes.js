const router = require("express").Router();
const TransactionController = require("../controllers/transaction.controller");

// Create Transaction
router.post("/", TransactionController.createTransaction)

// Get All Daily
router.get("/", TransactionController.getAllDaily);

// Get One Transaction
router.get("/:id", TransactionController.getOne);

// Update Transaction Total
router.put("/:id", TransactionController.updateTotal);


module.exports =router;