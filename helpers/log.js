const winston = require("winston");
require("express-async-errors");

module.exports = function () {
  const errorFilter = winston.format((info) => {
    return info.level === "error" ? info : false;
  });

  const warnFilter = winston.format((info) => {
    return info.level === "warn" ? info : false;
  });

  const infoFilter = winston.format((info) => {
    return info.level === "info" ? info : false;
  });
  const debugFilter = winston.format((info) => {
    return info.level === "debug" ? info : false;
  });
  const sillyFilter = winston.format((info) => {
    return info.level === "silly" ? info : false;
  });

  const customFormat = winston.format.printf((i) => {
    return JSON.stringify({ message: i.message });
  });

  winston.add(
    new winston.transports.File({
      filename: calltoday("logs") + ".log",
      level: "info",
      format: winston.format.combine(infoFilter(), customFormat),
    })
  );
  winston.add(
    new winston.transports.File({
      filename: calltoday("admin") + ".log",
      level: "silly",
      format: winston.format.combine(sillyFilter(), customFormat),
    })
  );
  winston.add(
    new winston.transports.File({
      filename: "debug.log",
      level: "debug",
      format: winston.format.combine(debugFilter(), customFormat),
    })
  );
  winston.add(
    new winston.transports.File({
      filename: "error.log",
      level: "error",
      format: winston.format.combine(errorFilter(), customFormat),
    })
  );
  winston.exceptions.handle(
    new winston.transports.File({ filename: "uncaughtExceptions.log" })
  );
  process.on("unhandledRejection", (ex) => {
    throw ex;
  });
};

function calltoday(tag) {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  today = yyyy + `${tag}` + "/" + mm + "/" + dd;
  return today;
}
