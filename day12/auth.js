const jwt = require('jsonwebtoken');
require('dotenv').config();

let refreshTokens = []; // Store refresh tokens temporarily (use DB in real apps)

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
}

function generateRefreshToken(user) {
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
  refreshTokens.push(refreshToken);
  return refreshToken;
}

function removeRefreshToken(token) {
  refreshTokens = refreshTokens.filter(t => t !== token);
}

function isRefreshTokenValid(token) {
  return refreshTokens.includes(token);
}

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  removeRefreshToken,
  isRefreshTokenValid,
};
