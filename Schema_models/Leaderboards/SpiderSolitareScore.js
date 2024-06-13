const mongoose = require("mongoose");

const SpiderSolitareScore = mongoose.Schema(
  {
    Username: { type: String, required: true },
    Score: { type: Number, required: true },
  },
  {
    timestamps: true, //Tells when the timestamp has been created or last updated
  }
);

module.exports = mongoose.model("SpiderSolitareScore", SpiderSolitareScore);
