const express = require("express");
const router = express.Router();
const passport = require("passport");
const path = require("path");

router.post("/", passport.authenticate("local"), function(req, res) {
  res.status(200).send(req.user.username);
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/index.html"));
});

module.exports = router;
