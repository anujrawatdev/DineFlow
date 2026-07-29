

"use client";

import React, { useState, useEffect } from "react";
import MyRestaurantsCard from "../cards/myRestaurantsCard";
import Navbar from "../Navbar/Navbar";
import { Store, Plus } from "lucide-react";
import Link from "next/link";

const Page = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("http://localhost:5000/my-restaurants", {
          method: "GET",
          credentials: "include",
        });

        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FDFCFB] pt-28 pb-16 text-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-[#7A6A5C] font-semibold">
                DineFlow Owner Panel
              </p>

              <h1 className="mt-2 text-4xl md:text-5xl font-normal text-[#1A1A1A] font-serif tracking-tight">
                Your Restaurants
              </h1>

              <p className="mt-3 text-[#666666] max-w-2xl font-light">
                Manage your listed restaurants, update details, and keep your
                dining experience fresh for customers.
              </p>
            </div>
          </div>

          {/* Stats Card */}
          <div className="mb-10 rounded-2xl border border-[#E5E2DE] bg-[#F7F5F2] p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#DCD6CD] bg-white text-[#1A1A1A]">
                <Store size={26} />
              </div>

              <div>
                <p className="text-xs tracking-wider uppercase text-[#7A6A5C] font-medium">Total Restaurants</p>
                <p className="text-3xl font-normal text-[#1A1A1A] font-serif">
                  {restaurants.length}
                </p>
              </div>
            </div>
          </div>

          {/* Restaurants Grid */}
          {restaurants.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {restaurants.map((restaurant) => (
                <MyRestaurantsCard
                  key={restaurant._id}
                  restaurant={restaurant}
                />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="rounded-2xl border border-dashed border-[#C9BDB0] bg-[#F7F5F2] p-14 text-center">
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-[#DCD6CD] bg-white text-[#1A1A1A]">
                <Store size={32} />
              </div>

              <h2 className="text-2xl font-normal text-[#1A1A1A] font-serif">
                No restaurants listed yet
              </h2>

              <p className="mt-3 text-[#666666] max-w-md mx-auto font-light">
                Start building your DineFlow presence by adding your first
                restaurant. Customers will be able to discover and book tables
                instantly.
              </p>

              <Link
                href="/add-restaurant"
                className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-[#1A1A1A] px-7 py-3 text-white text-xs font-medium tracking-widest uppercase transition hover:bg-[#333333] shadow-md"
              >
                <Plus size={16} />
                Add Your First Restaurant
              </Link>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Page;