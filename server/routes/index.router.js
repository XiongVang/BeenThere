const express = require("express");
const router = express.Router();
const passport = require("passport");
const path = require("path");


router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/index.html"));
});

module.exports = router;
