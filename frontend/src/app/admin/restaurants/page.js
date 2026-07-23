"use client";

import React from "react";
import RestaurantTable from "@/components/admin/RestaurantTable";
import { useState, useEffect } from "react";
const page = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const reponse = await fetch("http://localhost:5000/admin/restaurants", {
          method: "GET",
          credentials: "include",
        });

        const data = await reponse.json();
        console.log(data);
        setRestaurants(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRestaurants();
  }, []);
  return (
    <div>
      <RestaurantTable 
      restaurants = {restaurants}/>
    </div>
  );
};

export default page;
