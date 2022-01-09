const boom = require('@hapi/boom');

function checkApiKey(req, res, next) {
  const apiKey = req.headers['api'];
  if (apiKey === process.env.API_KEY) {
    next();
  } else {
    next(boom.unauthorized());
  }
}

function checkRoles(...roles) {
  return (req, res, next) => {
    const user = req.user;
    console.log(roles);
    if (roles.includes(user.role)) {
      next();
    } else {
      next(boom.unauthorized());
    }
  };
}

module.exports = { checkApiKey, checkRoles };
