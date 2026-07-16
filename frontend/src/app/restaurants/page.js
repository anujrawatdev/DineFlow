"use client";
import React, { useEffect, useState } from "react";
import RestaurantsCard from "../cards/RestaurantsCard";
import RestaurantNavbar from "../Navbar/RestaurantNavbar";
import LandingPage from "./landingPage";
import Footer from "../home/Footer/page";
const page = () => {
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
    <div>
      <RestaurantNavbar />
      <main className="min-h-screen bg-neutral-300 pt-32">
        <LandingPage />

        <section className="flex flex-wrap gap-5 justify-center px-10 py-10">
          {allRestaurants.map((restaurant) => (
            <RestaurantsCard key={restaurant._id} restaurant={restaurant} />
          ))}
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default page;
