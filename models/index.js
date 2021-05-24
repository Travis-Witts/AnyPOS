const Store = require("./Store");
const User = require("./User");
const Product = require("./Product");
const Stock = require("./Stock");
const Transaction = require("./Transaction");
const StockTransaction = require("./StockTransaction");

// Has relationship:

User.hasOne(Store, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Store.hasMany(Product, {
  foreignKey: "store_id",
  onDelete: "CASCADE",
});

Product.hasMany(Stock, {
  foreignKey: "Item_id",
  onDelete: "CASCADE",
});

Store.hasMany(Transaction, {
  foreignKey: "store_id",
  onDelete: "CASCADE",
});

// Belongs to:

Store.belongsTo(User, {
  foreignKey: "user_id",
  as: "owner",
});

Product.belongsTo(Store, {
  foreignKey: "store_id",
  as: "product",
});

Stock.belongsTo(Product, {
  foreignKey: "Item_id",
  as: "stock",
});

Transaction.belongsTo(Store, {
  foreignKey: "store_id",
  as: "invoices",
});

Stock.belongsTo(Transaction, {
  through: {
    model: StockTransaction,
    unique: true,
  },
  as: "invoiceLine",
});

module.exports = { User, Store, Product, Stock, Transaction, StockTransaction };
