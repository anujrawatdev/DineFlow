

"use client";
import React from "react";
import { Search } from "lucide-react";

const LandingPage = ({ searchTerm, setSearchTerm }) => {
  return (
    <section className="relative h-[65vh] md:h-[70vh] w-full overflow-hidden flex items-center justify-center px-6">
      {/* Background Image */}
      <img
        src="images/Background-form.jpg"
        alt="Restaurant"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* Light Soothing Overlay */}
      <div className="absolute inset-0 bg-[#f8f5f0]/35 backdrop-blur-[7px]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center space-y-6">
        
        <span className="text-xs uppercase tracking-[0.3em] text-stone-800 font-semibold">
          Fine Dining Reservations
        </span>

        <h1 className="text-4xl md:text-6xl font-serif text-[#1A1A1A] leading-[1.15] font-normal tracking-tight">
          Discover Extraordinary <br />
          <span className="italic font-light">Culinary Destinations</span>
        </h1>

        <p className="text-stone-900 text-sm md:text-base font-light max-w-xl leading-relaxed">
          Explore top-rated establishments, indulge in refined cuisines, and secure your table effortlessly.
        </p>

        {/* Soothing Search Bar UI */}
        <div className="relative w-full max-w-2xl pt-4">
          <Search
            size={20}
            className="absolute left-6 top-[calc(50%+8px)] -translate-y-1/2 z-10 text-stone-400 pointer-events-none"
          />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search by restaurant name, cuisine, or city..."
            className="
              w-full
              h-14
              rounded-full
              bg-white/90
              backdrop-blur-md
              border
              border-stone-200/80
              pl-14
              pr-6
              text-stone-900
              text-sm
              font-sans
              placeholder:text-stone-400
              outline-none
              shadow-sm
              focus:shadow-md
              focus:border-stone-400
              transition-all
              duration-300
            "
          />
        </div>

      </div>
    </section>
  );
};

export default LandingPage;