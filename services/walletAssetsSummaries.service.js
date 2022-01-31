const { v4: uuidv4 } = require('uuid');
const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class WalletAssetSummariesService {
  async create(body) {
    try {
      const newWalletAssetsSummary =
        await models.Wallet_Assets_Summaries.create({
          id: uuidv4(),
          ...body,
        });
      if (!newWalletAssetsSummary) {
        throw boom.badRequest('error creating walletAssetsSummary');
      }
      return newWalletAssetsSummary;
    } catch (error) {
      throw boom.boomify(error, 'error creating walletAssetsSummary');
    }
  }

  async find() {
    try {
      const walletAssetsSummary = await models.Wallet_Assets_Summaries.findAll({
        include: ['wallet'],
      });
      if (walletAssetsSummary.length === 0) {
        throw boom.notFound('no walletAssetsSummarys found');
      }
      return { walletAssetsSummary };
    } catch (error) {
      throw boom.boomify(error, 'error finding walletAssetsSummary');
    }
  }

  async findOne(id) {
    try {
      const walletAssetsSummary = await models.Wallet_Assets_Summaries.findByPk(
        id
      );
      if (!walletAssetsSummary) {
        throw boom.notFound('walletAssetsSummary not found');
      }
      return walletAssetsSummary;
    } catch (error) {
      throw boom.boomify(error, 'error finding walletAssetsSummary');
    }
  }

  async update(id, body) {
    const walletAssetsSummary = await models.Wallet_Assets_Summaries.findOne(
      id
    );
    try {
      const res = await walletAssetsSummary.update(body);
      if (!res) {
        throw boom.badRequest('error updating walletAssetsSummary');
      }
      return res;
    } catch (error) {
      throw boom.boomify(error, 'error updating walletAssetsSummary');
    }
  }

  /*   async partialUpdate(id, body) {
    const user = await this.findOne(id);
    const userUpdate = {
      ...user,
      ...body,
    };
    const res = await user.update(userUpdate);

    return res;
  } */

  async delete(id) {
    const walletAssetsSummary = await models.Wallet_Assets_Summaries.findOne(
      id
    );
    try {
      const res = walletAssetsSummary.destroy();
      if (!res) {
        throw boom.badRequest('error deleting walletAssetsSummary');
      }
      return res;
    } catch (error) {
      throw boom.boomify(error, 'error deleting walletAssetsSummary');
    }
  }
}

module.exports = WalletAssetSummariesService;
