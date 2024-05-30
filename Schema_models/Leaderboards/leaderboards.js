const express = require("express");
const router = express.Router();

// const Suggestion = require("../Schema_models/suggestions/suggestions");

router.get("/", async (req, res) => {
  console.log("Server Leaderboard test");
  console.log(req.body);
});

module.exports = router;
