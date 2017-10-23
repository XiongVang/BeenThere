const express = require("express");
const router = express.Router();
const Users = require("../models/user.model");
const path = require("path");

// Handles POST request with new user data


router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/index.html"));
});

module.exports = router;
