const { connect } = require("mongoose");
const config = require("config");
const winston = require("winston");

module.exports = function () {
  const dburl = config.get("db");
  connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      winston.debug("Database Connected");
    })
    .catch((err) => {
      winston.error(err);
    });
};
