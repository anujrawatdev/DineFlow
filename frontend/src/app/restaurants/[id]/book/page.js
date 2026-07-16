"use client";

import React from "react";
import Navbar from "@/app/Navbar/Navbar";
import { useParams } from "next/navigation";

const Page = () => {

  return (
    <div className="min-h-screen bg-neutral-200">
      <Navbar />

      <div className="pt-32 pb-16 px-6 flex justify-center">
        <div className="w-full max-w-4xl bg-white/50 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden">

          {/* Header */}
          <div className="bg-[#4B3225] px-10 py-8">
            <h1 className="text-4xl font-bold text-white">
              Reserve Your Table
            </h1>

            <p className="text-neutral-200 mt-2">
              Fill in your details to reserve a table at your favourite
              restaurant.
            </p>
          </div>

          {/* Form */}
          <form className="p-10 space-y-8">

            {/* Personal Details */}
            <div>
              <h2 className="text-2xl font-bold text-[#4B3225] mb-5">
                Personal Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block font-semibold text-neutral-700 mb-2">
                    Reservation Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border text-neutral-600 border-neutral-300 bg-white px-5 py-3 outline-none focus:border-[#8B5E3C]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-neutral-700 mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-xl text-neutral-600 border border-neutral-300 bg-white px-5 py-3 outline-none focus:border-[#8B5E3C]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-neutral-700 mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+91 9876543210"
                    className="w-full text-neutral-600 rounded-xl border border-neutral-300 bg-white px-5 py-3 outline-none focus:border-[#8B5E3C]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-neutral-700 mb-2">
                    Number of Guests
                  </label>

                  <input
                    type="number"
                    min="1"
                    placeholder="2"
                    className="w-full text-neutral-600 rounded-xl border border-neutral-300 bg-white px-5 py-3 outline-none focus:border-[#8B5E3C]"
                  />
                </div>

              </div>
            </div>

            {/* Reservation Details */}
            <div>
              <h2 className="text-2xl  font-bold text-[#4B3225] mb-5">
                Reservation Details
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block font-semibold text-neutral-700 mb-2">
                    Booking Date
                  </label>

                  <input
                    type="date"
                    className="w-full text-neutral-600 rounded-xl border border-neutral-300 bg-white px-5 py-3 outline-none focus:border-[#8B5E3C]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-neutral-700 mb-2">
                    Booking Time
                  </label>

                  <select className="w-full text-neutral-600 rounded-xl border border-neutral-300 bg-white px-5 py-3 outline-none focus:border-[#8B5E3C]">

                    <option>Select Time</option>

                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                    <option>01:00 PM</option>
                    <option>02:00 PM</option>
                    <option>03:00 PM</option>
                    <option>04:00 PM</option>
                    <option>05:00 PM</option>
                    <option>06:00 PM</option>
                    <option>07:00 PM</option>
                    <option>08:00 PM</option>
                    <option>09:00 PM</option>
                    <option>10:00 PM</option>

                  </select>
                </div>

              </div>
            </div>

            {/* Special Request */}
            <div>
              <label className="block font-semibold text-neutral-700 mb-2">
                Special Request (Optional)
              </label>

              <textarea
                rows={5}
                placeholder="Birthday celebration, window seat, anniversary, etc."
                className="w-full text-neutral-600 rounded-2xl border border-neutral-300 bg-white px-5 py-4 resize-none outline-none focus:border-[#8B5E3C]"
              />
            </div>

            {/* Reservation Summary */}
            <div className="bg-[#F5F1EC] rounded-2xl p-6 border border-[#d7c3b2]">

              <h3 className="text-xl font-bold text-[#4B3225] mb-4">
                Reservation Summary
              </h3>

              <div className="space-y-2 text-neutral-700">

                <div className="flex justify-between">
                  <span>Restaurant</span>
                  <span className="font-semibold">Cafe Aurora</span>
                </div>

                <div className="flex justify-between">
                  <span>Location</span>
                  <span className="font-semibold">
                    Punjabi Bagh, Delhi
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Price for Two</span>
                  <span className="font-semibold">₹1600</span>
                </div>

              </div>

            </div>

            {/* CTA */}
            <button
              type="submit"
              href="/MyBookings"
              className="w-full bg-[#4B3225] hover:bg-[#3a251c] transition-all duration-300 text-white text-lg font-bold py-4 rounded-2xl shadow-xl"
            >
              Confirm Reservation
            </button>

          </form>

        </div>
      </div>
    </div>
  );
};

export default Page;