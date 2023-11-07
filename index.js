// This file will contain the express backend code for the Journal API.
const express = require("express");
const bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;
const https = require("https");
const fs = require("fs");
const app = express();
const port = 8000;

https
  .createServer(
    // Provide the private and public key to the server by reading each
    // file's content with the readFileSync() method.
    {
      key: fs.readFileSync("ssl/key.pem"),
      cert: fs.readFileSync("ssl/cert.pem"),
    },
    app
  )
  .listen(port, () => {
    console.log("ssl server is running at port " + port);
  });

// Middleware to parse JSON requests
app.use(bodyParser.json());

// POST /login endpoint
app.post("/api/authenticate", (req, res) => {
  console.log(req.body);

  // Example of extracting data
  // const { username, password } = req.body;

  // Example of returning data
  res.json({
    status: "success",
    message: "Login successful",
    // ... any other relevant data
  });
});

// https://www.mongodb.com/docs/drivers/node/current/fundamentals/connection/connect/
const url = "mongodb://localhost:27017/mhadb";

function connectToDatabase() {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;

    var dbo = db.db("mhadb");
    dbo.createCollection("users", function (err, res) {
      if (err) throw err;
      console.log("User collection created created!");
      db.close();
    });
  });
}
// connectToDatabase()
