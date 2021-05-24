const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class StockTransaction extends Model {}

StockTransaction.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    stock_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "stock",
        key: "stock_id", 
      },
    },
    transaction_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "transaction",
        key: "transaction_id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "stock_transaction",
  }
);

module.exports = StockTransaction;
