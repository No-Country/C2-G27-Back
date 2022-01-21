const SavingsTierRateService = require('../services/savingsTierRate.service');
const passport = require('passport');
const { checkRoles } = require('../middlewares/auth.handler');

const express = require('express');
const router = express.Router();

const savingsTierRateService = new SavingsTierRateService();

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin', 'viewer'),
  async (req, res, next) => {
    try {
      const savingsTierRates = await savingsTierRateService.find();
      res.json(savingsTierRates);
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
      const savingsTierRate = await savingsTierRateService.findOne(id);

      res.json(savingsTierRate);
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
      const savingsTierRate = await savingsTierRateService.create(body);

      res.json(savingsTierRate);
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

      const savingsTierRate = await savingsTierRateService.update(id, body);

      res.json(savingsTierRate);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const savingsTierRate = await savingsTierRateService.partialUpdate(
        id,
        body
      );

      res.json(savingsTierRate);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const savingsTierRate = await savingsTierRateService.delete(id);
      res.json(savingsTierRate);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
