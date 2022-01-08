const { Sequelize } = require('sequelize');
const setupModels = require('../db/models');
const USER = encodeURIComponent(process.env.DB_USER);
const PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);
const URI = `${process.env.DB_DIALECT}://${USER}:${PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

const sequelize = new Sequelize(URI, {
  dialect: process.env.DB_DIALECT,
  logging: true,
});

setupModels(sequelize);

module.exports = sequelize;
