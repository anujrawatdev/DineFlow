"use client";

import React, { useEffect, useState } from "react";
import RestaurantsCard from "../cards/RestaurantsCard";
import LandingPage from "./landingPage";
import Footer from "../home/Footer/page";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    const fetchAllRestaurants = async () => {
      try {
        const response = await fetch("http://localhost:5000/restaurants", {
          method: "GET",
          credentials: "include",
        });

        const data = await response.json();
        setAllRestaurants(data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchAllRestaurants();
  }, []);

  const filterRestaurants = allRestaurants.filter((restaurant) => {
    const term = searchTerm.toLowerCase();

    return (
      restaurant.name?.toLowerCase().includes(term) ||
      restaurant.cuisine?.toLowerCase().includes(term) ||
      restaurant.location?.city?.toLowerCase().includes(term)
    );
  });

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#f8f5f0] text-stone-900 font-sans selection:bg-stone-300">
      <Navbar />

      <main className="pt-16 sm:pt-18 md:pt-20">
        <LandingPage
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        
        <section className="mx-auto w-full max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8 py-10 sm:py-12 md:py-16 lg:py-20">

          
          <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-end md:justify-between mb-8 sm:mb-10 md:mb-12 border-b border-stone-200/80 pb-5 sm:pb-6">

            <div className="min-w-0">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] text-stone-500 font-semibold block mb-2">
                Curated Collection
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-stone-900 font-normal leading-tight break-words">
                {searchTerm
                  ? `Results for “${searchTerm}”`
                  : "All Establishments"}
              </h2>
            </div>

            <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.22em] text-stone-500 font-sans whitespace-nowrap">
              Showing {filterRestaurants.length} Places
            </p>
          </div>

          
          {filterRestaurants.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {filterRestaurants.map((restaurant, index) => (
                <motion.div
                  key={restaurant._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                    ease: "easeOut",
                  }}
                  className="h-full"
                >
                  <RestaurantsCard restaurant={restaurant} />
                </motion.div>
              ))}
            </div>
          ) : (
            
            <div className="py-16 sm:py-20 text-center">
              <div className="mx-auto max-w-md space-y-4 sm:space-y-5 px-2">
                <p className="font-serif text-xl sm:text-2xl text-stone-600 font-light leading-relaxed">
                  No dining places match your query.
                </p>

                <button
                  onClick={() => setSearchTerm("")}
                  className="text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] text-stone-900 border-b border-stone-900 pb-1 hover:text-stone-500 hover:border-stone-500 transition-colors"
                >
                  Clear Search Filter
                </button>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Page;
