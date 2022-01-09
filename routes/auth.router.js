const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { checkApiKey } = require('../middlewares/auth.handler');

const router = express.Router();

router.post(
  '/login',
  checkApiKey,
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const payload = {
        sub: user.id,
        role: user.role,
      };
      const token = await jwt.sign(payload, process.env.JWT_SECRET);
      delete user.dataValues.password;
      res.json({ user, token });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
