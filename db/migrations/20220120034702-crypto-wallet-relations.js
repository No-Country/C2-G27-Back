const { USERS_TABLE } = require('../models/users.model');
const { WALLETS_TABLE } = require('../models/wallets.model');
const {
  WALLET_ASSETS_SUMMARIES_TABLE,
} = require('../models/walletAssetsSummaries.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addConstraint(WALLETS_TABLE, {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'user-wallet_foreign_key_UserId',
      references: {
        table: USERS_TABLE,
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    await queryInterface.addConstraint(WALLET_ASSETS_SUMMARIES_TABLE, {
      fields: ['wallet_id'],
      type: 'foreign key',
      name: 'wallet__wallet-assets-summaries_foreign_key_walletId',
      references: {
        table: WALLETS_TABLE,
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  down: async (queryInterface, Sequelize) => {},
};
