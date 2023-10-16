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

app.listen("3001", () => {
  console.log("Listening on port 3001");
});
