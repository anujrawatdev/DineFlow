"use client";
import React, { useEffect, useState } from "react";
import RestaurantsCard from "../cards/RestaurantsCard";
import LandingPage from "./landingPage";
import Footer from "../home/Footer/page";
import Navbar from "../Navbar/Navbar";
import { filter } from "framer-motion/client";
const page = () => {
  const [searchTerm, setSearchTerm] = useState("");
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

  const filterRestaurants = allRestaurants.filter((restaurant)=>{
     return restaurant.name
     .toLowerCase()
     .includes(searchTerm.toLowerCase());
  })

  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-neutral-300">
        <LandingPage 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
         />

        <section className="flex flex-wrap gap-5 justify-center px-10 py-10">
          {filterRestaurants.map((restaurant) => (
            <RestaurantsCard key={restaurant._id} restaurant={restaurant} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default page;
