const { Model, DataTypes, Sequelize } = require('sequelize');

const PEOPLE_TABLE = 'people';

const People_Schema = {
  id:{
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING
  },
  name:{
    allowNull: false,
    type: DataTypes.STRING
  },
  lastName:{
    allowNull: true,
    type: DataTypes.STRING
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  updatedAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'update_at',
    defaultValue: Sequelize.NOW
  }
}

class People extends Model
{
  static associate(models){
    this.hasOne(models.Users, {
      as:'users',
      foreignKey:'peopleId'
    });
  }
  static config(sequelize){
    return {
      sequelize,
      tableName: PEOPLE_TABLE,
      modelName: 'People',
      timestamps: true
    }
  }
}

module.exports = { PEOPLE_TABLE, People_Schema, People }
