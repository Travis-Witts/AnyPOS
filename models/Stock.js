const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Stock extends Model {}

Stock.init(
  {
    stock_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "item",
        key: "item_id",
      },
    },
    transaction_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
    modelName: "stock",
  }
);

module.exports = Stock;
