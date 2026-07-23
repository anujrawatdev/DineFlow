"use client";

import DashboardCard from "@/components/admin/DashboardCard";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {
  const [stats, setStats] = useState({});
  
  useEffect(() => {
    const fetchDashbaordData = async () => {
      try {
        const response = await fetch("http://localhost:5000/admin/dashboard", {
          method: "GET",
          credentials: "include",
        });
        
        if (!response.ok) {
          throw new Error("Failed to fetch dashboard data");
        }
        const data = await response.json();

        setStats(data);
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchDashbaordData();
  }, []);

  return (
    <div className="flex flex-row">
      <aside className="w-64 min-h-screen bg-white text-white flex flex-col justify-between p-6">
        {/* Logo */}
        <div>
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-shadow-xl text-neutral-400">
              Dine<span className="text-amber-500">Flow</span>
            </h1>
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
              href="/admin/users"
              className="mt-3 rounded-lg text-neutral-900 hover:text-xl transition-all duration-200"
            >
              Users
            </Link>
            <hr className="text-black" />
            <Link
              href="/admin/restaurants"
              className=" mt-3 rounded-lg text-neutral-900 hover:text-xl transition-all duration-200"
            >
              Restaurants
            </Link>
            <hr className="text-black" />
            <Link
              href="/admin/bookings"
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

      <div className=" flex-1  min-h-screen bg-neutral-100">
        <div className="flex justify-center">
          <h1 className="  text-4xl mt-5 font-bold font-serif text-black">
            DASHBOARD
          </h1>
        </div>
        <div className=" flex flex-row justify-center mt-5 gap-5">
          <DashboardCard
           title={"Users"} 
           count={stats?.totalUsers} 
           emoji="👥" />
          <DashboardCard
            title={"Restaurants"}
            count={stats?.totalRestaurants}
            emoji="🍽️"
          />
          <DashboardCard
            title={"Bookings"}
            count={stats?.totalBookings}
            emoji="📅"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
