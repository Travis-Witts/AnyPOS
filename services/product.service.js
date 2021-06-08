const { Product } = require("../models");

exports.createProduct = async (name, description, price, cost, quantity, store_id) => {
  try {
    const newProduct = await Product.create({
      name: name,
      description: description,
      price: price,
      cost: cost,
      quantity: quantity,
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

exports.editStock = async (product_id, price, cost, quantity) => {
  try {
    const updatedStore = await Product.update(
      {
        price: price,
        cost: cost,
        quantity: quantity,
      },
      {
        where: {
          product_id: product_id,
        },
      }
    );
    return updatedStock;
  } catch (error) {
    console.error(error);
  }
};
