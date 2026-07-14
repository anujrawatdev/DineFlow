import React from "react";

const RestaurantsCard = ({ restaurant }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden w-[350px]">
      
      {/* Restaurant Image */}
      <div className="relative">
        <img
          src={`http://localhost:5000${restaurant.restaurantImage}`}
          alt={restaurant.name}
          className="h-52 w-full object-cover"
        />

        <span className="absolute top-4 left-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
          Open Now
        </span>

        <span className="absolute top-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
          ⭐ 4.8
        </span>
      </div>

      {/* Card Body */}
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold text-gray-800">
            {restaurant.name}
          </h2>

          <span className="text-amber-700 font-bold text-lg">
            ₹{restaurant.price}
          </span>
        </div>

        <p className="text-gray-500 mt-1">
          {restaurant.cuisine}
        </p>

        <div className="mt-3 text-gray-600 text-sm">
          📍 {restaurant.location.street}, {restaurant.location.city},{" "}
          {restaurant.location.state}
        </div>

        <div className="mt-2 text-gray-600 text-sm">
          🕒 {restaurant.openingTime} - {restaurant.closingTime}
        </div>

        <div className="mt-6">
          <button className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3 rounded-xl font-semibold transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsCard;