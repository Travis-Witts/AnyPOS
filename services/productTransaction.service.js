const { ProductTransaction, Product } = require("../models");

exports.sellStock = async (stock) => {
  try {
    const sold = await ProductTransaction.bulkCreate(stock);
    return sold;
  } catch (error) {
    console.error(error);
  }
};

exports.getTransactionLines = async (transaction_id) => {
  try {
    const lines = await ProductTransaction.getAll({
      where: {
        transaction_id: transaction_id,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
