const express = require('express');
const { verifyApiKey } = require('../middlewares/security.middleware');

const routes = express();

routes.use(
  verifyApiKey,
//   require(''),
);

module.exports = routes;