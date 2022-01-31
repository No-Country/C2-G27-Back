require('dotenv').config();
let URI = null;
if (process.env.NODE_ENV === 'production') {
  URI = process.env.CLEARDB_DATABASE_URL;
} else {
  const USER = encodeURIComponent(process.env.DB_USER);
  const PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);
  URI = `${process.env.DB_DIALECT}://${USER}:${PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
}

module.exports = {
  development: {
    url: URI,
    dialect: 'mysql',
  },
  production: {
    url: URI,
    dialect: 'mysql',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};
