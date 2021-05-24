const { Product } = require("../models");

exports.getAllProducts = async (store_id) => {
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

exports.createProduct = async ({ name, price, store_id }) => {
  try {
    const newProduct = await Product.create({
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
    const deletedProduct = await Product.destroy({
      where: {
        product_id: product_id,
      },
    });
    return deletedProduct
  } catch (error) {
    console.error(error);
  }
};
