const { ProductTransaction } = require("../models");

exports.sellStock = async (stock) => {
    try {
      const sold = await ProductTransaction.bulkCreate(stock);
      return sold;
    } catch (error) {
      console.error(error);
    }
  };
  