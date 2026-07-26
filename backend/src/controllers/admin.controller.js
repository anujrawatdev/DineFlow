const { User, Booking, Restaurant } = require("../models/user.model");
const OwnerRequest = require('../models/owner.model');
const getAllUsersAdmin = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    return res.status(200).json(users);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

const getAllRestaurantsAdmin = async (req, res) => {
  try {
    const restaurants = await Restaurant.find().populate("owner", "name email");
    console.log(JSON.stringify(restaurants[0].owner, null, 2));
    return res.status(200).json(restaurants);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "something went wrong", error: error.message });
  }
};

const getAllBookingsAdmin = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user", "name email")
      .populate("restaurant", "name");

    return res.status(200).json(bookings);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "something went wrong", error: error.message });
  }
};

const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalBookings = await Booking.countDocuments();
    const totalRestaurants = await Restaurant.countDocuments();

    return res.status(200).json({
      totalUsers,
      totalRestaurants,
      totalBookings,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

const deleteRestaurantAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    const restaurant = await Restaurant.findById(id);
    if (!restaurant) {
      return res.status(404).json({
        message: "Restaurant not found",
      });
    }

    await Restaurant.findByIdAndDelete(id);

    return res.status(200).json({
      message: "Restaurant deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong",
      error: error.message,
    });
  }
};

const deleteUserAdmin = async (req, res) => {
  try {
    const id = req.params.id;

    if (req.user._id.toString() === id) {
      return res.status(400).json({
        message: "You cannot delete yourself",
      });
    }

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    await Booking.deleteMany({
      user: id,
    });

    await User.findByIdAndDelete(id);

    return res.status(200).json({
      message: "user deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong ",
      error: error.message,
    });
  }
};

async function getAllOwnerRequests(req, res) {
  try {
    const ownerRequests = await OwnerRequest.find().populate(
      "user",
      "name email role",
    );

    return res.status(200).json({ ownerRequests });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

const updateOwnerRequestStatus = async (req, res) => {
  try {
    const { id } = req.params;
  const { status } = req.body;

  if (status !== "approved" && status !== "rejected") {
    return res.status(400).json({ message: "Invalid Status" });
  }
  const ownerRequest = await OwnerRequest.findById(id);
  if (!ownerRequest) {
    return res.status(404).json({
      message: "request not found",
    });
  }
  if(ownerRequest.status !== "pending"){
   return res.status(400).json({
      message:"Request already processed"
   });
}
  
  ownerRequest.status = status;
  await ownerRequest.save();
  
  if(status === "approved"){
   await User.findByIdAndUpdate(
      ownerRequest.user,
      {role:"owner"}
   );
}

  return res.status(200).json({ message: `Owner request ${status}`});
}

catch (error) {
    console.log("error",error);
    
    return res.status(500).json({
    message: "Internal server error",
    error: error.message,
  });
  }

  } 

module.exports = {
  getAllUsersAdmin,
  getAllRestaurantsAdmin,
  getAllBookingsAdmin,
  getDashboardStats,
  deleteRestaurantAdmin,
  deleteUserAdmin,
  getAllOwnerRequests,
  updateOwnerRequestStatus
};
