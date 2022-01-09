const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const UserService = require('../../services/users.service');

const userService = new UserService();

const LocalStrategy = new Strategy(async (username, password, done) => {
  try {
    const user = await userService.findByUsername(username);
    const match = await bcrypt.compare(password, user.password);
    if (!user || !match) {
      done(boom.unauthorized(), false);
    }
    done(null, user);
  } catch (error) {
    done(error, false);
  }
});

module.exports = LocalStrategy;
