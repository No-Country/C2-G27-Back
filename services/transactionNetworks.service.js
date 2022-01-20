const { v4: uuidv4 } = require('uuid');
const boom = require('@hapi/boom');
const { Models } = require('../libs/sequelize');
const bcrypt = require('bcrypt');

class TransactionNetworksService {
  async create(body) {
    const hash = await bcrypt.hash(body.password, 15);
    try {
      const newTransactionNetworks = await models.Transactions.create({
        id: uuidv4(),
        ...body,
        password: hash,
      });
      if (!newTransactionNetworks) {
        throw boom.badRequest('error creating transactionNetwoks');
      }
      delete newTransactionNetworks.dataValues.password;
      return newTransactionNetworks;
    } catch (error) {
      throw new Error(error);
    }
  }

  async find() {
    const transactionNetworks = await models.transaction_networks.findAll({
      include: ['people'],
    });
    if (Transactions.length === 0) {
      throw boom.notFound('no Transactions found');
    }
    //delete users.dataValues.password;
    return { Transactions };
  }

  async findOne(id) {
    const transactionNetworks = await models.transaction_networks.findByPk(id);
    if (!transactionNetworks) {
      throw boom.notFound('Transactions not found');
    }
    delete transactionNetworks.dataValues.password;
    return transactionNetworks;
  }

  async findByUsername(username) {
    try {
      const transactionNetworks = await models.transaction_networks.findOne({
        where: { username },
      });
      if (!user) {
        throw boom.notFound('Transactions not found');
      }
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id, body) {
    const transactionNetworks = await this.findOne(id);
    const res = await transactionNetworks.update(body);

    return res;
  }

  async partialUpdate(id, body) {
    const transactionNetworks = await this.findOne(id);
    const transactionUpdate = {
      ...transactionNetworks,
      ...body,
    };
    const res = await user.update(transactionUpdate);

    return res;
  }

  async delete(id) {
    const transactionNetworks = await this.findOne(id);
    const res = transactionNetworks.destroy();

    return res;
  }
}

module.exports = TransactionNetworksService;
