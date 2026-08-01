const Booking = require('../models/booking.model');
const Restaurant = require('../models/restaurant.model');

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

  if (!restaurantExist) {
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

      return (
        booking.restaurant &&
        booking.restaurant.owner.toString() === req.user._id.toString()
      );
    });

    return res.json(ownerBookings);
  } catch (error) {
    console.log(error);
  }
}

async function updateBookingStatus(req, res) {
  try {
    const { status } = req.body;
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "booking not found" });
    }

    booking.status = status;
    await booking.save();

    return res.status(200).json({
      message: "Booking status updated successfully",
      booking,
    });
  } catch (error) {
    console.log("error:", error);
  }
}

module.exports = {
  bookRestaurant,
  getBookings,
  getOwnerBookings,
  updateBookingStatus,
};