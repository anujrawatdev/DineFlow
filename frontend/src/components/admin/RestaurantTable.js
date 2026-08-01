"use client";

import React, { useState } from "react";
import {
  Search,
  Trash2,
  Utensils,
  MapPin,
  User,
  Wallet,
  Store,
} from "lucide-react";

const RestaurantTable = ({
  restaurants = [],
  loading,
  onDelete,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRestaurants = restaurants.filter(
    (item) =>
      item.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.owner?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.cuisine?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this restaurant?")) {
      onDelete(id);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-3 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-10">

      
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-5 mb-6 sm:mb-8">
          <div className="min-w-0">
            <p className="text-[10px] sm:text-xs tracking-[0.18em] sm:tracking-[0.25em] uppercase text-[#7A6A5C] font-semibold">
              Administration
            </p>

            <h1 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-normal font-serif tracking-tight text-[#1A1A1A] leading-tight">
              Restaurant Management
            </h1>

            <p className="mt-2 text-sm sm:text-base text-[#666666] font-light leading-relaxed max-w-2xl">
              Monitor, filter, and control venue listings across the platform.
            </p>
          </div>

          <div className="w-full md:w-auto rounded-2xl border border-[#E5E2DE] bg-white px-4 sm:px-6 py-3 sm:py-4 shadow-sm">
            <p className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-[#7A6A5C]">
              Total Restaurants
            </p>

            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#1A1A1A] mt-1">
              {restaurants.length}
            </h2>
          </div>
        </div>

        
        <div className="rounded-2xl border border-[#E5E2DE] bg-white p-3 sm:p-4 mb-5 sm:mb-6 shadow-sm">
          <div className="flex items-center gap-2 sm:gap-3 px-1 sm:px-2">
            <Search size={18} className="text-[#7A6A5C] shrink-0" />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search restaurants..."
              className="w-full bg-transparent text-sm sm:text-base text-[#1A1A1A] placeholder-[#A39A90] outline-none"
            />
          </div>
        </div>

        
        <div className="hidden md:block rounded-2xl border border-[#E5E2DE] bg-white shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E5E2DE] bg-[#F7F5F2]">
                  <th className="px-5 lg:px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                    Preview
                  </th>

                  <th className="px-5 lg:px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                    Restaurant
                  </th>

                  <th className="px-5 lg:px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                    Owner
                  </th>

                  <th className="px-5 lg:px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                    Cuisine
                  </th>

                  <th className="px-5 lg:px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                    Price
                  </th>

                  <th className="px-5 lg:px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                    Status
                  </th>

                  <th className="px-5 lg:px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C] text-right">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#E5E2DE]">
                {loading ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-6 py-12 text-center text-sm text-[#7A6A5C] font-serif"
                    >
                      Loading restaurant listings...
                    </td>
                  </tr>
                ) : filteredRestaurants.length === 0 ? (
                  <tr>
                    <td
                      colSpan={7}
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
                      <td className="px-5 lg:px-6 py-4">
                        <div className="w-16 h-16 rounded-xl border border-[#E5E2DE] bg-[#F7F5F2] overflow-hidden flex items-center justify-center">
                          {restaurant.restaurantImage ? (
                            <img
                              src={`http://localhost:5000/${restaurant.restaurantImage}`}
                              alt={restaurant.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <Utensils
                              size={18}
                              className="text-[#A39A90]"
                            />
                          )}
                        </div>
                      </td>

                      <td className="px-5 lg:px-6 py-4">
                        <p className="text-sm font-medium text-[#1A1A1A]">
                          {restaurant.name}
                        </p>

                        {(restaurant.city ||
                          restaurant.location?.city) && (
                          <p className="text-xs text-[#7A6A5C] flex items-center gap-1 mt-1">
                            <MapPin size={12} />
                            {restaurant.city ||
                              restaurant.location?.city}
                          </p>
                        )}
                      </td>

                      <td className="px-5 lg:px-6 py-4 text-sm text-[#666666] font-light">
                        {restaurant.owner?.name || "Unassigned"}
                      </td>

                      <td className="px-5 lg:px-6 py-4 text-sm text-[#666666]">
                        {restaurant.cuisine || "N/A"}
                      </td>

                      <td className="px-5 lg:px-6 py-4 text-sm font-medium text-[#1A1A1A]">
                        {restaurant.price
                          ? `₹${restaurant.price}`
                          : "N/A"}
                      </td>

                      <td className="px-5 lg:px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-[#F7F5F2] text-[#7A6A5C] border border-[#E5E2DE]">
                          Active
                        </span>
                      </td>

                      <td className="px-5 lg:px-6 py-4 text-right">
                        <button
                          onClick={() =>
                            handleDelete(restaurant._id)
                          }
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

        
        <div className="md:hidden space-y-3">
          {loading ? (
            <div className="rounded-2xl border border-[#E5E2DE] bg-white p-8 text-center text-sm text-[#7A6A5C] font-serif shadow-sm">
              Loading restaurant listings...
            </div>
          ) : filteredRestaurants.length === 0 ? (
            <div className="rounded-2xl border border-[#E5E2DE] bg-white p-8 text-center text-sm text-[#666666] font-light shadow-sm">
              No restaurants found matching your search.
            </div>
          ) : (
            filteredRestaurants.map((restaurant) => (
              <div
                key={restaurant._id}
                className="rounded-2xl border border-[#E5E2DE] bg-white p-4 shadow-sm"
              >
                <div className="flex gap-3 items-start">
                  <div className="w-20 h-20 rounded-2xl border border-[#E5E2DE] bg-[#F7F5F2] overflow-hidden flex items-center justify-center shrink-0">
                    {restaurant.restaurantImage ? (
                      <img
                        src={`http://localhost:5000/${restaurant.restaurantImage}`}
                        alt={restaurant.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Utensils
                        size={20}
                        className="text-[#A39A90]"
                      />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-semibold text-[#1A1A1A] leading-snug line-clamp-2">
                        {restaurant.name}
                      </h3>

                      <span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-[#F7F5F2] text-[#7A6A5C] border border-[#E5E2DE] shrink-0">
                        Active
                      </span>
                    </div>

                    {(restaurant.city ||
                      restaurant.location?.city) && (
                      <div className="mt-2 flex items-start gap-1.5 text-xs text-[#7A6A5C]">
                        <MapPin
                          size={14}
                          className="shrink-0 mt-0.5"
                        />
                        <span className="leading-relaxed">
                          {restaurant.city ||
                            restaurant.location?.city}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-[#666666]">
                    <User
                      size={16}
                      className="text-[#7A6A5C] shrink-0"
                    />
                    <span className="truncate">
                      {restaurant.owner?.name || "Unassigned"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[#666666]">
                    <Store
                      size={16}
                      className="text-[#7A6A5C] shrink-0"
                    />
                    <span className="truncate">
                      {restaurant.cuisine || "Cuisine not specified"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[#666666]">
                    <Wallet
                      size={16}
                      className="text-[#7A6A5C] shrink-0"
                    />
                    <span>
                      {restaurant.price
                        ? `₹${restaurant.price}`
                        : "Price not available"}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleDelete(restaurant._id)}
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600 transition hover:bg-red-100 active:scale-[0.99]"
                >
                  <Trash2 size={16} />
                  Delete Restaurant
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantTable;