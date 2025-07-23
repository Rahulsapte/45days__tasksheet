// server.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load .env file

const userRoutes = require('./routes/userRoutes'); // Your route file

const app = express();
app.use(express.json());

// ✅ MongoDB Connection
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
  console.error("❌ MONGO_URI is undefined. Check your .env file!");
  process.exit(1);
}

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use('/api/users', userRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
