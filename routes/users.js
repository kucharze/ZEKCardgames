const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const Users = require("../Schema_models/Users/Users");

router.post("/login", async (req, res) => {
  console.log("Server User test");
  try {
    let user = req.body;
    const users = await Users.findOne({ userName: user.userName });
    if (!users) return res.status(400).json("User not found");
    console.log("Found the user: " + users);

    const validPassword = await bcrypt.compare(user.password, users.password);

    if (!validPassword) return res.status(400).json("Wrong password");
    console.log("Valid password: " + validPassword);

    const { password, ...others } = users._doc;

    console.log("Found the user: " + users);
    console.log("Attempting to send data back to user");
    console.log(others);
    console.log("Success accessing server for Users");
    // res.status(200).json(req.userName);
    res.status(200).json(users);
  } catch (error) {
    console.log("Error logging in");
    console.log(error);
    res.status(400).json("Error logging in: " + error);
  }
});

router.post("/createuser", async (req, res) => {
  console.log("Saving a user");
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
    const user = new Users(req.body);
    user.save();

    console.log("Success accessing server for Users");
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json("Error creating user: " + error);
  }
});

module.exports = router;
