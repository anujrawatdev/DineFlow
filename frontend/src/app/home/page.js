"use client";
import React from "react";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Navbar from "../Navbar/Navbar";
import RestaurantsCard from "../cards/RestaurantsCard";
import { motion, useScroll } from "framer-motion";

import AboutUs from "./AboutUs/About.js";
import ContactUs from "./ContactUs/page";
import Footer from "./Footer/page";

const Page = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);


  useEffect(() => {
    const fetchAllRestaurants = async () => {
      const response = await fetch("http://localhost:5000/restaurants", {
        method: "GET",
        credentials: "include",
      });

      const data = await response.json();
      setAllRestaurants(data);
    };

    fetchAllRestaurants();
  }, []);

  return (
    <div className="relative min-h-screen bg-neutral-900 text-white">
  
      <div className="relative h-[100vh] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/DineFlowHomepage.png')] bg-cover bg-center" />

        {/* Black Fade Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.25)_20%,rgba(0,0,0,0.15)_100%)]" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-6xl font-bold drop-shadow-[0_6px_20px_rgba(0,0,0,0.9)] text-center">
            Discover the best{" "}
            <span className="text-shadow-2xl text-amber-400">Restaurant</span>{" "}
            Near You
          </h1>
          <p className="drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)] mt-4 text-center max-w-2xl">
            Reserve your table in seconds and enjoy unforgettable dining
            experiences at top-rated restaurants.
          </p>
          <button className="mt-8 font-bold rounded-full border border-amber-400/40 hover:bg-white/10 backdrop-blur-md px-6 py-3 text-white tracking-wide transition-all duration-300 bg-amber-900 hover:text-white hover:scale-105">
            Explore Restaurants
          </button>
        </div>
      </div>

      
      <div>
        <Navbar />
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="relative z-10 bg-neutral-300">
        
        {/* FEATURED RESTAURANTS */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-sans decoration-amber-800 font-bold mb-10 text-amber-800 text-center md:text-left">
            Featured Restaurants
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {allRestaurants.slice(0, 6).map((restaurant, index) => (
              <motion.div
                key={restaurant._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                <RestaurantsCard restaurant={restaurant} />
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/restaurants">
              <button className="bg-amber-800 hover:bg-amber-600 text-white font-semibold rounded-2xl px-6 py-2.5 transition-all duration-300">
                View All Restaurants →
              </button>
            </Link>
          </div>
        </section>

        {/* ABOUT US SECTION */}
        <div className="bg-[#141414] border-t border-b border-white/5">
          <AboutUs />
        </div>

        {/* CONTACT US SECTION */}
        <div className="bg-[#0d0d0d]">
          <ContactUs />
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
};

export default Page;