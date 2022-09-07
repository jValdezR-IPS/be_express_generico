require('dotenv').config();
require('../utils/envChecker.util')

module.exports = {
  server: {
    // apiKeyName: process.env.API_KEY_NAME,
    // apiKeyValue: process.env.API_KEY_VALUE,
    // limit: process.env.LIMIT,
    port: process.env.PORT,
    // debug: process.env.DEBUG,
    // cors_allowed: process.env.CORS_ALLOWED,
    // timeout: parseInt(process.env.SERVER_TIMEOUT),
  },
};