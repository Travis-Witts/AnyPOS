const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Store extends Model {}

Store.init(
  {
    store_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
          len: [1, 50],
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Default store description"
    },
    user_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'user',
          key: 'user_id',
        },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'store',
  }
);

module.exports = Store;