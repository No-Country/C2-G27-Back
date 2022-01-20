const express = require('express');

const authRouter = require('./auth.router');
const usersRouter = require('./users.router');
const peopleRouter = require('./people.router');
const walletsRouter = require('./wallets.router');
const transactionNetwoksRouter = require('./transactionNetwoks.router');



function routerApi(app) {
  const router = express.Router();

  app.use('/api/v1', router);

  router.use('/auth', authRouter);
  router.use('/users', usersRouter);
  router.use('/people', peopleRouter);
  router.use('/wallets', walletsRouter);
  router.use('/transaction-networks', transactionNetwoksRouter);
}

module.exports = routerApi;
