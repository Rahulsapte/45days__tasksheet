// app.js
const express = require('express');
const app = express();

// ========== Custom Logger Middleware ==========
const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

// ========== Error Handling Middleware ==========
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: 'Something went wrong!', message: err.message });
};

// ========== Routes ==========
app.get('/users', logger, (req, res) => {
  res.json({ message: 'List of users' });
});

app.get('/users/error', logger, (req, res, next) => {
  // Simulate error
  next(new Error('Intentional error occurred'));
});

// ========== 404 Handler ==========
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route Not Found' });
});

// ========== Use Central Error Handler ==========
app.use(errorHandler);

// ========== Start Server ==========
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
