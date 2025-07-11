const express = require("express");
require("dotenv").config();

const cors = require("cors");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE);

const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
//Set up to access faviocon name icon
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

//Used for testing
app.use("/*", (req, res, next) => {
  console.log("New data has come in: ", req.body);
  next();
});

//API routes
app.use("/suggestions", require("./routes/suggestions"));
app.use("/leaderboards", require("./routes/leaderboards"));
app.use("/users", require("./routes/users"));

//For games, have site store info along with id for game
//to send to server, while server holds info for games

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", function (req, res) {
  // renders the html file
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen("3000", () => {
  console.log("Listening on port 3000");
});
