const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
//const setupModels  = require('../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// eslint-disable-next-line no-console
console.log(URI)
const sequelize = new Sequelize(URI, {
  dialect:'mysql',
  logging:true,
});

//setupModels(sequelize);

module.exports = sequelize;