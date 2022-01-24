const { Model, DataTypes, Sequelize } = require('sequelize');

const TRANSACTIONS_TABLE = 'transactions';

const Transactions_Schema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
  },
  walletId: {
    allowNull: false,
    field: 'wallet_id',
    type: DataTypes.STRING,
  },
  transactionTypeId: {
    allowNull: false,
    field: 'transaction_type_id',
    type: DataTypes.STRING,
  },
  assetId: {
    allowNull: false,
    field: 'asset_id',
    type: DataTypes.STRING,
  },
  transactionNetworkId: {
    allowNull: false,
    field: 'transaction_network_id',
    type: DataTypes.STRING,
  },
  walletDestinationId: {
    allowNull: false,
    field: 'wallet_destination_id',
    type: DataTypes.STRING,
  },
  amount: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  networkFee: {
    allowNull: false,
    field: 'network_fee',
    type: DataTypes.DOUBLE,
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

class Transactions extends Model {
  static associate(models) {
    this.belongsTo(models.Wallets, { as: 'wallet' });
    this.belongsTo(models.Assets, { as: 'asset' });
    this.belongsTo(models.Transaction_Networks, { as: 'transaction_Network' });
    this.belongsTo(models.Transaction_Types, { as: 'transaction_Type' });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: TRANSACTIONS_TABLE,
      modelName: 'Transactions',
      timestamps: true,
    };
  }
}

module.exports = { TRANSACTIONS_TABLE, Transactions_Schema, Transactions };
