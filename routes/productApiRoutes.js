const router = require("express").Router();
const ProductController = require("../controllers/product.controller");

// Create a Product
router.post("/", ProductController.createProduct);

// Delete a Product
router.delete("/:id", ProductController.deleteProduct);

// Get All Products
router.get("/", ProductController.getAllProducts);

// Get One Product
router.get("/:id", ProductController.getOneProduct);

// Edit Stock
router.put("/:id", ProductController.editStock);

module.exports =router;