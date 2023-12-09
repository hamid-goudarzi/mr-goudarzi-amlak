const mongoose = require("mongoose")

const TokenBlackList = mongoose.Schema(
    {
      token: { type: String, required: true },
    },
    { timestamps: true }
  );


module.exports = mongoose.model("TokenBlackList", TokenBlackList)


