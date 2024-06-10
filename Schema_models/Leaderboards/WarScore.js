const mongoose = require("mongoose");
// const User = require("./users");

const WarScore = mongoose.Schema(
  {
    // user: { type: mongoose.Schema.Types.ObjectId, required: true },
    Username: { type: String, required: true },
    Score: { type: Number, required: true },
  },
  {
    timestamps: true, //Tells when the timestamp has been created or last updated
  }
);

module.exports = mongoose.model("WarScore", WarScore);
