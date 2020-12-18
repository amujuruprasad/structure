const express = require("express");
const app = express();
const config = require("config");
const winston = require("winston");

require("./helpers/log")();
require("./helpers/mongodb")();
require("./helpers/prod")(app);
require("./helpers/routes")(app);

const port = config.get("port") || process.env.PORT;
const server = app.listen(port, () =>
  winston.debug(`Server Listening to ${port}`)
);

module.exports = server;
