const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Restaurant, Booking } = require("../models/user.modles");

//Create User
async function createUser(req, res) {
  const { name, email, password } = req.body;

  if (!name || !password || !email) {
    return res.status(400).json({ message: "All fields are required" });
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
  console.log("Body:", req.body);
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

//Create Reastaurant
async function createRestaurant(req, res) {
  const {
    name,
    description,
    street,
    state,
    country,
    city,
    openingTime,
    closingTime,
    price,
    rating,
    owner,
    cuisine,
  } = req.body;

  const location = {
    street,
    city,
    state,
    country,
  };

  if (!name || !description || !openingTime || !closingTime || !cuisine) {
    return res.status(400).json({ message: "all fields are required" });
  }
  if (!street || !city || !state || !country) {
    return res.status(400).json({
      message: "All location fields are required",
    });
  }

  console.log("FILE:", req.file);
  console.log("BODY:", req.body);

  const restaurant = await Restaurant.create({
    name,
    description,
    location,
    openingTime,
    closingTime,
    cuisine,
    price,
    owner: req.user._id,
    restaurantImage: "/uploads/" + req.file.filename,
  });
  console.log(restaurant);
  return res.status(200).json({ message: " Reastaurant created successfully" });
}

async function getMyRestaurants(req, res) {
  try {
    const myRestaurants = await Restaurant.find({ owner: req.user._id });
    res.json(myRestaurants);
  } catch (error) {
    console.log("error:", error);
  }
}

async function deleteCard(req, res) {
  try {
    const restaurantId = req.params.id;

    const restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant) {
      return res.status(404).json({ message: "restaurant not found" });
    }

    if (restaurant.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "unauthorized owner" });
    }
    await Restaurant.findByIdAndDelete(restaurantId);

    return res.status(200).json({ message: "Restaurant deleted successfully" });
  } catch (error) {
    console.log("error", error);
  }
}

async function getAllRestaurants(req, res) {
  try {
    const restaurants = await Restaurant.find();

    return res.status(200).json(restaurants);
  } catch (error) {
    console.log("error:", error);

    return res.status(500).json({ message: "server error" });
  }
}

async function viewDetails(req, res) {
  try {
    const id = req.params.id;
    const restaurantDetail = await Restaurant.findById(id);
    return res.status(200).json(restaurantDetail);
  } catch (error) {
    console.log("error:", error);
  }
}

async function bookRestaurant(req, res) {
  const user = req.user.id;
  const {
    name,
    bookingTime,
    bookingDate,
    restaurant,
    guests,
    email,
    phone,
    specialRequest,
  } = req.body;

  if (
    !name ||
    !restaurant ||
    !bookingTime ||
    !bookingDate ||
    !guests ||
    !email ||
    !phone
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const restaurantExist = await Restaurant.findById(restaurant);

  if (!restaurant) {
    return res.status(404).json({
      message: "Restaurant not found",
    });
  }

  const booking = await Booking.create({
    user,
    email,
    phone,
    name,
    restaurant,
    guests,
    bookingDate,
    bookingTime,
    specialRequest,
  });

  return res.status(200).json({
    message: "Booking created successfully",
  });
}

async function getBookings(req, res) {
  try {
    const bookings = await Booking.find({
      user: req.user._id,
    }).populate("restaurant");

    return res.status(200).json(bookings);
  } catch (error) {
    console.log("error:", error);
    return res.json({ message: "something went wrong" });
  }
}

async function getOwnerBookings(req, res) {
  try {
    const bookings = await Booking.find().populate("restaurant");
    
    const ownerBookings = bookings.filter((booking) => {
      return booking.restaurant.owner.toString() === req.user._id.toString();
    });

    return res.json(ownerBookings);
  } catch (error) {
    console.log("error:", error);
  }
}

async function updateBookingStatus(req,res){

  try {
    const {status} = req.body;
  const booking = await Booking.findById(req.params.id);
   if(!booking){
    return res.status(404).json({message:"booking not found"});
   }

   booking.status = status;
   await booking.save();

   return res.status(200).json({
  message: "Booking status updated successfully",
});
  } catch (error) {
    console.log("error:",error);
  }

}

async function logout(req,res){
  try {
    res.clearCookie("token",{
      httpOnly:true,
      secure:false,
      sameSite:"strict",
    });

    return res.status(200).json({message:"logged out successfully"});
  } catch (error) {
    return res.status(500).json({
      success:false,
      message:"something went wrong"
    });
  }
}
module.exports = {
  createUser,
  loginUser,
  createRestaurant,
  getMyRestaurants,
  deleteCard,
  getAllRestaurants,
  viewDetails,
  bookRestaurant,
  getBookings,
  getOwnerBookings,
  updateBookingStatus,
  logout
};
