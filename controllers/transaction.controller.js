const TransactionService = require("../services/transaction.service");
const ProductTransactionService = require("../services/productTransaction.service");
const transactionSum = require("../utils/transactionSum");

exports.createTransaction = async (req, res, next) => {
  const store_id = req.session.store_id;
  const total = req.body.total;
  const discount = req.body.discount;
  const stock = req.body.stock;
  try {
    const newTransaction = await TransactionService.createSale(
      store_id,
      total,
      discount
    );
    const newArr = await stock.map((product) => {
      return {
        store_id: store_id,
        price: product.price,
        cost: product.cost,
        product_id: product.product_id,
        quantity: product.quantity,
        transaction_id: newTransaction.dataValues.transaction_id,
      };
    });
    const transactionProducts = await ProductTransactionService.sellStock(
      newArr
    );
    res.status(200).json(newTransaction);
  } catch (error) {
    res.status(400).json(error.message);
  }
};


exports.getAll = async (req, res, next) => {
  const store_id = req.session.store_id;

  try {
    const transactions = await TransactionService.getAll(store_id);
    res.status(200).json(transactions);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

exports.getOne = async (req, res, next) => {
  const transaction_id = req.params.id;

  try {
    const transaction = await TransactionService.getOne(transaction_id);
    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.updateTotal = async (req, res, next) => {
  const transaction_id = req.body.transaction_id;

  try {
    const invoiceLines = await ProductTransactionService.getTransactionLines(
      transaction_id
    );
    const value = transactionSum(invoiceLines);
    const updatedTransaction = await TransactionService.updateTotal(
      transaction_id,
      value
    );
    res.status(200).json(updatedTransaction);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

exports.getAllDaily = async (req, res, next) => {
  const store_id = req.session.store_id;
  let totalPrice = 0;
  let totalCost = 0;
  try {
    const dailySales = await ProductTransactionService.getAllDaily(store_id);
    for (var i = 0; i < dailySales.length; i++) {
      totalPrice += dailySales[i].quantity * dailySales[i].price;
      totalCost += dailySales[i].quantity * dailySales[i].cost;
    }
    const totals = { totalPrice, totalCost, dailySales };
    res.status(200).json(totals);
  } catch (error) {
    res.status(403).json(error);
  }
};
