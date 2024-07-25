const express = require("express");
const router = express.Router();

const Blackjack = require("../Schema_models/Leaderboards/Blackjackwins.js");
const EightMoves = require("../Schema_models/Leaderboards/EightMoves.js");
const WarScore = require("../Schema_models/Leaderboards/WarScore.js");
const GoFishScore = require("../Schema_models/Leaderboards/GoFishScore.js");
const MatchMoves = require("../Schema_models/Leaderboards/MatchMoves.js");
const SpiderSolitareScore = require("../Schema_models/Leaderboards/SpiderSolitareScore.js");

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
  } else if (game === "Go Fish High Score") {
    try {
      const leaderboard = await GoFishScore.find();
      res.status(200).json(leaderboard);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  } else if (game === "Matching Moves") {
    try {
      const leaderboard = await MatchMoves.find();
      res.status(200).json(leaderboard);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  } else if (game === "Spider Solitare Score") {
    try {
      const leaderboard = await SpiderSolitareScore.find();
      res.status(200).json(leaderboard);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  } else {
    res.status(400).json("Game Leaderboard not yet implemented");
  }
});

module.exports = router;
