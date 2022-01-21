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
const { Assets_Schema, ASSETS_TABLE } = require('../models/assets.model');
const {
  Transaction_Types_Schema,
  TRANSACTION_TYPES_TABLE,
} = require('../models/transactionTypes.model');
const {
  Transactions_Schema,
  TRANSACTIONS_TABLE,
} = require('../models/transactions.model');
const { Savings_Schema, SAVINGS_TABLE } = require('../models/savings.model');

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
    await queryInterface.createTable(ASSETS_TABLE, Assets_Schema);
    await queryInterface.createTable(
      TRANSACTION_TYPES_TABLE,
      Transaction_Types_Schema
    );
    await queryInterface.createTable(TRANSACTIONS_TABLE, Transactions_Schema);
    await queryInterface.createTable(SAVINGS_TABLE, Savings_Schema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(TRANSACTIONS_TABLE);
    await queryInterface.dropTable(SAVINGS_TABLE);
    await queryInterface.dropTable(WALLET_ASSETS_SUMMARIES_TABLE);
    await queryInterface.dropTable(WALLETS_TABLE);
    await queryInterface.dropTable(TRANSACTION_NETWORKS_TABLE);
    await queryInterface.dropTable(TRANSACTION_TYPES_TABLE);
    await queryInterface.dropTable(ASSETS_TABLE);
  },
};
