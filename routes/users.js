const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const users = require("../Schema_models/Users/Users");

router.post("/", async (req, res) => {
  console.log("Server User test");
  try {
    let user = req.body;
    const users = await users.findOne({ username: user.username });
    if (!users) return res.status(400).json("User not found");

    const validPassword = await bcrypt.compare(user.password, users.password);

    if (!validPassword) return res.status(400).json("Wrong password");

    const { password, ...others } = users._doc;

    console.log(others);
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(400).json("Error logging in: " + error);
  }
  res.status(200).json("Success accessing server for Users");
});

router.post("/", async (req, res) => {
  console.log("Saving a user");
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
    const user = new users(req.body);
    user.save();
  } catch (error) {
    console.log(error);
    res.status(400).json("Error creating user: " + error);
  }

  res.status(200).json("Success accessing server for Users");
});

module.exports = router;
