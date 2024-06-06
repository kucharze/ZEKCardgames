const mongoose = require("mongoose");
// const User = require("./users");

const User = mongoose.Schema(
  {
    name: { type: String, required: true },
    userName: { type: String, required: true },
    password: { type: String, required: true },
  }
  //   {
  //     timestamps: true, //Tells when the timestamp has been created or last updated
  //   }
);

module.exports = mongoose.model("User", User);
