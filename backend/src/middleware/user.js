const jwt = require("jsonwebtoken");
const { User } = require("../models/user.modles");


async function checkForAuthentication(req, res, next) {
  
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "token not found" });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    
    const id = decode.id;
    
    const user = await User.findById(id);
    

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);

    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
}

module.exports = { checkForAuthentication };
