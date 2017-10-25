const express = require("express");
const router = express.Router();
const passport = require("passport");
const path = require("path");
const Users = require("../models/user.model");

// register
router.post("/", (req, res, next) => {
  console.log("post /register route");
  const userToSave = {
    username: req.body.username,
    password: req.body.password
  };

  console.log("userToSave", userToSave);

  /*
  username: {type: String, required: true, index: {unique: true}}
  password: {type: String, required: true}
  */
  Users.create(userToSave, (err, post) => {
    console.log("post /register -- User.create");
    if (err) {
      console.log("post /register -- User.create -- failure");
      res.sendStatus(500);
    } else {
      console.log("post /register -- User.create -- success");
      res.sendStatus(201);
    }
  });
});

// login
router.put("/", passport.authenticate("local"), (req, res) =>{
  res.status(200).send(req.user.username);
});

// authenticate
router.get("/", (req, res) => {
  console.log("/auth GET hit!!!");
  if (req.isAuthenticated()) {
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/index.html"));
});

module.exports = router;
