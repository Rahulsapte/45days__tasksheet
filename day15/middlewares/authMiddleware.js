const jwt = require('jsonwebtoken');

exports.protect = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) return res.status(401).json({ msg: 'No token. Access denied.' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
