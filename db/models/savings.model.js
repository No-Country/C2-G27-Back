const { Model, DataTypes, Sequelize } = require('sequelize');

const SAVINGS_TABLE = 'savings';

const Savings_Schema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
  },
  assetId: {
    allowNull: false,
    field: 'asset_id',
    type: DataTypes.STRING,
  },
  savingsTierRateId: {
    allowNull: false,
    field: 'savings_tier_rate_id',
    type: DataTypes.STRING,
  },
  walletId: {
    allowNull: false,
    field: 'wallet_id',
    type: DataTypes.STRING,
  },
  subscritionDate: {
    allowNull: false,
    field: 'subscrition_date',
    type: DataTypes.DATE,
  },
  valueDate: {
    allowNull: false,
    field: 'value_date',
    type: DataTypes.DATE,
  },
  interestDistributionDate: {
    allowNull: false,
    field: 'interest_distribution_date',
    type: DataTypes.DATE,
  },
  endDate: {
    allowNull: false,
    field: 'end_date',
    type: DataTypes.DATE,
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

class Savings extends Model {
  static associate(models) {
    this.belongsTo(models.Assets, { as: 'assets' });
    this.belongsTo(models.Savings_Tier_Rate, { as: 'Savings_Tier_Rate' });
    this.belongsTo(models.Wallets, { as: 'wallets' });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: SAVINGS_TABLE,
      modelName: 'Savings',
      timestamps: true,
    };
  }
}

module.exports = { SAVINGS_TABLE, Savings_Schema, Savings };
