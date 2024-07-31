const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const users = require("../Schema_models/Users/Users");

router.get("/", async (req, res) => {
  console.log("Server User test");
  res.status(200).json("Success accessing server for Users");
});

module.exports = router;
