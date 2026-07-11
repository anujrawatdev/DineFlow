const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const {User,Restaurant} = require('../models/user.modles');

//Create User
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

//Login User
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

//Create Reastaurant
async function createRestaurant(req,res){

  console.log(req.user);

  const {name,description,street,state,country,city,openingTime,closingTime,price,rating,owner,cuisine} = req.body;

  const location = {
  street,
  city,
  state,
  country,
};

  if(!name || !description ||!openingTime ||!closingTime ||!cuisine){
   return res.status(400).json({message:"all fields are required"});
  }
  if (!street || !city || !state || !country) {
  return res.status(400).json({
    message: "All location fields are required",
  });
}

  console.log("BODY",req.body);
  console.log("FILE:",req.file);

  const restaurant = await Restaurant.create({
    name,
    description,
    location,
    openingTime,
    closingTime,
    cuisine,
    price,
    owner : req.user._id,
    restaurantImage:"/uploads/" + req.file.filename
  })
  


  return res.status(200).json({message:" Reastaurant created successfully"});

}


module.exports = { createUser ,loginUser ,createRestaurant };
