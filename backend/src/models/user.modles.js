const mongoose = require("mongoose");

//User schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["customer", "admin", "owner"],
      default: "customer",
    },
  },
  { timestamps: true },
);

const User = new mongoose.model("User", userSchema);

//Restaurant schema
const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      state: { type: String, required: true },
      country: { type: String, required: true },
      street: { type: String, required: true },
      city: { type: String, required: true },
    },
    openingTime: {
      type: String,
    },
    closingTime: {
      type: String,
    },
    price: {
      type: String,
    },
    rating: {
      type: Number,
      default: 0,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    restaurantImage: {
      type: String,
      required: true,
    },
    cuisine: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

//Booking Restaurant Schema

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
  required: true,
    },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
  type: String,
  required: true,
},
email: {
  type: String,
},
    guests: {
      type: Number,
      required: true,
    },
    bookingDate: {
      type: Date,
      required: true,
    },
    bookingTime: {
      type: String,
       required: true,
    },
    specialRequest:{
      type:String,
      default:""
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true },
);

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = {
  User,
  Restaurant,
  Booking,
};
