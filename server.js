const express = require("express");
require("dotenv").config();

const cors = require("cors");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

const app = express();

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", function (req, res) {
  // renders the html file
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen("3001", () => {
  console.log("Listening on port 3001");
});
