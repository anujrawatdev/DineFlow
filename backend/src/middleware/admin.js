

const checkForAdmin = (req, res, next) => {
  console.log("Logged User:", req.user);
  
  if ( !req.user || req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admin only." });
  }
  next();
};

module.exports = { checkForAdmin };
