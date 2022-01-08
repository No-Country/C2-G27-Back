const { v4: uuidv4 } = require('uuid');
const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const { bcrypt } = require('bcrypt');

class UsersService {
  async create(body) {
    const hash = await bcrypt.hash(body.password, 15);
    const newUser = await models.Users.create({
      id: uuidv4(),
      ...body,
      password: hash,
    });
    if (!newUser) {
      throw boom.badRequest('error creating user');
    }
    delete newUser.dataValues.password;
    return newUser;
  }

  async find() {
    const [users] = await models.Users.findAll({
      include: ['people'],
    });

    return { users };
  }

  async findOne(id) {
    const user = await models.Users.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async findByUsername(username) {
    const user = await models.Users.findOne({
      where: { username },
    });
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async update(id, body) {
    const user = await this.findOne(id);
    const res = await user.update(body);

    return res;
  }

  async partialUpdate(id, body) {
    const user = await this.findOne(id);
    const userUpdate = {
      ...user,
      ...body,
    };
    const res = await user.update(userUpdate);

    return res;
  }

  async delete(id) {
    const user = await this.findOne(id);
    const res = user.destroy();

    return res;
  }
}

module.exports = UsersService;
