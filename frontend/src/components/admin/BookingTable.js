"use client";

import React, { useState } from "react";
import {
  Search,
  Calendar,
  Clock,
  Users,
  Mail,
  Store,
  User,
} from "lucide-react";

const BookingTable = ({ bookings = [], loading }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBookings = bookings.filter(
    (booking) =>
      booking.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.restaurant?.name
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      booking.status?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadgeStyle = (status) => {
    switch (status?.toLowerCase()) {
      case "confirmed":
        return "bg-[#F2F7F4] text-[#2D5A3F] border border-[#CDE3D5]";
      case "cancelled":
        return "bg-[#FDF2F2] text-[#9B2C2C] border border-[#F8D7D7]";
      default:
        return "bg-[#FFFDF5] text-[#975A16] border border-[#FEEBC8]";
    }
  };

  const formatDate = (booking) => {
    const date = booking.bookingDate || booking.createdAt;
    if (!date) return "N/A";

    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-3 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-10">

        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-5 mb-6 sm:mb-8">
          <div className="min-w-0">
            <p className="text-[10px] sm:text-xs tracking-[0.18em] sm:tracking-[0.25em] uppercase text-[#7A6A5C] font-semibold">
              Administration
            </p>

            <h1 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-normal font-serif tracking-tight text-[#1A1A1A] leading-tight">
              Booking Management
            </h1>

            <p className="mt-2 text-sm sm:text-base text-[#666666] font-light leading-relaxed max-w-2xl">
              Monitor, track, and manage all active and historic guest
              reservations.
            </p>
          </div>

          <div className="w-full md:w-auto rounded-2xl border border-[#E5E2DE] bg-white px-4 sm:px-6 py-3 sm:py-4 shadow-sm">
            <p className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-[#7A6A5C]">
              Total Bookings
            </p>

            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#1A1A1A] mt-1">
              {bookings.length}
            </h2>
          </div>
        </div>

      
        <div className="rounded-2xl border border-[#E5E2DE] bg-white p-3 sm:p-4 mb-5 sm:mb-6 shadow-sm">
          <div className="flex items-center gap-2 sm:gap-3 px-1 sm:px-2">
            <Search size={18} className="text-[#7A6A5C] shrink-0" />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search bookings..."
              className="w-full bg-transparent text-sm sm:text-base text-[#1A1A1A] placeholder-[#A39A90] outline-none"
            />
          </div>
        </div>

      
        <div className="hidden md:block rounded-2xl border border-[#E5E2DE] bg-white shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E5E2DE] bg-[#F7F5F2]">
                  <th className="px-5 lg:px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                    Customer
                  </th>

                  <th className="px-5 lg:px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                    Restaurant
                  </th>

                  <th className="px-5 lg:px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                    Party Size
                  </th>

                  <th className="px-5 lg:px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                    Date
                  </th>

                  <th className="px-5 lg:px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                    Time
                  </th>

                  <th className="px-5 lg:px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C] text-right">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#E5E2DE]">
                {loading ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-6 py-12 text-center text-sm text-[#7A6A5C] font-serif"
                    >
                      Loading reservation entries...
                    </td>
                  </tr>
                ) : filteredBookings.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-6 py-12 text-center text-sm text-[#666666] font-light"
                    >
                      No bookings found matching your search.
                    </td>
                  </tr>
                ) : (
                  filteredBookings.map((booking) => (
                    <tr
                      key={booking._id}
                      className="hover:bg-[#FDFCFB] transition-colors"
                    >
                      <td className="px-5 lg:px-6 py-4">
                        <div>
                          <p className="text-sm font-medium text-[#1A1A1A]">
                            {booking.name}
                          </p>

                          <p className="text-xs text-[#7A6A5C] font-light mt-1">
                            {booking.email}
                          </p>
                        </div>
                      </td>

                      <td className="px-5 lg:px-6 py-4 text-sm font-medium text-[#1A1A1A]">
                        {booking.restaurant ? (
                          booking.restaurant.name
                        ) : (
                          <span className="text-xs text-red-600 font-normal italic">
                            Restaurant Removed
                          </span>
                        )}
                      </td>

                      <td className="px-5 lg:px-6 py-4">
                        <div className="flex items-center gap-1.5 text-sm text-[#666666] font-light">
                          <Users
                            size={14}
                            className="text-[#7A6A5C]"
                          />
                          <span>
                            {booking.guests} {booking.guests === 1 ? "Guest" : "Guests"}
                          </span>
                        </div>
                      </td>

                      <td className="px-5 lg:px-6 py-4">
                        <div className="flex items-center gap-1.5 text-sm text-[#666666] font-light">
                          <Calendar
                            size={14}
                            className="text-[#7A6A5C]"
                          />
                          <span>{formatDate(booking)}</span>
                        </div>
                      </td>

                      <td className="px-5 lg:px-6 py-4">
                        <div className="flex items-center gap-1.5 text-sm text-[#666666] font-light">
                          <Clock
                            size={14}
                            className="text-[#7A6A5C]"
                          />
                          <span>{booking.bookingTime || "N/A"}</span>
                        </div>
                      </td>

                      <td className="px-5 lg:px-6 py-4 text-right">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider ${getStatusBadgeStyle(
                            booking.status
                          )}`}
                        >
                          {booking.status || "Pending"}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

    
        <div className="md:hidden space-y-3">
          {loading ? (
            <div className="rounded-2xl border border-[#E5E2DE] bg-white p-8 text-center text-sm text-[#7A6A5C] font-serif shadow-sm">
              Loading reservation entries...
            </div>
          ) : filteredBookings.length === 0 ? (
            <div className="rounded-2xl border border-[#E5E2DE] bg-white p-8 text-center text-sm text-[#666666] font-light shadow-sm">
              No bookings found matching your search.
            </div>
          ) : (
            filteredBookings.map((booking) => (
              <div
                key={booking._id}
                className="rounded-2xl border border-[#E5E2DE] bg-white p-4 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-[#F7F5F2] border border-[#E5E2DE] flex items-center justify-center shrink-0">
                        <User size={16} className="text-[#7A6A5C]" />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-sm font-semibold text-[#1A1A1A] truncate">
                          {booking.name}
                        </h3>

                        <p className="text-xs text-[#7A6A5C] truncate">
                          {booking.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider shrink-0 ${getStatusBadgeStyle(
                      booking.status
                    )}`}
                  >
                    {booking.status || "Pending"}
                  </span>
                </div>

                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex items-start gap-2 text-[#666666]">
                    <Store
                      size={16}
                      className="text-[#7A6A5C] shrink-0 mt-0.5"
                    />
                    <span className="leading-relaxed">
                      {booking.restaurant ? (
                        booking.restaurant.name
                      ) : (
                        <span className="text-red-600 italic">
                          Restaurant Removed
                        </span>
                      )}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[#666666]">
                    <Users
                      size={16}
                      className="text-[#7A6A5C] shrink-0"
                    />
                    <span>
                      {booking.guests} {booking.guests === 1 ? "Guest" : "Guests"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[#666666]">
                    <Calendar
                      size={16}
                      className="text-[#7A6A5C] shrink-0"
                    />
                    <span>{formatDate(booking)}</span>
                  </div>

                  <div className="flex items-center gap-2 text-[#666666]">
                    <Clock
                      size={16}
                      className="text-[#7A6A5C] shrink-0"
                    />
                    <span>{booking.bookingTime || "N/A"}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingTable;