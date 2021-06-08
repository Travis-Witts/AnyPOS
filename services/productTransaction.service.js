const { ProductTransaction, Product } = require("../models");
const sequelize = require("sequelize");

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
    return lines;
  } catch (error) {
    console.error(error);
  }
};

exports.getAllDaily = async (store_id) => {
  try {
    const lines = await ProductTransaction.findAll({
      where: sequelize.where(
        sequelize.literal("to_days(created_at)"),
        sequelize.literal("to_days(now())")
      ),
      where: {store_id: store_id}
    });
    const products = lines.map(product => product.get({ plain: true }))
    return products;
  } catch (error) {
    console.error(error);
  }
};
