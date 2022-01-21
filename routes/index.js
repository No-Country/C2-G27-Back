const express = require('express');

const authRouter = require('./auth.router');
const usersRouter = require('./users.router');
const peopleRouter = require('./people.router');
const walletsRouter = require('./wallets.router');
const walletAssetsSumaries = require('./walletAssetsSummaries.router');
const transactionNetwoksRouter = require('./transactionNetwoks.router');
const assets = require('./assets.router');
const transactionTypes = require('./transactionTypes.router');

function routerApi(app) {
  const router = express.Router();

  app.use('/api/v1', router);

  router.use('/auth', authRouter);
  router.use('/users', usersRouter);
  router.use('/people', peopleRouter);
  router.use('/wallets', walletsRouter);
  router.use('/wallet-assets-summary', walletAssetsSumaries);
  router.use('/transaction-networks', transactionNetwoksRouter);
  router.use('/assets', assets);
  router.use('/transaction-type', transactionTypes);
}

module.exports = routerApi;
