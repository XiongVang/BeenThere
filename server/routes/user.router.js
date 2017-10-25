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

// return username and list of trips
router.get("/", (req, res) => {
  let query = { _id: req.user._id };
  let fieldsToReturn = { username: 1, trips: 1, _id: 0 };

  User.findOne(query, fieldsToReturn, (error, result) => {
    if (error) {
      console.error("/user GET error:", error);
      res.sendStatus(500);
    } else {
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
/**  
 * title: { type: String, required: true },
 * startDate: { type: Date, required: true },
 * endDate: { type: Date, required: true }, 
 * */
router.post("/create/trip", (req, res) => {
  let userId = req.user.id;
  let trip = req.body;

  let filter = { _id: userId };
  let update = { $push: { trips: trip } };

  User.updateOne(filter, update, (error, result) => {
    if (error) {
      console.error("/user/create/trip POST error:", error);
      res.sendStatus(500);
    } else {
      res.status(201).send(result);
    }
  });
});

// create new postcard for given trip id param
/**
 * title: { type: String, required: true },
 * body: { type: String },
 * date: { type: Date, required: true },
 * location: { type: String }
 */
router.post("/create/postcard/:id", (req, res) => {
  let userId = req.user._id;
  let tripId = req.params.id;
  let postcard = req.body;

  let filter = { _id: userId, trips: { _id: tripId } };
  let update = { $push: { postcards } };

  User.updateOne(filter, update, (error, result) => {
    if (error) {
      console.error("/create/postcard/:id POST error:", error);
      res.sendStatus(500);
    } else {
      res.status(201).send(result);
    }
  });
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/index.html"));
});

module.exports = router;
