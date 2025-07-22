const express = require('express');
const app = express();

// Import Routes
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');
const orderRoutes = require('./routes/order.routes');

// Middleware
app.use(express.json());

// Connect to MongoDB
require('./config/db');

// Use Routes
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/orders', orderRoutes);

// Start Server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
