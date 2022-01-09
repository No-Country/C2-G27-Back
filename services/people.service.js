const { v4: uuidv4 } = require('uuid');
const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const UsersService = require('./users.service');

class PeopleService {
  async create(body) {
    const newPerson = {
      id: uuidv4(),
      ...body,
    };
    let people = await models.People.create(newPerson);

    if (!newPerson) {
      throw boom.badRequest('error creating person');
    }

    if (body.user) {
      const userService = new UsersService();
      const newUser = await userService.create({
        ...body.user,
        peopleId: newPerson.id,
      });

      people = {
        ...people,
        ...newUser,
      };
    }
    return people;
  }

  async find() {
    const people = await models.People.findAll({
      include: ['users'],
    });
    if (people.length === 0) {
      throw boom.notFound('no people found');
    }
    return { people };
  }

  async findOne(id) {
    const person = await models.People.findByPk(id);
    if (!person) {
      throw boom.notFound('person not found');
    }
    return person;
  }

  async update(id, body) {
    const person = await this.findOne(id);
    const res = await person.update(body);

    return res;
  }

  async delete(id) {
    const person = await this.findOne(id);
    const res = await person.destroy();

    return res;
  }
}

module.exports = PeopleService;
