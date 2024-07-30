const mongoose = require("mongoose");

const Suggestion = mongoose.Schema(
  {
    // user: { type: mongoose.Schema.Types.ObjectId, required: true },
    suggestion: { type: String, required: true },
  },
  {
    timestamps: true, //Tells when the timestamp has been created or last updated
  }
);

module.exports = mongoose.model("Suggestion", Suggestion);
