require("dotenv").config("../.env");
const express = require("express");
const { notFoundHandler, errorHandler } = require("./error");
const app = express();

app.use(require("./middleware"));
app.use(require("./routes"));
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
