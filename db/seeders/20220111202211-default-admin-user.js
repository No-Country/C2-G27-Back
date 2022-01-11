'use strict';
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const peopleId = uuidv4();
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Person', [
      {
        id: peopleId,
        name: 'admin',
        lastName: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    queryInterface.bulkInsert('Users', [
      {
        id: uuidv4(),
        username: 'admin',
        email: 'admin@example.com',
        password: await bcrypt.hash(process.env.DEFAULT_USER_SECRET, 15),
        role: 'admin',
        people_id: peopleId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Person', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  },
};
