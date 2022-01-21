const { Model, DataTypes, Sequelize } = require('sequelize');

const WALLETS_TABLE = 'wallets';

const Wallets_Schema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
  },
  userId: {
    allowNull: false,
    field: 'user_id',
    type: DataTypes.STRING,
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

class Wallets extends Model {
  static associate(models) {
    this.belongsTo(models.Users, { as: 'users' });
    this.hasMany(models.Wallet_Assets_Summaries, {
      as: 'Wallet_Assets_Summaries',
      foreignKey: 'walletId',
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: WALLETS_TABLE,
      modelName: 'Wallets',
      timestamps: true,
    };
  }
}

module.exports = { WALLETS_TABLE, Wallets_Schema, Wallets };
