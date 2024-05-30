const express = require("express");
const router = express.Router();
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

const Suggestion = require("../Schema_models/suggestions/suggestions");

router.post("/", async (req, res) => {
  console.log("Server suggestion test");
  console.log(req.body);
  try {
    console.log("Inside try block");
    const suggestion = Suggestion.create(req.body);
    console.log("Made suggestion object");
    res.status(200).json("Successfully made a new suggestion");
  } catch (error) {
    console.log("We failed");
    console.log(error);
    res.status(400).json(error);
  }
  console.log("Finsished in Suggestions");
});

module.exports = router;
