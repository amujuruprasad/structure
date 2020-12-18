const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 30 * 1000,
  max: 50,
});

module.exports = function (app) {
  app.use(cors());
  app.use(limiter);
  app.use(helmet());
  app.use(compression());
};
