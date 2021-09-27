const { Schema, model } = require("mongoose");

require("./dbConfig");

const userSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const User = model("User", userSchema);

module.exports = User;
