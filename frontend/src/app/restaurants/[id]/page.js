"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import { useParams } from "next/navigation";
import Footer from "@/app/home/Footer/page";
import RestaurantsCard from "@/app/cards/RestaurantsCard";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Star,
  Car,
  Wifi,
  Wind,
  Music,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const Page = () => {
  const [restaurantDetail, setRestaurantDetail] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const { id } = useParams();

  const similarRestaurants = restaurants
    .filter((item) => item._id.toString() !== id)
    .slice(0, 4);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("http://localhost:5000/restaurants", {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };
    fetchRestaurants();
  }, []);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/restaurants/${id}`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        const data = await response.json();
        setRestaurantDetail(data);
      } catch (error) {
        console.error("Error fetching restaurant details:", error);
      }
    };

    if (id) fetchRestaurant();
  }, [id]);

  if (!restaurantDetail) {
    return (
      <div className="min-h-screen bg-[#f8f5f0] flex items-center justify-center px-4">
        <p className="text-stone-500 font-serif text-base sm:text-lg animate-pulse text-center">
          Loading experience...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#f8f5f0] text-stone-900 font-sans selection:bg-stone-300">
      <Navbar />

      
      <div className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 flex justify-center px-3 sm:px-5 md:px-6">
        <div className="w-full max-w-7xl bg-[#FAF8F5] border border-stone-200/80 rounded-2xl sm:rounded-3xl shadow-sm overflow-hidden flex flex-col lg:flex-row">

          
          <div className="w-full lg:w-3/5 p-3 sm:p-4 md:p-5 lg:p-6">
            <div className="h-64 sm:h-80 md:h-[420px] lg:h-full lg:min-h-[560px] rounded-xl sm:rounded-2xl bg-stone-200 overflow-hidden relative">
              <img
                src={`http://localhost:5000${restaurantDetail.restaurantImage}`}
                alt={restaurantDetail.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          
          <div className="w-full lg:w-2/5 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-3">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-normal leading-tight">
                  {restaurantDetail.name}
                </h1>

                <div className="flex items-center gap-1 bg-stone-900 text-stone-100 px-2.5 py-1.5 rounded-full text-[11px] sm:text-xs font-medium shrink-0">
                  <Star size={12} className="fill-amber-400 text-amber-400" />
                  <span>{restaurantDetail.rating || "4.8"}</span>
                </div>
              </div>

              <p className="mt-3 sm:mt-4 text-sm text-stone-600 flex items-start gap-2 font-light leading-relaxed">
                <MapPin size={16} className="text-stone-400 mt-0.5 shrink-0" />
                <span>
                  {restaurantDetail.location?.street},
                  {" "}
                  {restaurantDetail.location?.city},
                  {" "}
                  {restaurantDetail.location?.state}
                </span>
              </p>

              <div className="mt-5 sm:mt-6 flex flex-wrap gap-2">
                <span className="bg-[#f0ebe3] border border-stone-300/60 text-stone-700 text-[11px] sm:text-xs px-3 py-1.5 rounded-full font-medium">
                  {restaurantDetail.cuisine}
                </span>

                <span className="bg-[#f0ebe3] border border-stone-300/60 text-stone-700 text-[11px] sm:text-xs px-3 py-1.5 rounded-full font-medium">
                  Continental
                </span>

                <span className="bg-[#f0ebe3] border border-stone-300/60 text-stone-700 text-[11px] sm:text-xs px-3 py-1.5 rounded-full font-medium">
                  ₹{restaurantDetail.price} for two
                </span>
              </div>

              <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-700">
                <div className="flex items-center gap-2 bg-[#f2eee9] px-4 py-3 rounded-xl border border-stone-200/70">
                  <Clock size={14} className="text-stone-500 shrink-0" />
                  <span>Opens {restaurantDetail.openingTiming || restaurantDetail.openingTime}</span>
                </div>

                <div className="flex items-center gap-2 bg-[#f2eee9] px-4 py-3 rounded-xl border border-stone-200/70">
                  <Clock size={14} className="text-stone-500 shrink-0" />
                  <span>Closes {restaurantDetail.closingTiming || restaurantDetail.closingTime}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-10">
              <Link href={`/restaurants/${id}/book`}>
                <button className="w-full bg-stone-900 hover:bg-stone-800 active:scale-[0.99] text-stone-100 text-[11px] sm:text-xs uppercase tracking-[0.18em] font-medium py-3.5 sm:py-4 rounded-full transition-all duration-300 shadow-sm">
                  Book Table
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-3 sm:px-5 md:px-6 lg:px-8 pb-16 sm:pb-20 md:pb-24 space-y-12 sm:space-y-14 md:space-y-16 mt-10 sm:mt-12 md:mt-16">

        
        <section>
          <h2 className="text-xl sm:text-2xl font-serif font-normal border-b border-stone-200/80 pb-3">
            Ambiance & Features
          </h2>

          <div className="flex flex-wrap gap-2.5 mt-5 sm:mt-6">
            {["Family Dining", "Premium Cafe", "Romantic Setting", "Outdoor Seating"].map((tag, idx) => (
              <span
                key={idx}
                className="bg-[#FAF8F5] border border-stone-200 text-stone-700 text-[11px] sm:text-xs tracking-wide px-3.5 py-2 rounded-full font-light"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        
        <section>
          <h2 className="text-xl sm:text-2xl font-serif font-normal border-b border-stone-200/80 pb-3">
            Key Amenities
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-5 sm:mt-6">
            {[
              { icon: Car, label: "Valet Parking" },
              { icon: Wifi, label: "Free Wi-Fi" },
              { icon: Wind, label: "Air Conditioned" },
              { icon: Music, label: "Live Music" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F5] border border-stone-200/80 rounded-2xl p-4 sm:p-5 md:p-6 text-center flex flex-col items-center justify-center gap-2 min-h-[130px] sm:min-h-[150px]"
              >
                <item.icon size={20} className="text-stone-700 sm:w-6 sm:h-6" />
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-stone-800 font-medium leading-tight">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-stone-200/80 pb-3">
            <h2 className="text-xl sm:text-2xl font-serif font-normal">Gallery</h2>
            <span className="text-[11px] sm:text-xs text-stone-500">
              Sample images for UI preview
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-5 sm:mt-6">
            {[
              "/images/Background-form.jpg",
              "/images/interiorImage.jpg",
              "/images/diningArea.jpg",
              "/images/signatureDish.jpg",
            ].map((src, idx) => (
              <div key={idx} className="h-32 sm:h-40 md:h-44 rounded-2xl overflow-hidden border border-stone-200">
                <img
                  src={src}
                  alt="Gallery"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </section>

        
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-stone-200/80 pb-3">
            <h2 className="text-xl sm:text-2xl font-serif font-normal">Guest Highlights</h2>
            <span className="text-[11px] sm:text-xs text-stone-500">
              Sample feedback for UI preview
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-5 sm:mt-6">
            {[
              "Guests often appreciate the calm ambience and comfortable seating.",
              "Easy booking flow and a pleasant dining environment are commonly highlighted.",
              "Freshly prepared food and attentive service are among the most appreciated aspects.",
            ].map((text, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F5] border border-stone-200/80 rounded-2xl p-5 sm:p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="fill-stone-800 text-stone-800"
                      />
                    ))}
                  </div>

                  <p className="text-stone-600 text-sm font-light leading-relaxed">
                    {text}
                  </p>
                </div>

                <p className="text-stone-500 text-xs mt-6 pt-4 border-t border-stone-200/60">
                  Placeholder content
                </p>
              </div>
            ))}
          </div>
        </section>

        
        <section>
          <h2 className="text-xl sm:text-2xl font-serif font-normal border-b border-stone-200/80 pb-3">
            You May Also Appreciate
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-5 sm:mt-6">
            {similarRestaurants.map((restaurant) => (
              <RestaurantsCard key={restaurant._id} restaurant={restaurant} />
            ))}
          </div>

          <div className="flex justify-center mt-8 sm:mt-10">
            <Link href="/restaurants">
              <button className="flex items-center gap-2 border border-stone-300 hover:border-stone-900 bg-transparent text-stone-800 text-[11px] sm:text-xs uppercase tracking-[0.15em] font-medium px-5 sm:px-6 py-3 rounded-full transition-all duration-300">
                <span>View All Establishments</span>
                <ArrowRight size={14} />
              </button>
            </Link>
          </div>
        </section>

        
        <section className="bg-stone-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-14 text-center text-[#FAF8F5] relative overflow-hidden">
          <div className="relative z-10 max-w-xl mx-auto space-y-3 sm:space-y-4">
            <Sparkles size={20} className="mx-auto text-amber-300/80 mb-1 sm:mb-2" />

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal tracking-tight leading-tight">
              Ready for a Memorable Experience?
            </h2>

            <p className="text-stone-400 text-sm font-light leading-relaxed">
              Reserve your table ahead of time to ensure ideal seating for your
              occasion.
            </p>

            <div className="pt-3 sm:pt-4">
              <Link href={`/restaurants/${id}/book`}>
                <button className="w-full sm:w-auto bg-[#FAF8F5] hover:bg-stone-200 active:scale-[0.99] text-stone-900 text-[11px] sm:text-xs uppercase tracking-[0.2em] font-medium px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 shadow-sm">
                  Book Your Table Now
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Page;