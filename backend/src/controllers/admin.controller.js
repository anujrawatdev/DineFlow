const { User, Booking, Restaurant } = require("../models/user.modles");

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
    const restaurants = await Restaurant.find().populate("owner","name email");
    console.log(
  JSON.stringify(restaurants[0].owner, null, 2)
);
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
    .populate("user","name email")
    .populate("restaurant","name");
    
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
    if(!restaurant){
        return res.status(404).json({
         message: "Restaurant not found",
         });
    }

    await Restaurant.findByIdAndDelete(id);

    return res.status(200).json({
        message:"Restaurant deleted successfully",
    })
  } catch (error) {
    return res.status(500).json({ 
        message: "something went wrong",
        error:error.message, 
    });
  }
};

const deleteUserAdmin = async (req,res)=>{
    
try {
    const id = req.params.id;

      if (req.user._id.toString() === id) {
      return res.status(400).json({
        message: "You cannot delete yourself",
      });
    }
    
    const user = await User.findById(id);

    if(!user){
      return res.status(404).json({
        message:"user not found"
      })
    }

    await Booking.deleteMany({
      user:id
    });

    await User.findByIdAndDelete(id);

    return res.status(200).json({
        message:"user deleted successfully"
    })
} catch (error) {
    return res.status(500).json({
        message :"something went wrong ",
        error : error.message,
    })
}

}
module.exports = {
  getAllUsersAdmin,
  getAllRestaurantsAdmin,
  getAllBookingsAdmin,
  getDashboardStats,
  deleteRestaurantAdmin,
  deleteUserAdmin,
};
