const express = require("express");
const router = express.Router();
const passport = require("passport");
const path = require("path");

// Checks if user is authenticated before proceeding
router.use(passport.authenticate("local"), (req, res, next) => {
  next();
});

// Handles Ajax request for user information if user is authenticated
router.get("/", (req, res) => {
  res.send(req.user);
});

// clear all server session information about this user
router.get("/logout", (req, res) => {
  // Use passport's built-in method to log out the user
  console.log("Logged out");
  req.logOut();
  res.sendStatus(200);
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/index.html"));
});

module.exports = router;
