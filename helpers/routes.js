const express = require("express");
const users = require("../routes/user");
const error = require("../middleware/error");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/users", users);
  app.use(error);
};
