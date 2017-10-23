const express = require("express");
const router = express.Router();
const path = require("path");

// Handles Ajax request for user information
router.get("/", function(req, res) {
  console.log("GET /user -> req.isAuthenticated:", req.isAuthenticated());
  if (!req.isAuthenticated()) {
    res.sendStatus(401);
  } else {
    res.send(req.user);
  }
});

// clear all server session information about this user
router.get("/logout", (req, res) => {
  // Use passport's built-in method to log out the user
  console.log("user logged out");
  req.logOut();
  res.sendStatus(200);
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/index.html"));
});

module.exports = router;
