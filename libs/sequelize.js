const { Sequelize } = require('sequelize');
const setupModels = require('../db/models');

const options = {
  dialect: 'mysql',
  logging: true,
};

let URI = null;
if (process.env.NODE_ENV === 'production') {
  URI = process.env.CLEARDB_DATABASE_URL;

  options.logging = false;
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
} else {
  const USER = encodeURIComponent(process.env.DB_USER);
  const PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);
  URI = `${process.env.DB_DIALECT}://${USER}:${PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
}
const sequelize = new Sequelize(URI, options);

setupModels(sequelize);

module.exports = sequelize;
