const { Strategy } = require('passport-local');
const { boom } = require('@hapi/boom');
const { veryfyPassword } = require('../../libs/verify.password');
const UserService = require('../../services/users.service');

const userService = new UserService();

const LocalStrategy = new Strategy(async (username, password, done) => {
  try {
    const user = await userService.findByUsername(username);
    if (!user) {
      done(boom.unauthorized(), false);
    }
    if (!veryfyPassword(password, user.password)) {
      done(boom.unauthorized(), false);
    }

    delete user.getDataValue.password;
    done(null, user);
  } catch (error) {
    done(error, false);
  }
});

module.exports = LocalStrategy;
