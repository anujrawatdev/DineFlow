const User = require("../models/user.modles");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


async function createUser(req, res) {
  const { name, email, password } = req.body;

  if(!name||!password||!email){
    return res.status(400).json({message:"All fields are required"});
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(404).json({ message: "This email is already exist" });
  }
 
    const hashPassword = await bcrypt.hash(password, 8);

    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });

     const token = jwt.sign( { id: user._id} ,process.env.JWT_SECRET,{expiresIn:'7d'});
  
  res.cookie("token",token,{
    httpOnly:true,
    sameSite:"strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  })

    return res.status(201).json({ message: "created successfully" });
  
}

async function loginUser(req,res){

  const {email,password} = req.body;

  const existingUser = await User.findOne({email});
  
  if(!existingUser){
    return res.status(404).json({message:"user not found"});
  }

  const match = await bcrypt.compare(password,existingUser.password);

  if(!match){
    
    return res.status(401).json({message:"Invalid emil or password"});
  }
  
  const token = jwt.sign( { id: existingUser._id} ,process.env.JWT_SECRET,{expiresIn:'7d'});
  

  res.cookie("token",token,{
    httpOnly:true,
    sameSite:"strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  })

  return res.status(200).json({
  message: "Login successful",
});

}

module.exports = { createUser ,loginUser };
