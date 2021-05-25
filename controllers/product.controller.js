const ProductService = require("../services/product.service");
const { v4: uuidv4 } = require('uuid');

exports.getInstockProducts = async (req, res, next) => {
    const store_id = req.body.store_id;

    try {
        const products = await ProductService.getAll(store_id);
        const inStock = products.filter(product => product.)
        return products;
    } catch (error) {
        
    }
}

exports.getAllProducts = async (req, res, next) => {
    const store_id = req.body.store_id;

    try {
        const products = await ProductService.getAll(store_id);
        return products;
    } catch (error) {
        console.error(error);
    }
}