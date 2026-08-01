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
        const response = await fetch(
          "http://localhost:5000/my-restaurants",
          {
            method: "GET",
            credentials: "include",
          }
        );

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

      <main className="min-h-screen w-full overflow-x-hidden bg-[#FDFCFB] pt-20 xs:pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-16 text-[#1A1A1A]">
        <div className="mx-auto w-full max-w-7xl px-3.5 sm:px-6 md:px-8 lg:px-10">

          {/* Hero Banner */}
          <div className="mb-5 sm:mb-8 md:mb-10 rounded-2xl sm:rounded-3xl bg-[#111111] text-white p-4.5 xs:p-5 sm:p-6 md:p-8 lg:p-10 border border-white/10 shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6 md:gap-8">

              <div className="max-w-2xl">
                <p className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.28em] uppercase text-stone-300 font-semibold mb-1.5 sm:mb-3">
                  DineFlow Owner Panel
                </p>

                <h1 className="font-serif text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-normal tracking-tight">
                  Your Restaurants
                </h1>

                <p className="mt-2 text-[11px] xs:text-xs sm:text-sm md:text-base text-stone-300 leading-relaxed max-w-xl font-light">
                  Manage your restaurant listings, update details, and keep your
                  dining experience fresh for guests across every device.
                </p>
              </div>

              <div className="shrink-0 pt-1 md:pt-0">
                <Link
                  href="/add-restaurant"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#1A1A1A] px-5 sm:px-6 py-2.5 xs:py-3 sm:py-3.5 text-[11px] sm:text-xs md:text-sm font-medium tracking-[0.14em] sm:tracking-[0.18em] uppercase transition hover:bg-[#F7F5F2] shadow-md w-full sm:w-auto active:scale-[0.98]"
                >
                  <Plus size={16} className="xs:w-[18px] xs:h-[18px]" />
                  <span>Add Restaurant</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="mb-6 sm:mb-8 md:mb-10 rounded-2xl md:rounded-3xl border border-[#E5E2DE] bg-[#F7F5F2] p-4 xs:p-5 sm:p-6 md:p-7 shadow-sm transition-all duration-300">
            <div className="flex items-center gap-3.5 sm:gap-4 md:gap-5">
              <div className="flex h-11 w-11 xs:h-12 xs:w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full border border-[#DCD6CD] bg-white text-[#1A1A1A] shrink-0 shadow-xs">
                <Store size={22} className="xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div>

              <div className="min-w-0">
                <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-xs tracking-[0.18em] sm:tracking-[0.2em] uppercase text-[#7A6A5C] font-semibold">
                  Total Restaurants
                </p>

                <p className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#1A1A1A] font-serif leading-none mt-1">
                  {restaurants.length}
                </p>
              </div>
            </div>
          </div>

          {/* Restaurants Grid */}
          {restaurants.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8 justify-items-center">
              {restaurants.map((restaurant) => (
                <MyRestaurantsCard
                  key={restaurant._id}
                  restaurant={restaurant}
                />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="rounded-2xl md:rounded-3xl border border-dashed border-[#C9BDB0] bg-[#F7F5F2] p-6 xs:p-8 sm:p-12 md:p-16 text-center shadow-sm transition-all duration-300">
              <div className="mx-auto mb-3.5 sm:mb-6 flex h-14 w-14 xs:h-16 xs:w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 items-center justify-center rounded-full border border-[#DCD6CD] bg-white text-[#1A1A1A] shadow-xs">
                <Store size={26} className="xs:w-7 xs:h-7 sm:w-9 sm:h-9 md:w-10 md:h-10" />
              </div>

              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-[#1A1A1A] font-serif leading-tight">
                No restaurants listed yet
              </h2>

              <p className="mt-2 sm:mt-3 md:mt-4 text-[11px] xs:text-xs sm:text-sm md:text-base text-[#666666] max-w-xs xs:max-w-md md:max-w-lg mx-auto font-light leading-relaxed">
                Start building your DineFlow presence by adding your first
                restaurant. Guests will be able to discover and reserve tables
                instantly.
              </p>

              <Link
                href="/add-restaurant"
                className="mt-5 sm:mt-6 md:mt-8 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#1A1A1A] px-6 sm:px-8 py-3 text-white text-[11px] xs:text-xs md:text-sm font-medium tracking-[0.15em] sm:tracking-[0.18em] uppercase transition hover:bg-[#333333] shadow-md active:scale-[0.98]"
              >
                <Plus size={16} className="xs:w-[18px] xs:h-[18px]" />
                <span>Add Your First Restaurant</span>
              </Link>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Page;