import React from "react";

const myRestaurantsCard = ({ restaurant}) => {

  console.log(restaurant);
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/my-restaurants/delete/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
  };
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden w-[350px]">
      {/* Restaurant Image */}
      <div className="relative">
      
<img
  src={`http://localhost:5000${restaurant.restaurantImage}`}
  alt={restaurant.name}
  className="h-48 w-full object-cover"
/>

        <span className="absolute top-4 left-4 bg-amber-800 text-white text-sm font-semibold px-3 py-1 rounded-full">
          Open
        </span>

        <span className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
          ⭐ 4.8
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold text-black">
              {restaurant.name}
            </h2>

            <p className="text-black text-sm">
              📍 {restaurant.location.country}, {restaurant.location.state}
            </p>
          </div>

          {/* price */}
          <span className="text-amber-800 font-bold">₹{restaurant.price}</span>
        </div>

        {/* Address */}
        <div className="mt-4 text-black text-sm">
          📍{restaurant.location.city},{restaurant.location.street}
        </div>

        {/* Timing */}
        <div className="mt-2 text-black text-sm">
          🕒 {restaurant.openingTime} - {restaurant.closingTime}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-6">
          <button className="px-4 py-2 rounded-xl bg-amber-800 text-white hover:bg-amber-600 transition">
            View
          </button>

          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gray-500 rounded-xl border border-gray-300 hover:bg-gray-600 transition">
              Edit
            </button>

            <button
              onClick={() => handleDelete(restaurant._id)}
              className="px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default myRestaurantsCard;
