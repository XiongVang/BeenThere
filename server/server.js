const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const passport = require("./strategies/mongo.localstrategy");
const sessionConfig = require("./modules/session.config");

//DB Module
const db = require("./modules/db.config.js");

// Route includes
const indexRouter = require("./routes/index.router");
const userRouter = require("./routes/user.router");
const authRouter = require("./routes/auth.router");

const port = process.env.PORT || 3000;

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve back static files
app.use(express.static("public"));

// Passport Session Configuration
app.use(sessionConfig);

// Start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/auth", authRouter);
app.use("/user", userRouter);

// Catch all bucket, must be last!
app.use("/", indexRouter);

// Listen //
app.listen(port, function() {
  console.log("Listening on port:", port);
});
