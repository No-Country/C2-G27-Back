//const UserService = require('../services/users.service');

const express = require('express');
const router = express.Router();

//const userService = new UserService();

router.get('/', async (req, res) => {
try {
  //const users = await userService.find()
  //res.json(JSON.parse(JSON.stringify(users)))
  res.json({popo:"popo"})
} catch (error) {
  res.status(404).json({message: "Not Found"  + error})
}
})
module.exports = router