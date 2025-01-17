const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const TokenBlackList = require("../models/TokenBlackList");
// const { userValidateSchema } = require("../utils/validation");
const saltRoundd = 10;

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      const verifyPass = await bcrypt.compare(password, user.password);
      if (verifyPass) {
        const token = jwt.sign(
          { userId: user._id, role: user.role },
          process.env.SECRET_KEY,
          { expiresIn: "15d" }
        );

        return res.status(200).send({
          message: "You logged",
          token,
          user: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
          },
        });
      }
      console.log("email or password is not correct!!!");
      return res.status(400).send({ message: "email or password is not correct!!!" });
    }
    return res.status(400).send({ message: "email or password is not correct!!!" });
  } catch (error) {
    return res.status(500).send({ message: "Internal Sever Error" });
  }
};

const singnup = async (req, res) => {
  // firtName:String,
  // lastName: {type: String,match:/[a-z]/ig , max:10},
  // email:String,
  // password:String

  try {
    const { firstName, lastName, email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "ایمیل قبلا استفاده شده است" });
    }

    const hashPassword = await bcrypt.hash(password, saltRoundd);

    const newUser = User({
      firstName,
      lastName,
      email,
      password: hashPassword,
    });
    await newUser.save();
    return res.status(201).send({ message: "User created" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: "Internal Sever Error" });
  }
};

const logout = async (req, res) => {
  try {
    const tokenWithBearer = req.headers.authorization;
     const token = tokenWithBearer.slice(7)
    await TokenBlackList.create({ token });
    return res.status(200).send({ message: "You logged out" });
  } catch (error) {
    return res.status(500).send({ message: "Internal Sever Error" });
  }
};

///////////////// changepass
// const changePassword = async (req, res) => {
//   try {
//     const { email, oldPassword, newPassword } = req.body;

//     const user = await User
//       .findOne({ email });

//     if (user) {
//       const verifyPass = await bcrypt.compare(oldPassword, user.password);
//       if (verifyPass) {
//         const hashPassword = await bcrypt.hash(newPassword, saltRoundd);
//         user.password = hashPassword;
//         await user.save();
//         return res.status(200).send({ message: "Password changed" });
//       }
//       return res.status(400).send({ message: "old password is not correct!!!" });
//     } else {
//       return res.status(400).send({ message: "email is not correct!!!" });
//     } 
//   } 
//   catch (error) {
//     return res.status(500).send({ message: "Internal Sever Error" });
//   }
// }

//forgot password
// const forgotPassword = async (req, res) => { 
//   try {

//     const { email } = req.body;
//     const user  = await User
//       .findOne({ email });  
//     if (user) {
//       const token = jwt.sign(
//         { userId: user._id, role: user.role },
//         process.env.SECRET_KEY,
//         { expiresIn: "15m" }
//       );
//       return res.status(200).send({ message: "token sent to your email", token });
//     } 
//     return res.status(400).send({ message: "email is not correct!!!" });
//   }
//   catch (error) {
//     return res.status(500).send({ message: "Internal Sever Error" });
//   }
// }

module.exports = { login, singnup, logout };


