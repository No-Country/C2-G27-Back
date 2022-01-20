const { People, People_Schema } = require('./people.model');
const { Users, Users_Schema } = require('./users.model');
const {
  Transaction_Networks,
  Transaction_Networks_Schema,
} = require('./transactionNetworks.model');

function setupModels(sequelize) {
  People.init(People_Schema, People.config(sequelize));
  Users.init(Users_Schema, Users.config(sequelize));
  Transaction_Networks.init(
    Transaction_Networks_Schema,
    Users.config(sequelize)
  );

  Users.associate(sequelize.models);
  People.associate(sequelize.models);
  Transaction_Networks.associate(sequelize.models);
}

module.exports = setupModels;
