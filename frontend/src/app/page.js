"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F7F5F2] px-5">
      <h1 className="text-5xl font-serif font-bold text-[#1A1A1A]">
        Dine<span className="text-[#7A6A5C]">Flow</span>
      </h1>

      <p className="mt-4 text-[#7A6A5C] text-center max-w-md">
        Discover amazing restaurants and book your perfect dining experience.
      </p>

      <div className="flex flex-col gap-4 mt-8">
        <Link
          href="/restaurants"
          className="w-full sm:w-auto justify-center bg-stone-900 text-white hover:bg-[#7A6A5C] border border-stone-300 rounded-full px-6 sm:px-8 py-3.5 sm:py-4 text-[11px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-3"
        >
          Explore Restaurants
        </Link>

       <div className="flex ml-5 gap-1">
        <Link
          href="/login"
          className="px-8 py-2 rounded-full border text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition"
        >
          Login
        </Link>

        <Link
          href="/signup"
          className="px-8 py-2 rounded-full border text-[#1A1A1A] border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition"
        >
          Signup
        </Link>
        </div>
      </div>
    </div>
  );
}
