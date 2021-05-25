const { Transaction } = require("../models");

exports.createSale = async (store_id) => {
  try {
    const newSale = await Transaction.create({
      store_id: store_id,
    });
    return newSale;
  } catch (error) {
    console.error(error);
  }
};

exports.updateTotal = async ({ transaction_id, value }) => {
  try {
    const updatedSale = await Transaction.update({
      total: value,
      where: {
        transaction_id: transaction_id,
      },
    });
    return updatedSale;
  } catch (error) {
    console.error(error);
  }
};

exports.getOne = async (transaction_id) => {
  try {
    const transaction = await Transaction.findOne({
      where: {
        transaction_id: transaction_id,
      },
    });
    return transaction;
  } catch (error) {
    console.error(error);
  }
};

exports.getAll = async (store_id) => {
  try {
    const transactions = await Transaction.findAll({
      where: {
        store_id: store_id,
      },
    });
    return transactions;
  } catch (error) {
    console.error(error);
  }
};
