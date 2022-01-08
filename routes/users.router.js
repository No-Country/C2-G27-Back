const UsersService = require('../services/users.service');
const passport = require('passport');

const express = require('express');
const router = express.Router();

const usersService = new UsersService();

router.get('/', async (req, res, next) => {
  try {
    //const users = await usersService.find();

    res.json({ holas: 'holas' });
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await usersService.findOne(id);

      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const body = req.body;
      const user = await usersService.create(body);

      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const user = await usersService.update(id, body);

      res.json(user);
    } catch (error) {
      res.json(error);
    }
  }
);

router.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const user = await usersService.partialUpdate(id, body);

      res.json(user);
    } catch (error) {
      res.json(error);
    }
  }
);

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const { id } = req.params;
      const user = usersService.delete(id);

      res.json(user);
    } catch (error) {
      res.json(error);
    }
  }
);

module.exports = router;
