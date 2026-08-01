"use client";
import React from "react";
import Link from "next/link";
import { Star, MapPin, Clock } from "lucide-react";

const RestaurantsCard = ({ restaurant }) => {
  return (
    <div className="bg-[#FAF8F5] border border-stone-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col">
      
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={`${process.env.NEXT_PUBLIC_API_URL}${restaurant?.restaurantImage}`}
          alt={restaurant?.name || "Restaurant"}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
              
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 text-[10px] font-medium text-stone-800 shadow-sm">
          <Star size={10} className="fill-amber-400 text-amber-400" />
          4.8
        </div>

        
        <div className="absolute top-2 left-2 bg-emerald-50 text-emerald-700 text-[9px] font-semibold px-2 py-1 rounded-full border border-emerald-100">
          OPEN
        </div>
      </div>

      
      <div className="p-3 sm:p-4 flex flex-col flex-grow">

        
        <h2 className="text-sm sm:text-base md:text-lg font-serif text-stone-900 leading-snug line-clamp-1">
          {restaurant?.name}
        </h2>

        
        <div className="flex items-center justify-between mt-1 text-[10px] sm:text-xs text-stone-500">
          <span className="truncate mr-2">{restaurant?.cuisine}</span>
          <span className="font-semibold text-stone-900 whitespace-nowrap">
            ₹{restaurant?.price}
          </span>
        </div>

        
        <div className="flex items-center gap-1.5 mt-2 text-[10px] sm:text-xs text-stone-600">
          <MapPin size={12} className="text-stone-400 shrink-0" />
          <span className="truncate">{restaurant?.location?.city}</span>
        </div>

        
        <div className="flex items-center gap-1.5 mt-1 text-[10px] sm:text-xs text-stone-600">
          <Clock size={12} className="text-stone-400 shrink-0" />
          <span className="truncate">
            {restaurant?.openingTime} – {restaurant?.closingTime}
          </span>
        </div>

        
        <div className="mt-3 sm:mt-4">
          <Link href={`/restaurants/${restaurant?._id}`} className="block">
            <button className="w-full bg-stone-900 hover:bg-stone-800 active:scale-[0.98] text-white text-[10px] sm:text-xs font-medium tracking-[0.15em] uppercase py-2.5 sm:py-3 rounded-full transition-all duration-300">
              Book
            </button>
          </Link>
          <div className="text-center">
            <Link href={`/restaurants/${restaurant._id}`}>
              <button className="text-[8px] sm:text-[9px] lg:text-[11px] uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors py-1">
                View Details →
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RestaurantsCard;