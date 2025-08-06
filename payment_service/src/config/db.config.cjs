const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../../.env.development.local') });

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
  },
  // test, production...
};
