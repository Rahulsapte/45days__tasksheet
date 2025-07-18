// Import express
const express = require('express');
const app = express();

// Define port
const PORT = 3000;

// Route: GET /
app.get('/', (req, res) => {
  res.send('Welcome to Express.js!');
});

// Route: GET /about
app.get('/about', (req, res) => {
  res.send('This is the About Page');
});

// Route: POST /submit
app.post('/submit', (req, res) => {
  res.send('POST request received!');
});

// Route: GET /user/:name
app.get('/user/:name', (req, res) => {
  res.send(`Hello, ${req.params.name}`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
