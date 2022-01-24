const { Model, DataTypes, Sequelize } = require('sequelize');

const TRANSACTION_NETWORKS_TABLE = 'transaction_networks';

const Transaction_Networks_Schema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
  },
  transactionNetworkName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'transaction_network_name',
    unique: true,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'update_at',
    defaultValue: Sequelize.NOW,
  },
};

class Transaction_Networks extends Model {
  static associate(models) {
    this.hasMany(models.Transactions, {
      as: 'Transactions',
      foreignKey: 'transactionNetworkId',
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: TRANSACTION_NETWORKS_TABLE,
      modelName: 'Transaction_Networks',
      timestamps: true,
    };
  }
}

module.exports = {
  TRANSACTION_NETWORKS_TABLE,
  Transaction_Networks_Schema,
  Transaction_Networks,
};
