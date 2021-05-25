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
}
