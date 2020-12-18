const express = require("express");
const router = express.Router();
const { User } = require("../models/user");

router.post("/getuser", async (req, res) => {
  const data = await User.find({});
  return res.send(data);
});

module.exports = router;
