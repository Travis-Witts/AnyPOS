const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class ProductTransaction extends Model {}

ProductTransaction.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "product",
        key: "product_id", 
      },
    },
    transaction_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "transaction",
        key: "transaction_id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "producttransaction",
  }
);

module.exports = ProductTransaction;
