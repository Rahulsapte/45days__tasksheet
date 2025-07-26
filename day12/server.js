const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const authenticateToken = require('./middleware');
const {
  generateAccessToken,
  generateRefreshToken,
  removeRefreshToken,
  isRefreshTokenValid
} = require('./auth');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const users = [{ username: 'rahul', password: '12345' }];

// 🔐 Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(403).json({ message: 'Invalid credentials' });

  const userPayload = { username: user.username };
  const accessToken = generateAccessToken(userPayload);
  const refreshToken = generateRefreshToken(userPayload);

  res.json({ accessToken, refreshToken });
});

// 🔒 Protected route
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: `Welcome, ${req.user.username}! You accessed a protected route.` });
});

// 🔁 Refresh Token route
app.post('/refresh', (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken || !isRefreshTokenValid(refreshToken)) {
    return res.sendStatus(403);
  }

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken({ username: user.username });
    res.json({ accessToken });
  });
});

// 🔓 Logout route
app.post('/logout', (req, res) => {
  const { refreshToken } = req.body;
  removeRefreshToken(refreshToken);
  res.json({ message: 'Logged out successfully.' });
});

app.listen(4000, () => console.log('Server running on http://localhost:4000'));
