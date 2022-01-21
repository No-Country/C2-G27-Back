const { USERS_TABLE } = require('../models/users.model');
const { WALLETS_TABLE } = require('../models/wallets.model');
const {
  WALLET_ASSETS_SUMMARIES_TABLE,
} = require('../models/walletAssetsSummaries.model');
const { ASSETS_TABLE } = require('../models/assets.model');
const { TRANSACTIONS_TABLE } = require('../models/transactions.model');
const { TRANSACTION_TYPES_TABLE } = require('../models/transactionTypes.model');
const {
  TRANSACTION_NETWORKS_TABLE,
} = require('../models/transactionNetworks.model');
const { SAVINGS_TABLE } = require('../models/savings.model');
/* const { SAVINGS_TIER_RATE_TABLE } = require('../models/savingsTierRate.model'); */

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
      name: 'wallet_wallet-assets-summaries_foreign_key_walletId',
      references: {
        table: WALLETS_TABLE,
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    await queryInterface.addConstraint(WALLET_ASSETS_SUMMARIES_TABLE, {
      fields: ['asset_id'],
      type: 'foreign key',
      name: 'asset_wallet-assets-summaries_foreign_key_walletId',
      references: {
        table: ASSETS_TABLE,
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint(TRANSACTIONS_TABLE, {
      fields: ['wallet_id'],
      type: 'foreign key',
      name: 'wallet_transactions_foreign_key_walletId',
      references: {
        table: WALLETS_TABLE,
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    await queryInterface.addConstraint(TRANSACTIONS_TABLE, {
      fields: ['transaction_type_id'],
      type: 'foreign key',
      name: 'transaction-types_trans_foreign_key',
      references: {
        table: TRANSACTION_TYPES_TABLE,
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    await queryInterface.addConstraint(TRANSACTIONS_TABLE, {
      fields: ['asset_id'],
      type: 'foreign key',
      name: 'assets_transactions_foreign_key_assetId',
      references: {
        table: ASSETS_TABLE,
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    await queryInterface.addConstraint(TRANSACTIONS_TABLE, {
      fields: ['transaction_network_id'],
      type: 'foreign key',
      name: 'tansaction-networks_trans_foreign_key',
      references: {
        table: TRANSACTION_NETWORKS_TABLE,
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint(SAVINGS_TABLE, {
      fields: ['asset_id'],
      type: 'foreign key',
      name: 'assets_savings_foreign_key',
      references: {
        table: ASSETS_TABLE,
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    /*     await queryInterface.addConstraint(SAVINGS_TABLE, {
      fields: ['saving_tier_rate_id'],
      type: 'foreign key',
      name: 'savings-tier-rate_savigs_foreign_key',
      references: {
        table: SAVINGS_TIER_RATE_TABLE,
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }); */
    await queryInterface.addConstraint(SAVINGS_TABLE, {
      fields: ['wallet_id'],
      type: 'foreign key',
      name: 'wallets_savings_foreign_key',
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
