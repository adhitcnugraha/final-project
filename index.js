// import
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const User = require("./models/userModel.js");

// middleware
const app = express();
app.use(cors());
app.use(express.json());

const url = process.env.MONGODB_URL;
mongoose.connect(url);

// route
app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (error) {
    console.log(error.message);
    res.json({ status: "error", error: "Email was duplicated" });
  }
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (user) {
    return res.json({ status: "ok", user: true });
  } else {
    return res.json({ status: "error", user: false });
  }
});

// listener
const port = 4000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
