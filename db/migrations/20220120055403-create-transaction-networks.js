'use strict';
const {
  Transaction_Networks_Schema,
  TRANSACTION_NETWORKS_TABLE,
} = require('../models/transactionNetworks.model');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      TRANSACTION_NETWORKS_TABLE,
      Transaction_Networks_Schema
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(TRANSACTION_NETWORKS_TABLE);
  },
};
