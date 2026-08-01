const mongoose = require("mongoose");

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

module.exports = Restaurant;