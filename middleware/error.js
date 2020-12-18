const winston = require("winston");
const tgb = require("../helpers/telegram");

module.exports = async function (err, req, res, next) {
  await tgb.alert_Dev(err.message);
  await tgb.alert_Dev(err.stack);
  winston.error(err.message, err);
  res.status(500).send("Something failed.");
};
