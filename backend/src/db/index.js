const mongoose = require("mongoose");
const error = require("../error");
async function connectDB() {
  const URI = process.env.DATABASE_CONNECTION_URI;
  if (!URI) error("Invalid Database Connection URI string");
  mongoose.set("strictQuery", false);
  mongoose
    .connect(URI, {
      connectTimeoutMS: 10 * 1000,
    })
    .then((connection) => {
      console.log(`Connected to database: ${connection.connection.name}`);
    })
    .catch((err) => {
      console.log(err);
      console.log("⚠️ Failed to establish connection to database. exiting...");
      process.exit(1);
    });
}

module.exports = connectDB;
