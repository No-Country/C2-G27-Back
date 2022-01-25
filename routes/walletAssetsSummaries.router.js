const WalletAssetSummariesService = require('../services/walletAssetsSummaries.service');
const passport = require('passport');
const { checkRoles } = require('../middlewares/auth.handler');

const express = require('express');
const router = express.Router();

const walletAssetSummariesService = new WalletAssetSummariesService();

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin', 'viewer'),
  async (req, res, next) => {
    try {
      const walletAssetSummaries = await walletAssetSummariesService.find();
      res.json(walletAssetSummaries);
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
      const wallet = await walletAssetSummariesService.findOne(id);

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
      const wallet = await walletAssetSummariesService.create(body);

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

      const wallet = await walletAssetSummariesService.update(id, body);

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

      const wallet = await walletAssetSummariesService.partialUpdate(id, body);

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
      const wallet = await walletAssetSummariesService.delete(id);
      res.json(wallet);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
