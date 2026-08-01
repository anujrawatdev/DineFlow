const User = require('../models/user.model');
const Restaurant = require('../models/restaurant.model');
const Booking = require('../models/booking.model');

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

async function getRestaurantById(req,res){

  try {
    const { id }= req.params;

    const restaurant = await Restaurant.findById(id);

     if(!restaurant){
      return res.status(404).json({message:"restaurantInfo not found"})
    } 

    if(restaurant.owner.toString()!== req.user._id.toString()){
      return res.status(403).json({
        message:'unauthorized',
      })
    }
   
     return res.status(200).json(restaurant);

  } catch (error) {
    return res.status(500).json({
      messag:"something went wrong",
      error:error.message,})
  }
}
async function updateRestaurant(req,res){
 try {
   const restaurant = await Restaurant.findById(req.params.id);
  if(!restaurant){
    return res.status(404).json({
      message:"restaurant not found"
    })
  }
  if(restaurant.owner.toString()!== req.user._id.toString()){
    return res.status(403).json({message:"unauthorized"});
  }

  const {name,description,street,city,state,country,openingTime,closingTime,price,cuisine} = req.body;

  restaurant.name = name;
  restaurant.description = description;
  restaurant.location = {
    street,
    city,
    state,
    country
  };
  restaurant.openingTime= openingTime;
  restaurant.closingTime= closingTime;
  restaurant.price = price;
  restaurant.cuisine = cuisine;

  if(req.file){
    restaurant.restaurantImage = `/uploads/${req.file.filename}`;
  }
  await restaurant.save();

  return  res.status(200).json({
    message:"Restaurant updated successfully",
    restaurant,
  });
 } catch (error) {
  console.error("Error in updateRestaurant:", error);
    return res.status(500).json({ message: "Internal server error" });
 }
}

module.exports = {
    createRestaurant,
    getMyRestaurants,
    updateRestaurant,
    getAllRestaurants,
    getRestaurantById,
    viewDetails,
    deleteCard
}