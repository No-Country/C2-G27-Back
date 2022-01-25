const TransactionNetworksService = require('../services/transactionNetworks.service');
const passport = require('passport');
const { checkRoles } = require('../middlewares/auth.handler');

const express = require('express');
const router = express.Router();

const transactionNetworksService = new TransactionNetworksService();

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin', 'viewer'),
  async (req, res, next) => {
    try {
      const transactions = await transactionNetworksService.find();
      res.json(transactions);
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
      const transaction = await transactionNetworksService.findOne(id);

      res.json(transaction);
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
      const transaction = await transactionNetworksService.create(body);

      res.json(transaction);
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

      const transaction = await transactionNetworksService.update(id, body);

      res.json(transaction);
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

      const transaction = await transactionNetworksService.partialUpdate(
        id,
        body
      );

      res.json(transaction);
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
      const transaction = await transactionNetworksService.delete(id);
      res.json(transaction);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
