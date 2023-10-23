// This file will contain the express backend code for the Journal API.
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// POST /login endpoint
app.post("/login/", (req, res) => {
  // Example of extracting data
  const { username, password } = req.body;

  // TODO: Implement authentication logic here... maybe use OAuth e.g. google?

  // Example of returning data
  res.json({
    status: "success",
    message: "Login successful",
    // ... any other relevant data
  });
});
