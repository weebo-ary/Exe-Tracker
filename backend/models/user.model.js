const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      // Validations
      type: String, // It has to be String
      required: true, // it is a required option
      unique: true, //it should be unique
      trim: true, // trim all the white-spaces between letters
      minlength: 3, // it has a minimum length of 3
    },
  },
  {
    timestamps: true, //timestamps of when it is created or when it is modified
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;

// It will be same for almost all the mongoose Schema
