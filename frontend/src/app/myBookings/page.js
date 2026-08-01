"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Calendar, Clock, Users, UtensilsCrossed } from "lucide-react";

const MyBookings = () => {
  const [myBookings, setMyBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const getStatusStyle = (status) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return "bg-[#FAF3E0] text-[#B8860B] border-[#EEDC82]";
      case "confirmed":
        return "bg-[#EBF3ED] text-[#2E6F40] border-[#B2D8B9]";
      case "cancelled":
        return "bg-[#FDF2F2] text-[#9B2C2C] border-[#F8B4B4]";
      default:
        return "bg-[#F7F5F2] text-[#7A6A5C] border-[#E5E2DE]";
    }
  };

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("http://localhost:5000/myBookings", {
          method: "GET",
          credentials: "include",
        });

        const data = await response.json();

        if (response.ok) {
          setMyBookings(data);
        }
      } catch (error) {
        console.log("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FDFCFB] pt-20 xs:pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-24 text-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10">
          
         
          <div className="mb-6 sm:mb-8 md:mb-10">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#7A6A5C] font-semibold mb-1.5 sm:mb-2">
              Reservations
            </p>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-normal text-[#1A1A1A] font-serif tracking-tight">
              My Bookings
            </h1>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base text-[#666666] font-light max-w-xl">
              View and track all your upcoming and past restaurant dining reservations.
            </p>
          </div>

          
          <div className="block sm:hidden space-y-4">
            {loading ? (
              <div className="rounded-2xl border border-[#E5E2DE] bg-white p-6 text-center shadow-xs">
                <p className="text-xs text-[#7A6A5C] tracking-widest uppercase font-medium">
                  Loading reservations...
                </p>
              </div>
            ) : myBookings.length > 0 ? (
              myBookings.map((booking) => (
                <div
                  key={booking._id}
                  className="rounded-2xl border border-[#E5E2DE] bg-white p-4.5 shadow-xs transition-all active:scale-[0.99]"
                >
                
                  <div className="flex items-start justify-between gap-3 mb-3.5 pb-3 border-b border-[#F0ECE6]">
                    <div>
                      <h3 className="font-serif text-base text-[#1A1A1A] font-medium leading-tight">
                        {booking.restaurant?.name || "Restaurant Not Found"}
                      </h3>
                      {booking.restaurant?.location && (
                        <p className="text-[11px] text-[#7A6A5C] font-light mt-0.5">
                          {booking.restaurant?.location?.city}
                        </p>
                      )}
                    </div>
                    <span
                      className={`shrink-0 px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider border ${getStatusStyle(
                        booking.status
                      )}`}
                    >
                      {booking.status}
                    </span>
                  </div>

                  
                  <div className="grid grid-cols-3 gap-2 text-xs text-[#666666] font-light">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-[#7A6A5C] shrink-0" />
                      <span className="truncate">
                        {new Date(booking.bookingDate).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-[#7A6A5C] shrink-0" />
                      <span className="truncate">{booking.bookingTime}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Users size={14} className="text-[#7A6A5C] shrink-0" />
                      <span>
                        {booking.guests} {booking.guests === 1 ? "Guest" : "Guests"}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-[#C9BDB0] bg-[#F7F5F2] p-8 text-center">
                <UtensilsCrossed size={28} className="mx-auto text-[#7A6A5C] mb-2 opacity-60" />
                <p className="text-xs text-[#666666] font-light">
                  No reservations found yet.
                </p>
              </div>
            )}
          </div>

         
          <div className="hidden sm:block rounded-2xl md:rounded-3xl border border-[#E5E2DE] bg-white shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F7F5F2] border-b border-[#E5E2DE] text-[11px] md:text-xs uppercase tracking-[0.15em] font-semibold text-[#7A6A5C]">
                    <th className="px-5 md:px-8 py-4 md:py-5">Restaurant</th>
                    <th className="px-4 md:px-6 py-4 md:py-5">Date</th>
                    <th className="px-4 md:px-6 py-4 md:py-5">Time</th>
                    <th className="px-4 md:px-6 py-4 md:py-5">Guests</th>
                    <th className="px-5 md:px-8 py-4 md:py-5 text-right">Status</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#E5E2DE] text-xs sm:text-sm">
                  {loading ? (
                    <tr>
                      <td
                        colSpan={5}
                        className="px-8 py-16 text-center text-[#7A6A5C] tracking-widest uppercase text-xs"
                      >
                        Loading reservations...
                      </td>
                    </tr>
                  ) : myBookings.length > 0 ? (
                    myBookings.map((booking) => (
                      <tr
                        key={booking._id}
                        className="hover:bg-[#FDFCFB] transition-colors"
                      >
                        <td className="px-5 md:px-8 py-5 md:py-6 font-serif text-sm md:text-base text-[#1A1A1A] font-medium">
                          {booking.restaurant?.name || "Restaurant not found"}
                        </td>

                        <td className="px-4 md:px-6 py-5 md:py-6 text-[#666666] font-light whitespace-nowrap">
                          {new Date(booking.bookingDate).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </td>

                        <td className="px-4 md:px-6 py-5 md:py-6 text-[#666666] font-light whitespace-nowrap">
                          {booking.bookingTime}
                        </td>

                        <td className="px-4 md:px-6 py-5 md:py-6 text-[#666666] font-light whitespace-nowrap">
                          {booking.guests} {booking.guests === 1 ? "Person" : "Guests"}
                        </td>

                        <td className="px-5 md:px-8 py-5 md:py-6 text-right">
                          <span
                            className={`inline-block px-3 md:px-3.5 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-medium uppercase tracking-wider border ${getStatusStyle(
                              booking.status
                            )}`}
                          >
                            {booking.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={5}
                        className="px-8 py-16 text-center text-[#666666] font-light"
                      >
                        No reservations found yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default MyBookings;