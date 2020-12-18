module.exports = function (req, res, next) {
  if (req.user.adminType === 0 || req.user.adminType === 1) {
  } else {
    return res.status(403).send("Access denied.");
  }
  next();
};
