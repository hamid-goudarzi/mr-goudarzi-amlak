const mongoose = require("mongoose")

const User = mongoose.Schema(
    {
      firstName: { type: String, match: /[a-z]/, required: true },
      lastName: { type: String, match: /[a-z]/, required: true },
      email: { type: String, unique: true, required: true },
      password: { type: String ,match:/[a-zA-Z0-9]{8,30}/, required: true },
      role: {
        type: String,
        enum: ["USER", "ADMIN"],
        required:true,
        default: "USER",
      },
    },
    { timestamps: true }
  );


module.exports = mongoose.model("User", User)


