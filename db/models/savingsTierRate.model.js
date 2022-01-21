const { Model, DataTypes, Sequelize } = require('sequelize');

const SAVINGS_TIER_RATE_TABLE = 'savings_tier_rate';

const Savings_Tier_Rate_Schema = {
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
  tierName: {
    allowNull: false,
    field: 'tier_name',
    type: DataTypes.STRING,
    unique: true,
  },
  tierMinValue: {
    allowNull: false,
    field: 'tier_min_value',
    type: DataTypes.DOUBLE,
  },
  tierMaxValue: {
    allowNull: false,
    field: 'tier_max_value',
    type: DataTypes.DOUBLE,
  },
  annualizedProfitYield: {
    allowNull: false,
    field: 'annualized_profit_yield',
    type: DataTypes.FLOAT,
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

class Savings_Tier_Rate extends Model {
  static associate(models) {
    this.belongsTo(models.Assets, { as: 'assets' });
    this.hasMany(models.Savings, {
      as: 'savings',
      foreignKey: 'saving_tier_rate_id',
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: SAVINGS_TIER_RATE_TABLE,
      modelName: 'Savings_Tier_Rate',
      timestamps: true,
    };
  }
}

module.exports = {
  SAVINGS_TIER_RATE_TABLE,
  Savings_Tier_Rate_Schema,
  Savings_Tier_Rate,
};
