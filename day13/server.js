const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cookieParser());

// Dummy user
const dummyUser = {
  id: 1,
  username: "rahul",
  password: "123456"
};

// LOGIN ROUTE — Issue JWT in HTTP-only cookie
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === dummyUser.username && password === dummyUser.password) {
    const token = jwt.sign({ id: dummyUser.id, username: dummyUser.username }, process.env.JWT_SECRET, {
      expiresIn: "1h"
    });

    // Set HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // set to true in production with HTTPS
      sameSite: "strict",
      maxAge: 60 * 60 * 1000 // 1 hour
    });

    res.json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

// PROTECTED ROUTE
app.get("/dashboard", (req, res) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ message: `Welcome ${decoded.username} to your dashboard.` });
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
});

// LOGOUT ROUTE — Clear cookie
app.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
