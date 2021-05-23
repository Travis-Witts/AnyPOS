const Store = require('./Store');
const User = require('./User');
const Item = require('./Item');
const Stock = require('./Stock');
const Transaction = require('./Transaction')

// Has relationship:

User.hasOne(Store, {
    foreignKey: 'user_id',
    onDelete: "CASCADE"
});

Store.hasMany(Item, {
    foreignKey: "store_id",
    onDelete: "CASCADE"
});

Item.hasMany(Stock, {
    foreignKey: "Item_id",
    onDelete: "CASCADE"
});

Store.hasMany(Transaction, {
    foreignKey: "store_id",
    onDelete: "CASCADE"
});

Transaction.hasMany(Stock, {
    foreignKey: "transaction_id"
});

// Belongs to:

Store.belongsTo(User, {
    foreignKey: "user_id",
    as: "owner"
});

Item.belongsTo(Store, {
    foreignKey: "store_id"
});

Stock.belongsTo(Item, {
    foreignKey: "Item_id",
    as: "stock"
});

Transaction.belongsTo(Store, {
    foreignKey: "store_id",
    as: "invoices"
});

Stock.belongsTo(Transaction, {
    foreignKey: "transaction_id",
    as: "StockLines"
})


module.exports = { User, Store, Item, Stock, Transaction };
