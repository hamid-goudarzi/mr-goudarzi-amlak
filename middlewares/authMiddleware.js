const jwt = require("jsonwebtoken");
const TokenBlackList = require("../models/TokenBlackList");

const isLogged = async (req, res, next) => {
  const tokenWithBearer = req.headers.authorization;
 
 
  const token = tokenWithBearer.slice(7)

  if (!token) {
    return res.status(401).json({ message: "You are not logged in" });
  }
  const tokenBlackList = await TokenBlackList.findOne({ token });

  if (tokenBlackList) {
    return res.status(401).json({ message: "Invalid Token" });
  }

  try {
 
    const verified = jwt.verify(token, process.env.SECRET_KEY);

    req.user = verified;
    next();
  } catch (error) {
    return res.status(400).json({ message: "Expired Token" });
  }
};


const isAdmin = async (req, res, next) => {
  const role = req.user.role;
  if (role !== "ADMIN") {
    return res.status(403).json({ message: "You are not admin" });
  }
  next();
};

module.exports = { isLogged, isAdmin };
