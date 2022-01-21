const { Model, DataTypes, Sequelize } = require('sequelize');

const TRANSACTION_TYPES_TABLE = 'transaction_types';

const Transaction_Types_Schema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
  },
  transactionTypeName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'transaction_type_name',
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

class Transaction_Types extends Model {
  static associate(models) {
    /* this.hasMany(models.Transactions, {
      as: 'Transactions',
      foreignKey: 'transaction_type_id'
    }); */
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: TRANSACTION_TYPES_TABLE,
      modelName: 'Transaction_Types',
      timestamps: true,
    };
  }
}

module.exports = {
  TRANSACTION_TYPES_TABLE,
  Transaction_Types_Schema,
  Transaction_Types,
};
