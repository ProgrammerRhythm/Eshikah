const User = require("../models/user.model");

const findUser = (key, value) => {
  if (key === "id") return User.findById(value);
  return User.findOne({ [key]: value });
};

const createUser = (email, userInformation) => {
  const user = new User({ email, ...userInformation });
  return user.save();
};

const updateUser = (id, informationToUpdate) => {
  return User.findByIdAndUpdate(id, { ...informationToUpdate });
};

const deleteUser = (id) => {
  return User.findByIdAndDelete(id);
};

module.exports = {
  findUser,
  createUser,
  updateUser,
  deleteUser,
};
