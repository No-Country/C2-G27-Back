const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
//const setupModels  = require('../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: process.env.DB_DIALECT,
  logging:true,
});

//setupModels(sequelize);

module.exports = sequelize;