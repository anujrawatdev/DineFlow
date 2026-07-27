"use client";

import React from "react";
import RestaurantTable from "@/components/admin/RestaurantTable";
import { useState, useEffect } from "react";
const page = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("http://localhost:5000/admin/restaurants", {
          method: "GET",
          credentials: "include",
        });
        console.log(response.status);
        
        const data = await response.json();
        console.log(data);

        setRestaurants(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRestaurants();
  }, []);

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:5000/admin/restaurants/${id}/delete`, {
      method: "DELETE",
      credentials: "include",
    });
    const data = await response.json();
    setRestaurants((prev)=>prev.filter((restaurant)=> restaurant._id !== id))
  };
  return (
    <div>
      <RestaurantTable 
      restaurants = {restaurants}
      onDelete={handleDelete}/>
    </div>
  );
};

export default page;
