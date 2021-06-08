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
    store_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "product",
        key: "product_id", 
      },
    },
    transaction_id: {
      type: DataTypes.UUID,
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
    cost: {
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
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "ptransaction",
  }
);

module.exports = ProductTransaction;
