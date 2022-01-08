'use strict';

const { People_Schema, PEOPLE_TABLE } = require('../models/people.model');
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(PEOPLE_TABLE, People_Schema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(PEOPLE_TABLE);
  }
};
