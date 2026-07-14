"use client"

import React, { useState , useEffect} from "react";
import MyRestaurantNavbar from "../Navbar/myRestaurantNavbar";
import MyRestaurantsCard from "../cards/myRestaurantsCard";

const page = () => {
 
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await fetch("http://localhost:5000/my-restaurants", {
        method: "get",
        credentials: "include",
      });
      const data = await response.json();
      setRestaurants(data);
      
    };
     console.log(restaurants);
    fetchRestaurants();
    
  }, []);

  return (
    <>
  
  <MyRestaurantNavbar />

  <main className=" min-h-screen bg-[#ead2b3] pt-32">
    <h1 className="text-2xl font-semibold text-amber-900 font-serif ml-5 underline underline-offset-4 " >Your Listed Restaurants</h1>

    <div className="ml-5 flex flex-wrap gap-5 mt-5" >
       {
        restaurants.map((restaurant)=>{
          return (
            <MyRestaurantsCard
         key={restaurant._id}
         restaurant={restaurant}
         
         />
          )
        })
      } 
    </div>
  </main>
</>
  );
};

export default page;
