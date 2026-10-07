const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "Backend is running",
  });
});

// API test route
app.get("/api/test", (req, res) => {
  res.json({
    message: "API is working",
  });
});

// Login route
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  console.log("Email:", email);
  console.log("Password:", password);

  res.json({
    message: "Login data received",
    data: {
      email,
      password,
    },
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});