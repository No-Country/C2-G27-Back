const passport = require('passport');

const LocalStrategy = require('./strategies/local.strategy');
const JwtStratergy = require('./strategies/jwt.strategy');

passport.use(LocalStrategy);
passport.use(JwtStratergy);
