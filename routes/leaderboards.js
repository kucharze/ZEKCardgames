const express = require("express");
const router = express.Router();
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  console.log("Server leaderboard test");
  console.log(req.body);
});

module.exports = router;
