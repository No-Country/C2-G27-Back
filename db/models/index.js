const { People, People_Schema } = require('./people.model');
const { Users, Users_Schema } = require('./users.model');
const { Wallets, Wallets_Schema } = require('./wallets.model');

function setupModels(sequelize) {
  People.init(People_Schema, People.config(sequelize));
  Users.init(Users_Schema, Users.config(sequelize));
  Wallets.init(Wallets_Schema, Wallets.config(sequelize));

  Users.associate(sequelize.models);
  People.associate(sequelize.models);
  Wallets.associate(sequelize.models);
}

module.exports = setupModels;
