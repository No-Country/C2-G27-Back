'use strict';
const { Users_Schema, USERS_TABLE } = require('../models/users.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USERS_TABLE, Users_Schema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(USERS_TABLE);
  }
};
