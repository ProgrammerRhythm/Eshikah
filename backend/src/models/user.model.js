const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  dateOfBirth: Number,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ["member", "admin", "superAdmin"],
    default: "member",
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
});

const User = model("user", userSchema);

module.exports = User;
