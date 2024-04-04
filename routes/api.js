const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/signup', userController.createUser, (req, res) => {
  return res.status(200).json(res.locals.users);
});

router.post('/login', userController.verifyUser, (req, res) => {
  return res.status(200).json(res.locals.users);
});


module.exports = router;