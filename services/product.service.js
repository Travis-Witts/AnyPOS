const { Product, ProductTransaction } = require("../models");

exports.createProduct = async (product_id, name, price, store_id) => {
  try {
    const newProduct = Product.create({
      product_id: product_id,
      name: name,
      price: price,
      store_id: store_id,
    });
    return newProduct;
  } catch (error) {
    console.error(error);
  }
};

exports.deleteProduct = async (product_id) => {
  try {
    const deletedProduct = Product.destroy({
      where: {
        product_id: product_id,
      },
    });
    return deletedProduct;
  } catch (error) {
    console.error(error);
  }
};

exports.getAll = async (store_id) => {
  try {
    const allProducts = await Product.findAll({
      where: {
        store_id: store_id,
      },
    });
    return allProducts;
  } catch (error) {
    console.error(error);
  }
};

exports.getOne = async (product_id) => {
  try {
    const product = await Product.findOne({
      where: {
        product_id: product_id,
      },
    });
    return product;
  } catch (error) {
    console.error(error);
  }
};

exports.sellStock = async (stock) => {
  try {
    const sold = await ProductTransaction.bulkCreate(stock);
    return sold;
  } catch (error) {
    console.error(error);
  }
};
