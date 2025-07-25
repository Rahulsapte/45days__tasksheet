// server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

// Middleware to parse JSON
app.use(bodyParser.json());

// Auth Routes
app.use('/api/auth', authRoutes);

// Connect to MongoDB (no deprecated options used)
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error('DB connection error:', err);
  });
