const express = require('express');

const authRouter = require('./auth.router');
const usersRouter = require('./users.router');
const peopleRouter = require('./people.router');
const walletsRouter = require('./wallets.router');
const walletAssetsSumariesRouter = require('./walletAssetsSummaries.router');
const transactionNetwoksRouter = require('./transactionNetwoks.router');
const assetsRouter = require('./assets.router');
const transactionTypesRouter = require('./transactionTypes.router');
const transactionsRouter = require('./transactions.router');
const savingsRouter = require('./savings.router');
const savingsTierRateRouter = require('./savingsTierRate.router');

function routerApi(app) {
  const router = express.Router();

  app.use('/api/v1', router);

  router.use('/auth', authRouter);
  router.use('/users', usersRouter);
  router.use('/people', peopleRouter);
  router.use('/wallets', walletsRouter);
  router.use('/wallet-assets-summary', walletAssetsSumariesRouter);
  router.use('/transaction-networks', transactionNetwoksRouter);
  router.use('/assets', assetsRouter);
  router.use('/transaction-types', transactionTypesRouter);
  router.use('/transactions', transactionsRouter);
  router.use('/savings', savingsRouter);
  router.use('/savings-tier-rate', savingsTierRateRouter);
}

module.exports = routerApi;
