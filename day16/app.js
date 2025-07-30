// app.js
const express = require('express');
const userRoutes = require('./routes/user');

const app = express();
app.use(express.json()); // To parse JSON request bodies

app.use('/api/users', userRoutes); // Use user routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
