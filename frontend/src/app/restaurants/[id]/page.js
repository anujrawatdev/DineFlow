"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import { useParams } from "next/navigation";
import Footer from "@/app/home/Footer/page";
import RestaurantsCard from "@/app/cards/RestaurantsCard";
import Link from "next/link";

const Page = () => {
  const [restaurantDetail, setRestaurantDetail] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const { id } = useParams();

  const similarRestaurants = restaurants
    .filter((item) => item._id.toString() !== id)
    .slice(0, 3);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await fetch("http://localhost:5000/restaurants", {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      console.log(data);
      setRestaurants(data);
    };
    fetchRestaurants();
  }, []);
  useEffect(() => {
    const fetchRestaurant = async () => {
      const response = await fetch(`http://localhost:5000/restaurants/${id}`, {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      console.log(data);
      setRestaurantDetail(data);
    };
    if (id) {
      fetchRestaurant();
    }
  }, [id]);

  if (!restaurantDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-neutral-200">
      <Navbar />

      <div className="pt-32 flex justify-center px-6">
        <div className=" w-full max-w-7xl bg-gray-600/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          {/* Image */}
          <div className="w-3/5 p-6">
            <div className="h-full rounded-3xl bg-neutral-400 overflow-hidden shadow-xl">
              <img
                src={`http://localhost:5000${restaurantDetail.restaurantImage}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className=" w-2/5 p-10 flex flex-col justify-between text-white">
            <div>
              <div className="flex justify-between items-center">
                <h1 className="text-5xl text-black font-bold">
                  {restaurantDetail.name}
                </h1>

                <div className="bg-green-600 px-4 py-1 rounded-xl font-semibold">
                  ⭐ {restaurantDetail.rating}
                </div>
              </div>

              <p className=" text-neutral-900 mt-5 text-lg">
                📍 {restaurantDetail.location.street},
                {restaurantDetail.location.city},
                {restaurantDetail.location.state}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="bg-[#8B5E3C] px-4 py-2 rounded-full">
                  {restaurantDetail.cuisine}
                </span>

                <span className="bg-[#8B5E3C] px-4 py-2 rounded-full">
                  Continental
                </span>

                <span className="bg-[#8B5E3C] px-4 py-2 rounded-full">
                  ₹ {restaurantDetail.price} for two
                </span>
              </div>

              <div className="flex gap-4 mt-8">
                <div className="bg-[#4B3225] px-4 py-2 rounded-xl">
                  🕒 {restaurantDetail.openingTiming} AM
                </div>

                <div className="bg-[#4B3225] px-4 py-2 rounded-xl">
                  🌙{restaurantDetail.closingTiming} PM
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div>
              <button className="w-full mt-10 bg-amber-800 hover:bg-amber-900 transition duration-300 text-neutral-200 font-bold py-4 rounded-2xl text-lg shadow-lg">
                Book Restaurant
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Extra Details Section */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Restaurant Tags */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-neutral-800">Restaurant Tags</h2>

          <div className="flex flex-wrap gap-3 mt-5">
            <span className="bg-[#8B5E3C] text-white px-5 py-2 rounded-full">
              Family Dining
            </span>

            <span className="bg-[#8B5E3C] text-white px-5 py-2 rounded-full">
              Premium Cafe
            </span>

            <span className="bg-[#8B5E3C] text-white px-5 py-2 rounded-full">
              Romantic
            </span>

            <span className="bg-[#8B5E3C] text-white px-5 py-2 rounded-full">
              Outdoor Seating
            </span>
          </div>
        </div>

        {/* Facilities */}

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-neutral-700">Facilities</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-6">
            <div className="bg-white/60 shadow-lg rounded-2xl p-5 text-neutral-900 text-xl font-bold text-center">
              🚗
              <p>Parking</p>
            </div>

            <div className="bg-white/60 shadow-lg rounded-2xl text-neutral-900 text-xl font-bold p-5 text-center">
              📶
              <p>Free WiFi</p>
            </div>

            <div className="bg-white/60 shadow-lg rounded-2xl text-neutral-900 text-xl font-bold p-5 text-center">
              ❄️
              <p>AC</p>
            </div>

            <div className="bg-white/60 shadow-lg rounded-2xl text-neutral-900 text-xl font-bold p-5 text-center">
              🎵
              <p>Live Music</p>
            </div>
          </div>
        </div>

        {/* Image Gallery */}

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-neutral-700">Gallery</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-6">
            <div className="h-40 bg-neutral-400 rounded-2xl">
              <img src="/images/Background-form.jpg" />
            </div>

            <div className="h-40 bg-neutral-400 rounded-2xl"></div>

            <div className="h-40 bg-neutral-400 rounded-2xl"></div>

            <div className="h-40 bg-neutral-400 rounded-2xl"></div>
          </div>
        </div>

        {/* Reviews */}

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-neutral-700">Customer Reviews</h2>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white/70 rounded-2xl p-6 shadow-lg">
              <h3 className=" text-neutral-800 font-bold">Rahul</h3>

              <p className="mt-3">⭐⭐⭐⭐⭐</p>

              <p className="mt-3 text-neutral-700">
                Amazing ambience and delicious food.
              </p>
            </div>

            <div className="bg-white/70 rounded-2xl p-6 shadow-lg">
              <h3 className=" text-neutral-800 font-bold">Aman</h3>

              <p className="mt-3">⭐⭐⭐⭐</p>

              <p className="mt-3 text-neutral-700">
                Great place for family dinner.
              </p>
            </div>

            <div className="bg-white/70 rounded-2xl p-6 shadow-lg">
              <h3 className=" text-neutral-800 font-bold">Priya</h3>

              <p className="mt-3">⭐⭐⭐⭐⭐</p>

              <p className="mt-3 text-neutral-700">Loved the service.</p>
            </div>
          </div>
        </div>

        {/* Similar Restaurants */}

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-neutral-700">You may also like</h2>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {similarRestaurants.map((restaurant) => (
              <RestaurantsCard key={restaurant._id} restaurant={restaurant} />
            ))
            }
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/restaurants">
              <button className="bg-amber-700 hover:bg-amber-600 text-white font-semibold rounded-2xl px-6 py-2.5 transition-all duration-300">
                View All Restaurants →
              </button>
            </Link>
          </div>
        </div>

        {/* Final CTA */}

        <div className="mt-16 bg-[#4B3225] rounded-3xl p-10 text-center">
          <h2 className="text-3xl text-white font-bold">
            Ready for a memorable dining experience?
          </h2>

          <button className="mt-6 bg-amber-400 hover:bg-yellow-600 transition text-neutral-800 font-bold px-10 py-4 rounded-2xl">
            Book Your Table Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
