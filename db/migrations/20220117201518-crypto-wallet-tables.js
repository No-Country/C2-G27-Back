'use strict';
const { Wallets_Schema, WALLETS_TABLE } = require('../models/wallets.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(WALLETS_TABLE, Wallets_Schema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(WALLETS_TABLE);
  },
};
