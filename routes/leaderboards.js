const express = require("express");
const router = express.Router();

const Blackjack = require("../Schema_models/leaderboards/Blackjackwins.js");
const EightMoves = require("../Schema_models/leaderboards/EightMoves.js");
const WarScore = require("../Schema_models/leaderboards/WarScore.js");

router.get("/:game", async (req, res) => {
  console.log("Server Leaderboard test");
  console.log("We are searching for game", req.params.game);
  res.status(200).json("Success accessing server for leaderboards");
});

module.exports = router;
