const mongoose = require("mongoose");
// const User = require("./users");

const Suggestion = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true },
    post: { type: String, required: true },
    likes: { type: Number, required: true },
    likedList: [
      {
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
  }
  //   {
  //     timestamps: true, //Tells when the timestamp has been created or last updated
  //   }
);

module.exports = mongoose.model("Suggestion", Suggestion);
