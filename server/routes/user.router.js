const express = require("express");
const router = express.Router();
const path = require("path");
const User = require("../models/user.model");

// authentication gateway
router.use((req, res, next) => {
  console.log("user router hit");
  if (req.isUnauthenticated()) {
    res.sendStatus(401);
  } else {
    next();
  }
});

// return user object including trips and postcards
router.get("/", function(req, res) {
  User.findOne({ _id: req.user._id }, { trips: 1, _id: 0 }, (err, result) => {
    if (err) {
      console.error("/user GET error:", err);
      res.sendStatus(500);
    } else {
      console.log("wtf?");
      delete result._id;
      delete result.password;
      console.log("/user GET result:", result);
      res.send(result);
    }
  });
});

// clear all server session information about this user
router.get("/logout", (req, res) => {
  // Use passport's built-in method to log out the user
  console.log("user logged out");
  req.logOut();
  res.sendStatus(200);
});

// create a new trip
router.post("/create/trip", (req, res) => {
  User.updateOne(
    { _id: req.user._id },
    { $push: { trips: req.body } },
    { upsert: true },
    err => {
      if (err) {
        console.error("/user/create/trip POST error:", err);
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    }
  );
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/index.html"));
});

module.exports = router;
