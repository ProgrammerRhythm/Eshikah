require("dotenv").config();
const http = require("http");
const app = require("./app/");
const connectDB = require("./db");

const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

server.start = () => {
  connectDB();
  server.listen(PORT, () => {
    console.log(`Server Listing on PORT ${PORT}`);
  });
};

module.exports = server;
