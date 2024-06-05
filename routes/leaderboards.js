const express = require("express");
const router = express.Router();

// const Suggestion = require("../Schema_models/suggestions/suggestions");

router.get("/:game", async (req, res) => {
  console.log("Server Leaderboard test");
  console.log("We are searching for game", req.params.game);
  res.status(200).json("Success accessing server for leaderboards");
});

module.exports = router;
