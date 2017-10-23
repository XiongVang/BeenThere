const express = require("express");
const router = express.Router();
const passport = require("passport");
const path = require("path");

router.post("/", (req, res, next) => {
  console.log("post /register route");
  /*
  username: {type: String, required: true, index: {unique: true}},
  password: {type: String, required: true},
  recipes: {type: Array}
  */
  const userToSave = {
    username: req.body.username,
    password: req.body.password
  };

  console.log("userToSave", userToSave);

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

router.put("/", passport.authenticate("local"), function(req, res) {
  res.status(200).send(req.user.username);
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/index.html"));
});

module.exports = router;
