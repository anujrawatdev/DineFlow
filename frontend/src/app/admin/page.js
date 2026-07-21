"use client";

import Link from "next/link";

const Page = () => {
  return (
    <aside className="w-64 min-h-screen bg-white text-white flex flex-col justify-between p-6">
      {/* Logo */}
      <div>
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-shadow-xl text-neutral-400">Dine<span className="text-amber-500">Flow</span></h1>
          <p className="text-sm text-neutral-800 mt-1">Admin Panel</p>
        </div>
        {/* Navigation */}
        <nav className="flex flex-col gap-3">
          <Link
            href="/users"
            className="mt-3 hover:text-xl rounded-lg text-neutral-900 transition-all duration-200"
          >
            Dashboard
          </Link>
<hr className="text-black" />
          <Link
            href="/users"
            className="mt-3 rounded-lg text-neutral-900 hover:text-xl transition-all duration-200"
          >
            Users
          </Link>
<hr className="text-black" />
          <Link
            href="/restaurants"
            className=" mt-3 rounded-lg text-neutral-900 hover:text-xl transition-all duration-200"
          >
            Restaurants
          </Link>
<hr className="text-black" />
          <Link
            href="/bookings"
            className="mt-3 rounded-lg text-neutral-900 hover:text-xl transition-all duration-200"
          >
            Bookings
          </Link>
          <hr className="text-black" />
        </nav>
      </div>

      {/* Logout */}
      <div>
        <button className="w-full bg-red-500 hover:bg-red-600 transition duration-200 py-3 rounded-lg font-medium">
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Page;