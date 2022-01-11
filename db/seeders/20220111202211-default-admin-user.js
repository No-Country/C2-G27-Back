'use strict';
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const peopleId = uuidv4();
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('People', [
      {
        id: peopleId,
        name: 'admin',
        lastName: 'admin',
        create_at: new Date(),
        update_at: new Date(),
      },
    ]);
    await queryInterface.bulkInsert('Users', [
      {
        id: uuidv4(),
        username: 'admin',
        email: 'admin@example.com',
        password: await bcrypt.hash(process.env.DEFAULT_USER_SECRET, 15),
        role: 'admin',
        people_id: peopleId,
        create_at: new Date(),
        update_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('People', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  },
};
