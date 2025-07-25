const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

// Create User
router.post('/', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

module.exports = router;
