const { People, People_Schema } = require('./people.model');
const { Users, Users_Schema } = require('./users.model');
const { Wallets, Wallets_Schema } = require('./wallets.model');
const {
  Wallet_Assets_Summaries,
  Wallet_Assets_Summaries_Schema,
} = require('./walletAssetsSummaries.model');
const {
  Transaction_Networks,
  Transaction_Networks_Schema,
} = require('./transactionNetworks.model');

function setupModels(sequelize) {
  People.init(People_Schema, People.config(sequelize));
  Users.init(Users_Schema, Users.config(sequelize));
  Wallets.init(Wallets_Schema, Wallets.config(sequelize));
  Wallet_Assets_Summaries.init(
    Wallet_Assets_Summaries_Schema,
    Wallet_Assets_Summaries.config(sequelize)
  );
  Transaction_Networks.init(
    Transaction_Networks_Schema,
    Users.config(sequelize)
  );

  Users.associate(sequelize.models);
  People.associate(sequelize.models);
  Wallets.associate(sequelize.models);
  Wallet_Assets_Summaries.associate(sequelize.models);
  Transaction_Networks.associate(sequelize.models);
}

module.exports = setupModels;
