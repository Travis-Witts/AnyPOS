const Store = require('./Store');
const User = require('./User');
const Category = require('./Category');
const Product = require('./Product');
const Transaction = require('./Transaction')

// Has relationship:

User.hasOne(Store, {
    foreignKey: 'user_id',
    onDelete: "CASCADE"
});

Store.hasMany(Category, {
    foreignKey: "store_id",
    onDelete: "CASCADE"
});

Category.hasMany(Product, {
    foreignKey: "category_id",
    onDelete: "CASCADE"
});

Store.hasMany(Transaction, {
    foreignKey: "store_id",
    onDelete: "CASCADE"
});

Transaction.hasMany(Product, {
    foreignKey: "transaction_id"
});

// Belongs to:

Store.belongsTo(User, {
    foreignKey: "user_id",
    as: "owner"
});

Category.belongsTo(Store, {
    foreignKey: "store_id"
});

Product.belongsTo(Category, {
    foreignKey: "category_id",
    as: "stock"
});

Transaction.belongsTo(Store, {
    foreignKey: "store_id",
    as: "invoices"
});

Product.belongsTo(Transaction, {
    foreignKey: "transaction_id",
    as: "productLines"
})


module.exports = { User, Store, Category, Product, Transaction };
