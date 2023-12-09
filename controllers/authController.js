const bcrypt = require("bcrypt")
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const TokenBlackList = require("../models/TokenBlackList");
// const { userValidateSchema } = require("../utils/validation");
const saltRoundd = 10;

const login = async (req, res) => {
    try {
        const { email, password } = req.body


        const user = await User.findOne({ email })

        if (user) {
            const verifyPass = await bcrypt.compare(password, user.password)
            if (verifyPass) {
                const token = jwt.sign({ userId: user._id , role: user.role},
                    process.env.SECRET_KEY , { expiresIn: "15d" })

                return res.send({ message: "You logged", token, 
                user: { firstName: user.firstName, lastName: user.lastName, email: user.email } })

            }
            return res.send({ message: "email or password is not correct!!!" })
        }
        return res.send({ message: "email or password is not correct!!!" })
    } catch (error) {

        return res.status(500).send({ message: "Internal Sever Error" })
    }
}

const singnup = async (req, res) => {
    // firtName:String,
    // lastName: {type: String,match:/[a-z]/ig , max:10},
    // email:String,
    // password:String

    try {
        const { firstName, lastName, email, password } = req.body
        
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ error: 'ایمیل قبلا استفاده شده است' });
          }

        const hashPassword = await bcrypt.hash(password, saltRoundd)
      
        const newUser = User({
            firstName,
            lastName,
            email,
            password: hashPassword,
        })
        await newUser.save();
        return res.send({ message: "User created" })

    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: "Internal Sever Error" })
    }
}

const logout = async (req, res) => {
    try {
        const token = req.header("auth-token");
        await TokenBlackList.create({ token });
        return res.send({ message: "You logged out" });
    } catch (error) {
        return res.status(500).send({ message: "Internal Sever Error" });
    }
};

module.exports = { login, singnup, logout }