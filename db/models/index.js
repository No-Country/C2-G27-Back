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
const { Assets, Assets_Schema } = require('./assets.model');
const {
  Transaction_Types,
  Transaction_Types_Schema,
} = require('./transactionTypes.model');
const { Transactions, Transactions_Schema } = require('./transactions.model');
const { Savings, Savings_Schema } = require('./savings.model');
const {
  Savings_Tier_Rate,
  Savings_Tier_Rate_Schema,
} = require('./savingsTierRate.model');

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
    Transaction_Networks.config(sequelize)
  );
  Assets.init(Assets_Schema, Assets.config(sequelize));
  Transaction_Types.init(
    Transaction_Types_Schema,
    Transaction_Types.config(sequelize)
  );
  Transactions.init(Transactions_Schema, Transactions.config(sequelize));
  Savings.init(Savings_Schema, Savings.config(sequelize));
  Savings_Tier_Rate.init(
    Savings_Tier_Rate_Schema,
    Savings_Tier_Rate.config(sequelize)
  );

  Users.associate(sequelize.models);
  People.associate(sequelize.models);
  Wallets.associate(sequelize.models);
  Wallet_Assets_Summaries.associate(sequelize.models);
  Transaction_Networks.associate(sequelize.models);
  Assets.associate(sequelize.models);
  Transaction_Types.associate(sequelize.models);
  Transactions.associate(sequelize.models);
  Savings.associate(sequelize.models);
  Savings_Tier_Rate.associate(sequelize.models);
}

module.exports = setupModels;
