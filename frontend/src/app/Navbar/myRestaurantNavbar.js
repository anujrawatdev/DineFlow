// 

import React from "react";
import Link from "next/link";

const MyRestaurantNavbar = () => {
  return (
    <div>
      <nav
        className="fixed top-5 left-1/2 -translate-x-1/2
        w-[55%]
        h-[8%]
        flex items-center justify-between
        rounded-full
        bg-amber-900/50
        backdrop-blur-xl
        border border-amber-950/15
        px-8 py-4 text-white"
      >
        <div className="flex items-center gap-3">
  <div className="font-bold text-xl">
    Dine<span className="text-amber-500">Flow</span>
  </div>

  <div>
    <p className=" ml-3 font-semibold">Your Restaurants</p> 
  </div>
</div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <Link
            className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-800 after:transition-all after:duration-300 hover:after:w-full"
            href="/home"
          >
            Home
          </Link>

          <Link
            className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-800 after:transition-all after:duration-300 hover:after:w-full"
            href="/add-restaurant"
          >
            Add Restaurant
          </Link>

          {/* Profile */}
          <Link
            href="/profile"
            className="w-10 h-10 rounded-full bg-amber-800 text-black font-semibold flex items-center justify-center hover:scale-105 transition"
          >
            A
          </Link>

          {/* Logout */}
          <button className="px-4 py-2 rounded-full bg-red-500 hover:bg-red-600 transition font-medium">
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default MyRestaurantNavbar;