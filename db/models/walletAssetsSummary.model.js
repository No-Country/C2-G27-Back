const { Model, DataTypes, Sequelize } = require('sequelize');

const WALLET_ASSETS_SUMMARIES_TABLE = ' wallet_assets_summaries';

const Wallet_Assets_Summaries_Schema = {
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
  assetId: {
    allowNull: false,
    field: 'asset_id',
    type: DataTypes.STRING,
  },
  ammount: {
    allowNull: false,
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

class Wallet_Assets_Summaries extends Model {
  static associate(models) {
    this.belongsTo(models.Wallets, { as: 'wallets' });
    /* this.belongsTo(models.Assets, { as: 'assets' }); */
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: WALLET_ASSETS_SUMMARIES_TABLE,
      modelName: 'Wallet_Assets_Summaries',
      timestamps: true,
    };
  }
}

module.exports = {
  WALLET_ASSETS_SUMMARIES_TABLE,
  Wallet_Assets_Summaries_Schema,
  Wallet_Assets_Summaries,
};
