const WalletsService = require('../services/wallets.service');
const passport = require('passport');
const { checkRoles } = require('../middlewares/auth.handler');

const express = require('express');
const router = express.Router();

const walletService = new WalletsService();

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin', 'viewer'),
  async (req, res, next) => {
    try {
      const wallets = await walletService.find();
      res.json(wallets);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin', 'viewer'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const wallet = await walletService.findOne(id);

      res.json(wallet);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const wallet = await walletService.create(body);

      res.json(wallet);
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const wallet = await walletService.update(id, body);

      res.json(wallet);
    } catch (error) {
      next(error);
    }
  }
);

/* router.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const wallet = await walletService.partialUpdate(id, body);

      res.json(wallet);
    } catch (error) {
      next(error);
    }
  }
); */

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const wallet = await walletService.delete(id);
      res.json(wallet);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
