const mongoose = require("mongoose");
// const User = require("./users");

const CrazyEightsMoves = mongoose.Schema(
  {
    // user: { type: mongoose.Schema.Types.ObjectId, required: true },
    Username: { type: String, required: true },
    NumMoves: { type: Number, required: true },
  },
  {
    timestamps: true, //Tells when the timestamp has been created or last updated
  }
);

module.exports = mongoose.model("CrazyEightsMoves", CrazyEightsMoves);
