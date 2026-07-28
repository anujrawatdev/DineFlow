// import React from "react";
// import Link from "next/link";

// const RestaurantsCard = ({ restaurant }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-[70vh] w-[350px]">
      
//       {/* Restaurant Image */}
//       <div className="relative">
//         <img
//           src={`http://localhost:5000${restaurant.restaurantImage}`}
//           alt={restaurant.name}
//           className="h-52 w-full object-cover"
//         />

//         <span className="absolute top-4 left-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
//           Open Now
//         </span>

//         <span className="absolute top-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
//           ⭐ 4.8
//         </span>
//       </div>

//       {/* Card Body */}
//       <div className="p-5">
//         <div className="flex justify-between items-start">
//           <h2 className="text-2xl font-bold text-gray-800">
//             {restaurant.name}
//           </h2>

//           <span className="text-amber-700 font-bold text-lg">
//             ₹{restaurant.price}
//           </span>
//         </div>

//         <p className="text-gray-500 mt-1">
//           {restaurant.cuisine}
//         </p>

//         <div className="mt-3 text-gray-600 text-sm">
//           📍 {restaurant.location.street}, {restaurant.location.city},{" "}
//           {restaurant.location.state}
//         </div>

//         <div className="mt-2 text-gray-600 text-sm">
//           🕒 {restaurant.openingTime} - {restaurant.closingTime}
//         </div>

//         <div className="mt-6">
//           <Link href={`/restaurants/${restaurant._id}`}>
//           <button className="w-full bg-amber-950 hover:bg-neutral-200 hover:text-amber-800 hover:border-1 text-white py-3 rounded-sm font-semibold transition">
//             Book Now
//           </button>
//           </Link>
//         </div>
//         <div className="flex justify-center">
//         <Link href={`/restaurants/${restaurant._id}`}>
//               <button className= "  text-sm text-amber-700 mt-3 hover:text-amber-900 hover:underline underline-offset-4">
//                 View Details→
//               </button>
//             </Link>
//             </div>
//       </div>
//     </div>
//   );
// };

// export default RestaurantsCard;

"use client";
import React from "react";
import Link from "next/link";
import { Star, MapPin, Clock } from "lucide-react";

const RestaurantsCard = ({ restaurant }) => {
  return (
    <div className="bg-[#FAF8F5] border border-stone-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group">
      
      {/* Top Image Section */}
      <div className="relative h-60 w-full overflow-hidden p-3 pb-0">
        <div className="relative h-full w-full rounded-2xl overflow-hidden">
          <img
            src={`http://localhost:5000${restaurant.restaurantImage}`}
            alt={restaurant.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Soft Gradient Overlay */}
          <div className="absolute inset-0 bg-stone-900/10" />

          {/* Status Badge */}
          <span className="absolute top-3 left-3 bg-[#f8f5f0]/90 backdrop-blur-md text-stone-800 text-[10px] tracking-widest uppercase font-semibold px-3 py-1 rounded-full border border-white/50">
            Open Now
          </span>

          {/* Rating Badge */}
          <span className="absolute top-3 right-3 bg-stone-900/80 backdrop-blur-md text-stone-100 text-xs px-3 py-1 rounded-full flex items-center gap-1 font-sans">
            <Star size={12} className="fill-amber-400 text-amber-400" />
            <span>4.8</span>
          </span>
        </div>
      </div>

      {/* Card Body Details */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          {/* Cuisine & Price */}
          <div className="flex justify-between items-center text-xs tracking-wider uppercase text-stone-500 font-sans mb-1.5">
            <span>{restaurant.cuisine}</span>
            <span className="text-stone-900 font-semibold font-serif text-sm">
              ₹{restaurant.price} <span className="text-[10px] text-stone-400 font-sans font-normal">/ avg</span>
            </span>
          </div>

          {/* Restaurant Title */}
          <h2 className="text-2xl font-serif text-stone-900 font-normal leading-snug mb-3">
            {restaurant.name}
          </h2>

          {/* Location & Operating Hours */}
          <div className="space-y-1.5 border-t border-stone-200/60 pt-3 text-xs text-stone-600 font-light">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-stone-400 shrink-0" />
              <span className="truncate">
                {restaurant.location.street}, {restaurant.location.city}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Clock size={14} className="text-stone-400 shrink-0" />
              <span>
                {restaurant.openingTime} – {restaurant.closingTime}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-2 pt-2">
          <Link href={`/restaurants/${restaurant._id}`} className="block">
            <button className="w-full bg-stone-900 hover:bg-stone-800 text-stone-100 text-xs tracking-[0.2em] uppercase font-sans py-3.5 rounded-full transition-all duration-300 shadow-sm">
              Book Table
            </button>
          </Link>

          <div className="text-center">
            <Link href={`/restaurants/${restaurant._id}`}>
              <button className="text-[11px] uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors py-1">
                View Details →
              </button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default RestaurantsCard;