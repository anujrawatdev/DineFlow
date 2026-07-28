// "use client";

// const RestaurantTable = ({ restaurants ,onDelete}) => {
  
//   return (
//     <div className="flex-1 min-h-screen bg-gray-100 p-8">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-8">
//         <div>
//           <h1 className="text-4xl font-bold text-gray-900">
//             Restaurant Management
//           </h1>
//           <p className="text-gray-500 mt-1">
//             Manage all registered restaurants.
//           </p>
//         </div>

//         <div className="bg-white px-6 py-4 rounded-2xl shadow">
//           <p className="text-sm text-gray-500">Total Restaurants</p>
//           <h2 className="text-3xl font-bold text-amber-500">
//             {restaurants.length}
//           </h2>
//         </div>
//       </div>

//       {/* Search */}
//       <div className="bg-white p-5 rounded-2xl  shadow mb-6">
//         <input
//           type="text"
//           placeholder="Search restaurants..."
//           className="
//           text-neutral-800
//           w-full 
//           border
//           border-gray-300 
//           rounded-xl 
//           px-4 
//           py-3 
//           outline-none
//           focus:border-amber-500
//           "
//         />
//       </div>

//       {/* Table */}
//       <div className="bg-white rounded-2xl shadow overflow-hidden">
//         <table className="w-full">
//           <thead className="bg-black text-white">
//             <tr>
//               <th className="px-6 py-4 text-left">Image</th>

//               <th className="px-6 py-4 text-left">Restaurant</th>

//               <th className="px-6 py-4 text-left">Owner</th>

//               <th className="px-6 py-4 text-left">Price</th>

//               <th className="px-6 py-4 text-left">Status</th>

//               <th className="px-6 py-4 text-center">Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {restaurants.map((restaurant) => (
//               <tr
//                 key={restaurant._id}
//                 className="border-b hover:bg-gray-50 transition"
//               >
//                 <td className="px-6 py-4">
//                   <img
//                     src={`http://localhost:5000/${restaurant.restaurantImage}`}
//                     className="
//                   w-16 
//                   h-16 
//                   rounded-xl 
//                   object-cover
//                   "
//                   />
//                 </td>

//                 <td className="px-6 py-4 text-neutral-900 font-semibold">
//                   {restaurant.name}
//                 </td>

//                 <td className="px-6 py-4 text-gray-800">
//                   {restaurant.owner?.name || "N/A"}
//                 </td>

//                 <td className="px-6 py-4 text-gray-700">{restaurant.price}</td>

//                 <td className="px-6 py-4">
//                   <span
//                     className="
//                   bg-green-100
//                   text-green-700
//                   px-3
//                   py-1
//                   rounded-full
//                   text-sm
//                   "
//                   >
//                     active
//                   </span>
//                 </td>

//                 <td className="px-6 py-4 text-center">
//                   <button
//                     onClick={() => onDelete(restaurant._id)}
//                     className="
//                   bg-red-500
//                   hover:bg-red-600
//                   text-white
//                   px-5
//                   py-2
//                   rounded-lg
//                   transition
//                   "
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default RestaurantTable;

"use client";

import React, { useState } from "react";
import { Search, Trash2, Utensils, MapPin } from "lucide-react";

const RestaurantTable = ({ restaurants = [], loading, onDelete }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter restaurants based on search query
  const filteredRestaurants = restaurants.filter(
    (item) =>
      item.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.owner?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.cuisine?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 min-h-screen bg-[#FDFCFB] p-8 md:p-12 text-[#1A1A1A]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-[#7A6A5C] font-semibold">
            Administration
          </p>
          <h1 className="mt-1 text-4xl font-normal font-serif tracking-tight text-[#1A1A1A]">
            Restaurant Management
          </h1>
          <p className="mt-1 text-sm text-[#666666] font-light">
            Monitor, filter, and control venue listings across the platform.
          </p>
        </div>

        <div className="rounded-2xl border border-[#E5E2DE] bg-white px-6 py-4 shadow-sm self-start md:self-auto">
          <p className="text-xs uppercase tracking-wider font-semibold text-[#7A6A5C]">
            Total Restaurants
          </p>
          <h2 className="text-2xl font-serif font-normal text-[#1A1A1A] mt-1">
            {restaurants.length}
          </h2>
        </div>
      </div>

      {/* Search Input */}
      <div className="rounded-2xl border border-[#E5E2DE] bg-white p-4 mb-6 shadow-sm">
        <div className="flex items-center gap-3 px-2">
          <Search size={18} className="text-[#7A6A5C]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by restaurant name, owner, or cuisine..."
            className="w-full bg-transparent text-sm text-[#1A1A1A] placeholder-[#A39A90] outline-none"
          />
        </div>
      </div>

      {/* Table Container */}
      <div className="rounded-2xl border border-[#E5E2DE] bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#E5E2DE] bg-[#F7F5F2]">
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                  Preview
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                  Restaurant
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                  Owner
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                  Price / Range
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                  Status
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C] text-right">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#E5E2DE]">
              {loading ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-12 text-center text-sm text-[#7A6A5C] font-serif"
                  >
                    Loading restaurant listings...
                  </td>
                </tr>
              ) : filteredRestaurants.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-12 text-center text-sm text-[#666666] font-light"
                  >
                    No restaurants found matching your search.
                  </td>
                </tr>
              ) : (
                filteredRestaurants.map((restaurant) => (
                  <tr
                    key={restaurant._id}
                    className="hover:bg-[#FDFCFB] transition-colors"
                  >
                    {/* Image Column */}
                    <td className="px-6 py-4">
                      <div className="w-14 h-14 rounded-xl border border-[#E5E2DE] bg-[#F7F5F2] overflow-hidden flex items-center justify-center">
                        {restaurant.restaurantImage ? (
                          <img
                            src={`http://localhost:5000/${restaurant.restaurantImage}`}
                            alt={restaurant.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Utensils size={18} className="text-[#A39A90]" />
                        )}
                      </div>
                    </td>

                    {/* Restaurant Info */}
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-[#1A1A1A]">
                        {restaurant.name}
                      </p>
                      {restaurant.city && (
                        <p className="text-xs text-[#7A6A5C] flex items-center gap-1 mt-0.5">
                          <MapPin size={12} />
                          {restaurant.city}
                        </p>
                      )}
                    </td>

                    {/* Owner Info */}
                    <td className="px-6 py-4 text-sm text-[#666666] font-light">
                      {restaurant.owner?.name || "Unassigned"}
                    </td>

                    {/* Price Range */}
                    <td className="px-6 py-4 text-sm font-medium text-[#1A1A1A]">
                      {restaurant.price ? `$${restaurant.price}` : "N/A"}
                    </td>

                    {/* Status Badge */}
                    <td className="px-6 py-4">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-[#F7F5F2] text-[#7A6A5C] border border-[#E5E2DE]">
                        Active
                      </span>
                    </td>

                    {/* Action Button */}
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => {
                          if(
                            confirm("are you sure you want to delete this Restaurant")
                          )
                          {onDelete(restaurant._id)}
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-red-600 hover:bg-red-50 border border-transparent hover:border-red-100 transition"
                        title="Delete Restaurant"
                      >
                        <Trash2 size={15} />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RestaurantTable;
