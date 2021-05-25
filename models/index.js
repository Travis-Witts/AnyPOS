const Store = require("./Store");
const User = require("./User");
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

Product.belongsToMany(Transaction, {
  through: {
    model: ProductTransaction,
    unique: true,
  },
});

module.exports = { User, Store, Product, Transaction, ProductTransaction };
