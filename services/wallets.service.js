const { v4: uuidv4 } = require('uuid');
const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class WalletsService {
  async create(id) {
    try {
      const newWallet = await models.Wallets.create({
        id: uuidv4(),
        userId: id,
      });
      if (!newWallet) {
        throw boom.badRequest('error creating wallet');
      }
      return newWallet;
    } catch (error) {
      throw boom.error(error);
    }
  }

  async find() {
    try {
      const wallet = await models.Wallets.findAll({
        include: ['users'],
      });
      if (wallet.length === 0) {
        throw boom.notFound('no wallets found');
      }
      return { wallet };
    } catch (error) {
      throw boom.error(error);
    }
  }

  async findOne(id) {
    try {
      const wallet = await models.Wallets.findByPk(id);
      if (!wallet) {
        throw boom.notFound('wallet not found');
      }
      return wallet;
    } catch (error) {
      throw boom.boomify(error, 'error finding wallet');
    }
  }

  async update(id, body) {
    const wallet = await models.Wallets.findOne(id);
    try {
      const res = await wallet.update(body);
      if (!res) {
        throw boom.badRequest('error updating wallet');
      }
      return res;
    } catch (error) {
      throw boom.boomify(error, 'error updating wallet');
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
    const wallet = await models.Wallets.findOne(id);
    try {
      const res = wallet.destroy();
      if (!res) {
        throw boom.badRequest('error deleting wallet');
      }
      return res;
    } catch (error) {
      throw boom.boomify(error, 'error deleting wallet');
    }
  }
}

module.exports = WalletsService;
