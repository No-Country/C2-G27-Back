const { v4: uuidv4 } = require('uuid');
const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class SavingsService {
  async create(body) {
    try {
      const newSaving = await models.Savings.create({
        id: uuidv4(),
        ...body,
      });
      if (!newSaving) {
        throw boom.badRequest('error creating saving');
      }
      return newSaving;
    } catch (error) {
      throw boom.boomify(error, 'error creating saving ');
    }
  }

  async find() {
    try {
      const saving = await models.saving.findAll();
      if (saving.length === 0) {
        throw boom.notFound('no saving found');
      }
      return { Savings };
    } catch (error) {
      throw boom.boomify(error, 'error finding saving ');
    }
  }

  async findOne(id) {
    try {
      const saving = await models.saving.findByPk(id);
      if (!saving) {
        throw boom.notFound('saving not found');
      }
      return saving;
    } catch (error) {
      throw boom.boomify(error, 'error finding saving');
    }
  }

  async update(id, body) {
    const saving = await this.findOne(id);
    try {
      const res = await saving.update(body);
      return res;
    } catch (error) {
      throw boom.boomify(error, 'error updating saving');
    }
  }

  async partialUpdate(id, body) {
    const saving = await this.findOne(id);
    try {
      const savingUpdate = {
        ...saving,
        ...body,
      };
      const res = await user.update(savingUpdate);

      return res;
    } catch (error) {
      throw boom.boomify(error, 'error updating saving');
    }
  }

  async delete(id) {
    const saving = await this.findOne(id);
    try {
      const res = saving.destroy();
      return res;
    } catch (error) {
      throw boom.boomify(error, 'error deleting saving');
    }
  }
}

module.exports = SavingsService;
