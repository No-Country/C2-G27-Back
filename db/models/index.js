const { People, People_Schema } = require('./people.model');
const { Users, Users_Schema } = require('./users.model');

function setupModels(sequelize){
  People.init(People_Schema, People.config(sequelize));
  Users.init(Users_Schema, Users.config(sequelize));

  Users.associate(sequelize.models);
  People.associate(sequelize.models);
}

module.exports = setupModels;