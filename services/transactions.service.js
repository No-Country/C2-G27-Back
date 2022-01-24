const { v4: uuidv4 } = require('uuid');
const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class TransactionsService {
  async create(body) {
    try {
      const newTransaction = await models.Transactions.create({
        id: uuidv4(),
        ...body,
      });
      if (!newTransaction) {
        throw boom.badRequest('error creating transactionNetwoks');
      }
      return newTransaction;
    } catch (error) {
      throw boom.boomify(error, 'error creating transaction ');
    }
  }

  async find() {
    try {
      const transaction = await models.Transactions.findAll({
        include: ['wallet', 'asset', 'transaction_Type', 'transaction_Network'],
      });
      if (transaction.length === 0) {
        throw boom.notFound('no transaction  found');
      }
      return { transaction };
    } catch (error) {
      throw boom.boomify(error, 'error finding transaction');
    }
  }

  async findOne(id) {
    try {
      const transaction = await models.Transactions.findByPk(id);
      if (!transaction) {
        throw boom.notFound('transaction type not found');
      }
      return transaction;
    } catch (error) {
      throw boom.boomify(error, 'error finding transaction');
    }
  }

  async update(id, body) {
    const transaction = await this.findOne(id);
    try {
      const res = await transaction.update(body);
      return res;
    } catch (error) {
      throw boom.boomify(error, 'error updating transaction');
    }
  }

  async partialUpdate(id, body) {
    const transaction = await this.findOne(id);
    try {
      const transactionUpdate = {
        ...transaction,
        ...body,
      };
      const res = await user.update(transactionUpdate);

      return res;
    } catch (error) {
      throw boom.boomify(error, 'error updating transaction');
    }
  }

  async delete(id) {
    const transaction = await this.findOne(id);
    try {
      const res = transaction.destroy();
      return res;
    } catch (error) {
      throw boom.boomify(error, 'error deleting transaction');
    }
  }
}

module.exports = TransactionsService;
