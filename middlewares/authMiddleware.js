const jwt = require("jsonwebtoken");
const TokenBlackList = require("../models/TokenBlackList");

const isLogged = async (req, res, next) => {
  const token = req.header("auth-token");
  // const token = req.headers.authorization.split(" ")[1];
  console.log(token);
  if (!token) {
  
    return res.status(401).json({ error: "You are not logged in" });
  }
  const tokenBlackList = await TokenBlackList.findOne({ token });

  if (tokenBlackList) {
   
    return res.status(401).json({ error: "Invalid Token" });
  }

  try {
    const verified = jwt.verify(token, process.env.SECRET_KEY);

    req.user = verified;
    console.log(verified);
    next();
  } catch (error) {
    return res.status(400).json({ error: "Invalid Token" });
  }
};
const isAdmin = async (req, res, next) => {
  const role = req.user.role;
  if (role !== "admin") {
    return res.status(403).json({ error: "You are not admin" });
  }
  next();
};

module.exports = { isLogged, isAdmin };
