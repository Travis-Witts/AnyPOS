const ProductService = require("../services/product.service");

exports.createProduct = async (req, res, next) => {
  const name = req.body.name;
  const description = req.body.desc;
  const price = req.body.price;
  const cost = req.body.cost;
  const quantity = req.body.quantity;
  const store_id = req.session.store_id;
  console.log(req.body)
  console.log(req.session)
  try {
    const product = await ProductService.createProduct(
      name,
      description,
      price,
      cost,
      quantity,
      store_id
    );
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

exports.deleteProduct = async (req, res, next) => {
  const product_id = req.body.id;
  console.log(product_id)

  try {
    const deletedProduct = await ProductService.deleteProduct(product_id);
    res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

exports.getAllProducts = async (req, res, next) => {
  const store_id = req.session.store_id;

  try {
    const products = await ProductService.getAll(store_id);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.getOneProduct = async (req, res, next) => {
  const product_id = req.params.id;

  try {
    const product = await ProductService.getOne(product_id);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

exports.editStock = async (req, res, next) => {
  const product_id = req.body.id;
  const price = req.body.price;
  const cost = req.body.cost;
  const quantity = req.body.quantity;
  try {
    const updatedProduct = await ProductService.editStock(product_id, price, cost, quantity);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
