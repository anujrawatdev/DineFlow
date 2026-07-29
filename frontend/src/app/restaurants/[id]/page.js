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
    .slice(0, 3);

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
          },
        );
        const data = await response.json();
        setRestaurantDetail(data);
      } catch (error) {
        console.error("Error fetching restaurant details:", error);
      }
    };
    if (id) {
      fetchRestaurant();
    }
  }, [id]);

  if (!restaurantDetail) {
    return (
      <div className="min-h-screen bg-[#f8f5f0] flex items-center justify-center">
        <p className="text-stone-500 font-serif text-lg animate-pulse">
          Loading experience...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-stone-900 font-sans selection:bg-stone-300">
      <Navbar />

      {/* Main Hero Card Section */}
      <div className="pt-28 md:pt-36 flex justify-center px-4 sm:px-6">
        <div className="w-full max-w-7xl bg-[#FAF8F5] border border-stone-200/80 rounded-3xl shadow-sm overflow-hidden flex flex-col lg:flex-row">
          {/* Main Image */}
          <div className="w-full lg:w-3/5 p-4 sm:p-6">
            <div className="h-[350px] lg:h-full min-h-[380px] rounded-2xl bg-stone-200 overflow-hidden relative">
              <img
                src={`http://localhost:5000${restaurantDetail.restaurantImage}`}
                alt={restaurantDetail.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="w-full lg:w-2/5 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              {/* Header & Rating */}
              <div className="flex justify-between items-start gap-4">
                <h1 className="text-3xl md:text-5xl font-serif font-normal text-stone-900 leading-tight">
                  {restaurantDetail.name}
                </h1>

                <div className="flex items-center gap-1.5 bg-stone-900 text-stone-100 px-3 py-1.5 rounded-full text-xs font-medium shrink-0">
                  <Star size={13} className="fill-amber-400 text-amber-400" />
                  <span>{restaurantDetail.rating}</span>
                </div>
              </div>

              {/* Location */}
              <p className="text-stone-600 text-sm mt-4 flex items-center gap-2 font-light">
                <MapPin size={16} className="text-stone-400 shrink-0" />
                <span>
                  {restaurantDetail.location?.street},{" "}
                  {restaurantDetail.location?.city},{" "}
                  {restaurantDetail.location?.state}
                </span>
              </p>

              {/* Tags & Price */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="bg-[#f0ebe3] border border-stone-300/60 text-stone-700 text-xs px-3.5 py-1.5 rounded-full font-medium">
                  {restaurantDetail.cuisine}
                </span>
                <span className="bg-[#f0ebe3] border border-stone-300/60 text-stone-700 text-xs px-3.5 py-1.5 rounded-full font-medium">
                  Continental
                </span>
                <span className="bg-[#f0ebe3] border border-stone-300/60 text-stone-700 text-xs px-3.5 py-1.5 rounded-full font-medium">
                  ₹{restaurantDetail.price} for two
                </span>
              </div>

              {/* Timing */}
              <div className="flex items-center gap-3 mt-8 text-xs text-stone-700">
                <div className="flex items-center gap-2 bg-[#f2eee9] px-4 py-2.5 rounded-xl border border-stone-200/70">
                  <Clock size={14} className="text-stone-500" />
                  <span>Opens {restaurantDetail.openingTiming} AM</span>
                </div>

                <div className="flex items-center gap-2 bg-[#f2eee9] px-4 py-2.5 rounded-xl border border-stone-200/70">
                  <Clock size={14} className="text-stone-500" />
                  <span>Closes {restaurantDetail.closingTiming} PM</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link href={`/restaurants/${id}/book`}>
                <button className="w-full bg-stone-900 hover:bg-stone-800 text-stone-100 text-xs uppercase tracking-[0.2em] font-sans py-4 rounded-full transition-all duration-300 shadow-sm">
                  Book Table
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Extra Details Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24 space-y-16 mt-16">
        {/* Restaurant Tags */}
        <div>
          <h2 className="text-2xl font-serif font-normal text-stone-900 border-b border-stone-200/80 pb-3">
            Ambiance & Features
          </h2>
          <div className="flex flex-wrap gap-2.5 mt-6">
            {[
              "Family Dining",
              "Premium Cafe",
              "Romantic Setting",
              "Outdoor Seating",
            ].map((tag, idx) => (
              <span
                key={idx}
                className="bg-[#FAF8F5] border border-stone-200 text-stone-700 text-xs tracking-wide px-4 py-2 rounded-full font-light"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div>
          <h2 className="text-2xl font-serif font-normal text-stone-900 border-b border-stone-200/80 pb-3">
            Key Amenities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-[#FAF8F5] border border-stone-200/80 rounded-2xl p-6 text-center flex flex-col items-center justify-center gap-2">
              <Car size={22} className="text-stone-700" />
              <p className="text-xs uppercase tracking-wider text-stone-800 font-medium mt-1">
                Valet Parking
              </p>
            </div>

            <div className="bg-[#FAF8F5] border border-stone-200/80 rounded-2xl p-6 text-center flex flex-col items-center justify-center gap-2">
              <Wifi size={22} className="text-stone-700" />
              <p className="text-xs uppercase tracking-wider text-stone-800 font-medium mt-1">
                Free High-Speed Wi-Fi
              </p>
            </div>

            <div className="bg-[#FAF8F5] border border-stone-200/80 rounded-2xl p-6 text-center flex flex-col items-center justify-center gap-2">
              <Wind size={22} className="text-stone-700" />
              <p className="text-xs uppercase tracking-wider text-stone-800 font-medium mt-1">
                Air Conditioned
              </p>
            </div>

            <div className="bg-[#FAF8F5] border border-stone-200/80 rounded-2xl p-6 text-center flex flex-col items-center justify-center gap-2">
              <Music size={22} className="text-stone-700" />
              <p className="text-xs uppercase tracking-wider text-stone-800 font-medium mt-1">
                Live Acoustic Music
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between border-b border-stone-200/80 pb-3">
            <h2 className="text-2xl font-serif font-normal text-stone-900">
              Gallery
            </h2>

            <span className="text-xs text-stone-500">
              Sample images for UI preview
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="h-44 rounded-2xl overflow-hidden border border-stone-200">
              <img
                src="/images/Background-form.jpg"
                alt="Restaurant ambience"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="h-44 rounded-2xl overflow-hidden border border-stone-200">
              <img
                src="/images/interiorImage.jpg"
                alt="Interior view"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="h-44 rounded-2xl overflow-hidden border border-stone-200">
              <img
                src="/images/diningArea.jpg"
                alt="Dining area"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="h-44 rounded-2xl overflow-hidden border border-stone-200">
              <img
                src="/images/signatureDish.jpg"
                alt="Signature dish"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Guest Highlights (UI Placeholder) */}
        <div>
          <div className="flex items-center justify-between border-b border-stone-200/80 pb-3">
            <h2 className="text-2xl font-serif font-normal text-stone-900">
              Guest Highlights
            </h2>
            <span className="text-xs text-stone-500">
              Sample feedback for UI preview
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              {
                text: "Guests often appreciate the calm ambience and comfortable seating.",
                rating: 5,
              },
              {
                text: "Easy booking flow and a pleasant dining environment are commonly highlighted.",
                rating: 4,
              },
              {
                text: "Freshly prepared food and attentive service are among the most appreciated aspects.",
                rating: 5,
              },
            ].map((review, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F5] border border-stone-200/80 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="fill-stone-800 text-stone-800"
                      />
                    ))}
                  </div>

                  <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                    {review.text}
                  </p>
                </div>

                <p className="text-stone-500 text-xs mt-6 pt-4 border-t border-stone-200/60">
                  Placeholder content
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Similar Restaurants */}
        <div>
          <h2 className="text-2xl font-serif font-normal text-stone-900 border-b border-stone-200/80 pb-3">
            You May Also Appreciate
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {similarRestaurants.map((restaurant) => (
              <RestaurantsCard key={restaurant._id} restaurant={restaurant} />
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Link href="/restaurants">
              <button className="flex items-center gap-2 border border-stone-300 hover:border-stone-900 bg-transparent text-stone-800 text-xs uppercase tracking-[0.15em] font-medium px-6 py-3 rounded-full transition-all duration-300">
                <span>View All Establishments</span>
                <ArrowRight size={14} />
              </button>
            </Link>
          </div>
        </div>

        {/* Final CTA Banner */}
        <div className="bg-stone-900 rounded-3xl p-10 md:p-14 text-center text-[#FAF8F5] relative overflow-hidden">
          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <Sparkles size={20} className="mx-auto text-amber-300/80 mb-2" />
            <h2 className="text-2xl md:text-4xl font-serif font-normal tracking-tight">
              Ready for a Memorable Experience?
            </h2>
            <p className="text-stone-400 text-xs md:text-sm font-light leading-relaxed">
              Reserve your table ahead of time to ensure ideal seating for your
              occasion.
            </p>
            <div className="pt-4">
              <Link href={`/restaurants/${id}/book`}>
                <button className="bg-[#FAF8F5] hover:bg-stone-200 text-stone-900 text-xs uppercase tracking-[0.2em] font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-sm">
                  Book Your Table Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
