const express = require("express");
const router = express.Router();

const Blackjack = require("../Schema_models/leaderboards/Blackjackwins.js");
const EightMoves = require("../Schema_models/leaderboards/EightMoves.js");
const WarScore = require("../Schema_models/leaderboards/WarScore.js");

router.get("/:game", async (req, res) => {
  console.log("Server Leaderboard test");
  console.log("We are searching for game", req.params.game);
  //res.status(200).json("Success accessing server for leaderboards");

  let game = req.params.game;

  if (game === "Blackjack Wins") {
    try {
      const leaderboard = await Blackjack.find();
      res.status(200).json(leaderboard);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  } else if (game === "Crazy Eights Moves") {
    try {
      const leaderboard = await EightMoves.find();
      res.status(200).json(leaderboard);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  } else if (game === "War Score") {
    try {
      const leaderboard = await WarScore.find();
      res.status(200).json(leaderboard);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  }
});

module.exports = router;
