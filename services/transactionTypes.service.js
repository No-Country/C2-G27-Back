const { v4: uuidv4 } = require('uuid');
const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class TransactionTypesService {
  async create(body) {
    try {
      const newTransactionTypes = await models.Transactions_Types.create({
        id: uuidv4(),
        ...body,
      });
      if (!newTransactionTypes) {
        throw boom.badRequest('error creating transactionNetwoks');
      }
      return newTransactionTypes;
    } catch (error) {
      throw boom.boomify(error, 'error creating transaction types');
    }
  }

  async find() {
    try {
      const transactionTypes = await models.transaction_Types.findAll();
      if (transactionTypes.length === 0) {
        throw boom.notFound('no transaction types found');
      }
      return { Transactions };
    } catch (error) {
      throw boom.boomify(error, 'error finding transaction types');
    }
  }

  async findOne(id) {
    try {
      const transactionTypes = await models.transaction_Types.findByPk(id);
      if (!transactionTypes) {
        throw boom.notFound('transaction type not found');
      }
      return transactionTypes;
    } catch (error) {
      throw boom.boomify(error, 'error finding transaction types');
    }
  }

  async update(id, body) {
    const transactionTypes = await this.findOne(id);
    try {
      const res = await transactionTypes.update(body);
      return res;
    } catch (error) {
      throw boom.boomify(error, 'error updating transaction types');
    }
  }

  async partialUpdate(id, body) {
    const transactionTypes = await this.findOne(id);
    try {
      const transactionUpdate = {
        ...transactionTypes,
        ...body,
      };
      const res = await user.update(transactionUpdate);

      return res;
    } catch (error) {
      throw boom.boomify(error, 'error updating transaction types');
    }
  }

  async delete(id) {
    const transactionTypes = await this.findOne(id);
    try {
      const res = transactionTypes.destroy();
      return res;
    } catch (error) {
      throw boom.boomify(error, 'error deleting transaction types');
    }
  }
}

module.exports = TransactionTypesService;
