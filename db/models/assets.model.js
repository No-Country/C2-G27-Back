const { Model, DataTypes, Sequelize } = require('sequelize');

const ASSETS_TABLE = 'assets';

const Assets_Schema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
  },
  assetName: {
    allowNull: false,
    field: 'asset_name',
    type: DataTypes.STRING,
    unique: true,
  },
  assetSymbol: {
    allowNull: false,
    field: 'asset_symbol',
    type: DataTypes.STRING,
    unique: true,
  },
  assetSlug: {
    allowNull: false,
    field: 'asset_slug',
    type: DataTypes.STRING,
    unique: true,
  },
  assetPrice: {
    allowNull: false,
    field: 'asset_price',
    type: DataTypes.DOUBLE,
  },
  assetMarketCapitalization: {
    allowNull: false,
    field: 'asset_market_capitalization',
    type: DataTypes.DOUBLE,
  },
  assetLogoUrl: {
    allowNull: false,
    field: 'asset_logo_url',
    type: DataTypes.STRING,
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

class Assets extends Model {
  static associate(models) {
    /*     this.hasMany(models.Transactions, {
      as: 'Transactions',
      foreignKey: 'assetId',
    }); */
    this.hasMany(models.Wallet_Assets_Summaries, {
      as: 'Wallet_Assets_Summaries',
      foreignKey: 'assetId',
    });
    /*  this.hasMany(models.Savings, {
      as: 'savings',
      foreignKey: 'assetId',
    }); */
    /* this.hasMany(models.Savings_Tier_Rate, {
      as: 'Savings_Tier_Rate',
      foreignKey: 'assetId',
    }); */
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ASSETS_TABLE,
      modelName: 'Assets',
      timestamps: true,
    };
  }
}

module.exports = { ASSETS_TABLE, Assets_Schema, Assets };
