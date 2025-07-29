const express = require('express');
const router = express.Router();
const { register, login, logout, getUser } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/user', protect, getUser);

module.exports = router;
