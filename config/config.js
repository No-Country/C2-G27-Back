require('dotenv').config();

const config = {
  dbUsername: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbDatabase: process.env.DB_NAME,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  port: process.env.PORT
}
module.exports = { config };