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
  let fieldsToReturn = "name username trips";

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
 * title: { type: String },
 * body: { type: String },
 * date: { type: Date },
 * location: { type: String }
 */
router.post("/create/postcard/", (req, res) => {
  let userId = req.user._id;
  let tripId = req.body.tripId;
  let postcard = req.body.postcard;

  console.log(
    "user.router POST /create/postcard req.body.postcard:",
    req.body.postcard
  );

  User.findById(userId, (findError, user) => {
    if (findError) {
      console.log("/create/postcard/ POST findError:", findError);
      res.sendStatus(500);
    } else {
      // find trip w/ tripId and push postcard to postcards array
      user.trips.id(tripId).postcards.push(postcard);

      // save document after push
      user.save(saveError => {
        if (saveError) {
          console.log("/create/postcard/ POST saveError:", saveError);
          res.sendStatus(500);
        } else {
          res.sendStatus(201);
        }
      });
    }
  });
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/index.html"));
});

module.exports = router;
