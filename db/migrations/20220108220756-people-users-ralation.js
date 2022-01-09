const { USERS_TABLE } = require('../models/users.model');
const { PEOPLE_TABLE } = require('../models/people.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addConstraint(USERS_TABLE, {
      fields: ['people_id'],
      type: 'foreign key',
      name: 'people-user_foreign_key_peopleId',
      references: {
        table: PEOPLE_TABLE,
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  down: async (queryInterface, Sequelize) => {},
};
