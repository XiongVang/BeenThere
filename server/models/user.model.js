const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;

// Mongoose Schema

/** postcard sub doc*/
const PostcardSchema = new Schema({
  imageUrl: { type: String },
  title: { type: String },
  body: { type: String },
  date: { type: Date },
  location: { type: String }
});

/** trip sub doc*/
const TripSchema = new Schema({
  title: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  postcards: [PostcardSchema]
});

/** user collection */
const UserSchema = new Schema({
  name: { type: String },
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  trips: [TripSchema]
});

// Called before adding a new user to the DB. Encrypts password.
UserSchema.pre("save", function(next) {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) {
        return next(err);
      }
      //IF WE WERE TO CONSOLE LOG RIGHT MEOW, user.password would be 12345
      user.password = hash;
      next();
    });
  });
});

// Used by login methods to compare login form password to DB password
UserSchema.methods.comparePassword = function(candidatePassword, callback) {
  // 'this' here refers to this instance of the User model
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) {
      return callback(err);
    }

    callback(null, isMatch);
  });
};

module.exports = mongoose.model("User", UserSchema);
