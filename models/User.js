const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    firstName: { type: String, match: /[a-z]/, required: true },
    lastName: { type: String, match: /[a-z]/, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, match: /[a-zA-Z0-9]{8,30}/, required: true },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      required: true,
      default: "USER",
    },
  },
  { timestamps: true },
  // {
  //   toJSON: {
  //     transform: (document, returnedObject) => {
  //       returnedObject.id = returnedObject._id.toString();
  //       delete returnedObject._id;
  //       delete returnedObject.__v;
  //       delete returnedObject.password;
  //     },
  //   },
  // }
  
);

UserSchema.set("toJSON", {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();

      delete returnedObject._id;
      delete returnedObject.__v;
      delete returnedObject.password;
    },
  } )

module.exports = mongoose.model("User", UserSchema);
