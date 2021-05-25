const TransactionService = require("../services/transaction.service");

exports.createTransaction = async (req, res, next) => {
    const store_id = req.session.store_id;

    try {
        const newTransaction = await TransactionService.createSale(store_id);
        res.status(200).json(newTransaction);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

exports.getAll = async (req, res, next) => {
    const store_id = req.session.store_id;

    try {
        const transactions = await TransactionService.getAll(store_id);
        res.status(200).json(transactions);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

exports.getOne = async (req, res, next) => {
    const transaction_id = req.params.id;

    try {
        const transaction = await TransactionService.getOne(transaction_id);
        res.status(200).json(transaction);    
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.updateTotal = async (req, res, next) => {
    const transaction_id = req.params.id;
    const value = req.body.value;

    try {
       const updatedTransaction = await TransactionService.updateTotal(transaction_id, value);
       res.status(200).json(updatedTransaction);
    } catch (error) {
        res.status(404).json(error.message);
    }
}