// routes/user.js
const express = require('express');
const router = express.Router();

const { registerSchema } = require('../validations/userValidation');
const validateRequest = require('../middleware/validateRequest');

// POST /api/users/register
router.post('/register', validateRequest(registerSchema), (req, res) => {
  const { username, email, password, age } = req.body;
  res.status(200).json({
    message: '✅ Registration successful!',
    data: { username, email, age }
  });
});

module.exports = router;
