const { v4: uuidv4 } = require('uuid');
const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class AssetsService {
  async create(body) {
    try {
      const newAsset = await models.Assets.create({
        id: uuidv4(),
        ...body,
      });
      if (!newAsset) {
        throw boom.badRequest('error creating asset');
      }
      return newAsset;
    } catch (error) {
      throw boom.boomify(error, 'error creating asset');
    }
  }

  async find() {
    try {
      const asset = await models.Assets.findAll();
      if (asset.length === 0) {
        throw boom.notFound('no assets found');
      }
      return { asset };
    } catch (error) {
      throw boom.boomify(error, 'error finding asset');
    }
  }

  async findOne(id) {
    try {
      const asset = await models.Assets.findByPk(id);
      if (!asset) {
        throw boom.notFound('asset not found');
      }
      return asset;
    } catch (error) {
      throw boom.boomify(error, 'error finding asset');
    }
  }

  async update(id, body) {
    const asset = await models.Assets.findOne(id);
    try {
      const res = await asset.update(body);
      if (!res) {
        throw boom.badRequest('error updating asset');
      }
      return res;
    } catch (error) {
      throw boom.boomify(error, 'error updating asset');
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
    const asset = await models.Assets.findOne(id);
    try {
      const res = asset.destroy();
      if (!res) {
        throw boom.badRequest('error deleting asset');
      }
      return res;
    } catch (error) {
      throw boom.boomify(error, 'error deleting asset');
    }
  }
}

module.exports = AssetsService;
