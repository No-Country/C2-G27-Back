const { v4: uuidv4 } = require('uuid');
const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class TransactionNetworksService {
  async create(body) {
    try {
      const newTransactionNetworks = await models.Transactions.create({
        id: uuidv4(),
        ...body,
      });
      if (!newTransactionNetworks) {
        throw boom.badRequest('error creating transactionNetwoks');
      }
      return newTransactionNetworks;
    } catch (error) {
      throw boom.boomify(error, 'error creating transaction network');
    }
  }

  async find() {
    try {
      const transactionNetworks = await models.transaction_networks.findAll({
        include: ['transactions'],
      });
      if (transactionNetworks.length === 0) {
        throw boom.notFound('no Transactions found');
      }
      return { Transactions };
    } catch (error) {
      throw boom.boomify(error, 'error finding transaction network');
    }
  }

  async findOne(id) {
    try {
      const transactionNetworks = await models.transaction_networks.findByPk(
        id
      );
      if (!transactionNetworks) {
        throw boom.notFound('Transactions not found');
      }
      return transactionNetworks;
    } catch (error) {
      throw boom.boomify(error, 'error finding transaction networks');
    }
  }

  async update(id, body) {
    const transactionNetworks = await this.findOne(id);
    try {
      const res = await transactionNetworks.update(body);
      return res;
    } catch (error) {
      throw boom.boomify(error, 'error updating transaction network');
    }
  }

  async partialUpdate(id, body) {
    const transactionNetworks = await this.findOne(id);
    try {
      const transactionUpdate = {
        ...transactionNetworks,
        ...body,
      };
      const res = await user.update(transactionUpdate);

      return res;
    } catch (error) {
      throw boom.boomify(error, 'error updating transaction networks');
    }
  }

  async delete(id) {
    const transactionNetworks = await this.findOne(id);
    try {
      const res = transactionNetworks.destroy();
      return res;
    } catch (error) {
      throw boom.boomify(error, 'error deleting transaction network');
    }
  }
}

module.exports = TransactionNetworksService;
