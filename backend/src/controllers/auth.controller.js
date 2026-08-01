const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user.model');
const Restaurant = require('../models/restaurant.model');
const Booking = require('../models/booking.model');

//Create User
async function createUser(req, res) {
  const { name, email, password } = req.body;

  if (!name || !password || !email) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const existingUser = await User.findOne({ email });
  console.log("Existing User:", existingUser);
  if (existingUser) {
    return res.status(404).json({ message: "This email is already exist" });
  }

  const hashPassword = await bcrypt.hash(password, 8);

  const user = await User.create({
    name,
    email,
    password: hashPassword,
  });

  console.log("Signup body:", req.body);

  console.log("created user:",user);

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return res.status(201).json({ message: "created successfully" });
}

//Login User
async function loginUser(req, res) {
  
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    return res.status(404).json({ message: "user not found" });
  }

  const match = await bcrypt.compare(password, existingUser.password);

  if (!match) {
    return res.status(401).json({ message: "Invalid emil or password" });
  }

  const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return res.status(200).json({
    message: "Login successful",
  });
}

//Logout
async function logout(req, res) {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });

    return res.status(200).json({ message: "logged out successfully" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
}

module.exports = {
  createUser,
  loginUser,
  logout,
};