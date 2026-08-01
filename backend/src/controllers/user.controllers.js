const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require('../models/user.model');

async function getCurrentUser(req,res){
  return res.status(200).json({
    name: req.user.name,
    email:req.user.email,
    role:req.user.role,
    createdAt:req.user.createdAt,
  });
}


async function updateProfile(req,res){

  try {
    
    const {name} = req.body;

  if(!name){
    return res.status(400).json({
      message:"Name is required"
    });
  }

  const user = await User.findById(req.user._id);

  if(!user){
    return res.status(404).json({
      message:"user not found",
    })
  }
  user.name = name;
  await user.save();

  res.status(200).json({
    message:"Profile updated successfully",
    user:{
       name:user.name,
       email:user.email,
       role:user.role,
       createdAt:user.createdAt,
    }
  });

  } catch (error) {
    res.status(500).json({
      message:error.message,
    });
  }

};
module.exports = {
  getCurrentUser,
  updateProfile
};
