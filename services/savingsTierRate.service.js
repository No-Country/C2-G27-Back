const { v4: uuidv4 } = require('uuid');
const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class SavingsTierRateService {
  async create(body) {
    try {
      const newSavingTierRate = await models.Savings_Tier_Rate.create({
        id: uuidv4(),
        ...body,
      });
      if (!newSavingTierRate) {
        throw boom.badRequest('error creating saving tier rate');
      }
      return newSavingTierRate;
    } catch (error) {
      throw boom.boomify(error, 'error creating saving tier rate');
    }
  }

  async find() {
    try {
      const savingTierRate = await models.Savings_Tier_Rate.findAll();
      if (savingTierRate.length === 0) {
        throw boom.notFound('no saving tier rate found');
      }
      return { savingTierRate };
    } catch (error) {
      throw boom.boomify(error, 'error finding saving tier rate');
    }
  }

  async findOne(id) {
    try {
      const savingTierRate = await models.Savings_Tier_Rate.findByPk(id);
      if (!savingTierRate) {
        throw boom.notFound('saving tier rate type not found');
      }
      return savingTierRate;
    } catch (error) {
      throw boom.boomify(error, 'error finding saving tier rate');
    }
  }

  async update(id, body) {
    const savingTierRate = await this.findOne(id);
    try {
      const res = await savingTierRate.update(body);
      return res;
    } catch (error) {
      throw boom.boomify(error, 'error updating saving tier rate');
    }
  }

  async partialUpdate(id, body) {
    const savingTierRate = await this.findOne(id);
    try {
      const savingTierRateUpdate = {
        ...savingTierRate,
        ...body,
      };
      const res = await user.update(savingTierRateUpdate);

      return res;
    } catch (error) {
      throw boom.boomify(error, 'error updating saving tier rate');
    }
  }

  async delete(id) {
    const savingTierRate = await this.findOne(id);
    try {
      const res = savingTierRate.destroy();
      return res;
    } catch (error) {
      throw boom.boomify(error, 'error deleting saving tier rate');
    }
  }
}

module.exports = SavingsTierRateService;
