const { Stock, StockTransaction } = require("../models");

exports.restockProduct = async ({ product_id }) => {
  try {
    const newStock = await Stock.create({
      product_id: product_id,
    })
    return newStock
  } catch (error) {
    console.error(error);
  }
};

exports.restockBulkProduct = async (stock) => {
  try {
    const newStock = await Stock.bulkCreate(stock);
    return newStock
  } catch (error) {
    console.error(error);
  }
};

exports.getStock = async (product_id) => {
  try {
    const stock = await Stock.findAll({
      where: {
        product_id: product_id,
      },
      include: {
        model: StockTransaction
      },
    });
    return stock;
  } catch (error) {
    console.error(error);
  }
}

exports.sellStock = async (stock) => {
  try {
    const sold = await StockTransaction.bulkCreate(stock);
    return sold;
  } catch (error) {
    console.error(error);
  }
};
