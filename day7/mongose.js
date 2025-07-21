// day7.js
const mongoose = require('mongoose');

// 1️⃣ CONNECT TO MONGODB
mongoose.connect('mongodb://127.0.0.1:27017/day7db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected'))
.catch((err) => console.error('❌ Connection Error:', err));

// 2️⃣ DEFINE SCHEMA
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    min: 18,
    max: 100
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// 3️⃣ CREATE MODEL
const User = mongoose.model('User', userSchema);

// 4️⃣ CRUD OPERATIONS

// ➕ Create New User
const createUser = async () => {
  const user = new User({
    name: 'Rahul',
    email: 'rahul@example.com',
    age: 22
  });

  try {
    const savedUser = await user.save();
    console.log('🟢 User Created:', savedUser);
  } catch (err) {
    console.error('⚠️ Create Error:', err.message);
  }
};

// 📄 Read Users
const readUsers = async () => {
  const users = await User.find();
  console.log('📋 All Users:', users);
};

// ✏️ Update User
const updateUser = async () => {
  const result = await User.updateOne(
    { name: 'Rahul' },
    { age: 25 }
  );
  console.log('✏️ Update Result:', result);
};

// ❌ Delete User
const deleteUser = async () => {
  const result = await User.deleteOne({ name: 'Rahul' });
  console.log('❌ Delete Result:', result);
};

// 5️⃣ MAIN FUNCTION TO RUN OPERATIONS IN ORDER
const run = async () => {
  await createUser();
  await readUsers();
  await updateUser();
  await readUsers();
  await deleteUser();
  await readUsers();
  mongoose.disconnect(); // Close the connection after all operations
};

run();