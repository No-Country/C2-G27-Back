'use strict';
const { Wallets_Schema, WALLETS_TABLE } = require('../models/wallets.model');
const {
  Wallet_Assets_Summaries_Schema,
  WALLET_ASSETS_SUMMARIES_TABLE,
} = require('../models/walletAssetsSummaries.model');
const {
  Transaction_Networks_Schema,
  TRANSACTION_NETWORKS_TABLE,
} = require('../models/transactionNetworks.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(WALLETS_TABLE, Wallets_Schema);
    await queryInterface.createTable(
      WALLET_ASSETS_SUMMARIES_TABLE,
      Wallet_Assets_Summaries_Schema
    );
    await queryInterface.createTable(
      TRANSACTION_NETWORKS_TABLE,
      Transaction_Networks_Schema
    );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(WALLETS_TABLE);
    await queryInterface.dropTable(WALLET_ASSETS_SUMMARIES_TABLE);
    await queryInterface.dropTable(TRANSACTION_NETWORKS_TABLE);
  },
};
