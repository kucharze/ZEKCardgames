const express = require("express");
const router = express.Router();

// const Suggestion = require("../Schema_models/suggestions/suggestions");

router.get("/", async (req, res) => {
  console.log("Server Leaderboard test");
  res.status(200).json("Success");
});

module.exports = router;
