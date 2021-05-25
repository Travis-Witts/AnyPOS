const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Transaction extends Model {}

Transaction.init(
  {
    transaction_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    store_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "Transaction",
        key: "Transaction_id",
      },
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "transaction",
  }
);

module.exports = Transaction;
