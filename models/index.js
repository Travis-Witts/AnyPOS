const User = require("./User");
const Store = require("./Store");
const Product = require("./Product");
const Transaction = require("./Transaction");
const ProductTransaction = require("./ProductTransaction");

// Has relationship:

User.hasOne(Store, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Store.hasMany(Product, {
  foreignKey: "store_id",
  onDelete: "CASCADE",
});

Store.hasMany(Transaction, {
  foreignKey: "store_id",
  onDelete: "CASCADE",
});

Product.hasMany(ProductTransaction, {
  foreignKey: "product_id",
  onDelete: "CASCADE"
})

Transaction.hasMany(ProductTransaction, {
  foreignKey: "transaction_id",
  onDelete: "CASCADE"
})

// Belongs to:

Store.belongsTo(User, {
  foreignKey: "user_id",
});

Product.belongsTo(Store, {
  foreignKey: "store_id",
});

Transaction.belongsTo(Store, {
  foreignKey: "store_id",
});

ProductTransaction.belongsTo(Product, {
  foreignKey: "product_id"
})

ProductTransaction.belongsTo(Transaction, {
  foreignKey: "transaction_id"
})

module.exports = { User, Store, Product, Transaction, ProductTransaction };
