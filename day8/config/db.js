const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/day8demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('MongoDB error:', err));
