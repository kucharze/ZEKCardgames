const mongoose = require("mongoose");
// const User = require("./users");

const User = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true },
    post: { type: String, required: true },
    likes: { type: Number, required: true },
  }
  //   {
  //     timestamps: true, //Tells when the timestamp has been created or last updated
  //   }
);

module.exports = mongoose.model("User", User);
