const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const generateToken = (id) => {
  dotenv.config();
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });
};

module.exports = generateToken;
