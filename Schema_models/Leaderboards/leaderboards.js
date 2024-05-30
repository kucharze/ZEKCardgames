const express = require("express");
const router = express.Router();
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

// const Suggestion = require("../Schema_models/suggestions/suggestions");

router.post("/", async (req, res) => {
  console.log("Server Leaderboard test");
  console.log(req.body);
});

module.exports = router;
