const express = require("express");
const router = express.Router();
const path = require("path");
const Users = require("../models/user.model");
const utils = require("../modules/utils");

router.get("/", (req, res) => {
  Users.find({}, { trips: 1, _id: 0 }, (err, result) => {
    if (err) {
      console.error("/share GET error:", error);
      res.sendStatus(500);
    } else {
      res.send(result);
    }
  });
});

router.get("/:id", (req, res) => {
  let id = req.params.id;

  Users.find({}, { trips: 1, _id: 0 }, (err, result) => {
    if (err) {
      console.error("/share GET error:", error);
      res.sendStatus(500);
    } else {
      let matchedTrip = utils.findTripById(id, result);

      if (!matchedTrip) {
        res.sendStatus(500);
      } else {
        res.send(matchedTrip);
      }
    }
  });
});

module.exports = router;
