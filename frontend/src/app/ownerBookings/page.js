"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { toast } from "sonner";
import {
  Calendar,
  Clock,
  Users,
  Store,
  User,
  Check,
  X,
} from "lucide-react";

const Page = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/ownerBookings`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchBookings();
  }, []);

  const updateStatus = async (id, status) => {
    const loadingToast = toast.loading(
      status === "confirmed"
        ? "Confirming booking..."
        : "Rejecting booking..."
    );

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/ownerBookings/${id}`,
        {
          method: "PATCH",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setBookings((prev) =>
          prev.map((booking) =>
            booking._id === id ? { ...booking, status } : booking
          )
        );

        toast.success(
          status === "confirmed"
            ? "Booking confirmed successfully"
            : "Booking rejected successfully",
          { id: loadingToast }
        );
      } else {
        toast.error(
          data.message || "Failed to update booking status",
          { id: loadingToast }
        );
      }
    } catch (error) {
      console.log("error", error);

      toast.error("Server error. Please try again.", {
        id: loadingToast,
      });
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-[#EBF3ED] text-[#2E6F40] border-[#B2D8B9]";
      case "cancelled":
        return "bg-[#FDF2F2] text-[#9B2C2C] border-[#F8B4B4]";
      default:
        return "bg-[#FAF3E0] text-[#B8860B] border-[#EEDC82]";
    }
  };

  const formatDate = (date) => {
    if (!date) return "N/A";

    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const pendingCount = bookings.filter(
    (b) => b.status === "pending"
  ).length;

  return (
    <>
      <Navbar />

      <main className="pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-14 md:pb-20 min-h-screen bg-[#FDFCFB] text-[#1A1A1A] overflow-x-hidden">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">

          
          <div className="mb-6 sm:mb-8 rounded-2xl sm:rounded-3xl bg-[#111111] text-white p-4 sm:p-5 md:p-6 lg:p-8 border border-white/10 shadow-lg">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">

              <div className="max-w-2xl">
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.28em] text-stone-300 font-semibold mb-3">
                  Reservation Management
                </p>

                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl leading-tight font-normal">
                  Booking Requests
                </h2>

                <p className="mt-3 text-sm sm:text-base text-stone-300 leading-relaxed">
                  Manage incoming reservation requests and update table
                  confirmations for your restaurants.
                </p>
              </div>

              <div className="flex items-stretch gap-3 md:gap-4 self-start w-full sm:w-auto">
                <div className="min-w-[130px] rounded-2xl bg-white/8 border border-white/10 px-4 py-3 backdrop-blur-sm">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-stone-300 font-semibold">
                    Pending
                  </p>

                  <div className="mt-1 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                    <span className="text-2xl font-serif">
                      {pendingCount}
                    </span>
                  </div>
                </div>
              </div>
            </div> 
          </div>

          
          <div className="mb-6 sm:mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="min-w-0">
              <p className="text-[10px] sm:text-xs tracking-[0.18em] sm:tracking-[0.25em] uppercase text-[#7A6A5C] font-semibold">
                Management
              </p>

              <h1 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-normal font-serif tracking-tight text-[#1A1A1A] leading-tight">
                Booking Requests
              </h1>

              <p className="mt-2 text-sm sm:text-base text-[#666666] font-light leading-relaxed max-w-2xl">
                Review guest reservations, confirm tables, or decline requests
                directly from your dashboard.
              </p>
            </div>

            <div className="w-full sm:w-auto rounded-2xl border border-[#E5E2DE] bg-white px-4 sm:px-5 py-3 sm:py-4 shadow-sm">
              <p className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-[#7A6A5C]">
                Total Bookings
              </p>

              <h2 className="mt-1 text-2xl sm:text-3xl font-serif font-normal text-[#1A1A1A]">
                {bookings.length}
              </h2>
            </div>
          </div>

          
          <div className="hidden md:block rounded-2xl border border-[#E5E2DE] bg-white shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#E5E2DE] bg-[#F7F5F2] text-xs uppercase tracking-[0.15em] font-semibold text-[#7A6A5C]">
                    <th className="px-5 lg:px-6 py-4">Customer</th>
                    <th className="px-5 lg:px-6 py-4">Restaurant</th>
                    <th className="px-5 lg:px-6 py-4">Date</th>
                    <th className="px-5 lg:px-6 py-4">Time</th>
                    <th className="px-5 lg:px-6 py-4">Guests</th>
                    <th className="px-5 lg:px-6 py-4 text-center">Status</th>
                    <th className="px-5 lg:px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#E5E2DE] text-sm">
                  {bookings.length > 0 ? (
                    bookings.map((booking) => (
                      <tr
                        key={booking._id}
                        className="hover:bg-[#FDFCFB] transition-colors"
                      >
                        <td className="px-5 lg:px-6 py-5">
                          <div>
                            <p className="font-serif text-base text-[#1A1A1A] font-medium">
                              {booking.name}
                            </p>

                            <p className="text-xs text-[#7A6A5C] mt-1">
                              {booking.email || "Guest reservation"}
                            </p>
                          </div>
                        </td>

                        <td className="px-5 lg:px-6 py-5 text-[#666666] font-light">
                          {booking.restaurant?.name || "N/A"}
                        </td>

                        <td className="px-5 lg:px-6 py-5 text-[#666666] font-light">
                          {formatDate(booking.bookingDate)}
                        </td>

                        <td className="px-5 lg:px-6 py-5 text-[#666666] font-light">
                          {booking.bookingTime || "N/A"}
                        </td>

                        <td className="px-5 lg:px-6 py-5 text-[#666666] font-light">
                          {booking.guests}
                        </td>

                        <td className="px-5 lg:px-6 py-5 text-center">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider border ${getStatusStyle(
                              booking.status
                            )}`}
                          >
                            {booking.status}
                          </span>
                        </td>

                        <td className="px-5 lg:px-6 py-5 text-right">
                          {booking.status === "pending" ? (
                            <div className="flex gap-2 justify-end">
                              <button
                                onClick={() =>
                                  updateStatus(
                                    booking._id,
                                    "confirmed"
                                  )
                                }
                                className="inline-flex items-center gap-1 rounded-full bg-[#1A1A1A] px-4 py-2 text-xs font-medium uppercase tracking-wider text-white hover:bg-[#333333] transition shadow-sm"
                              >
                                <Check size={14} />
                                Accept
                              </button>

                              <button
                                onClick={() =>
                                  updateStatus(
                                    booking._id,
                                    "cancelled"
                                  )
                                }
                                className="inline-flex items-center gap-1 rounded-full border border-[#E5E2DE] bg-white px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#9B2C2C] hover:bg-[#F7F5F2] transition"
                              >
                                <X size={14} />
                                Reject
                              </button>
                            </div>
                          ) : (
                            <span className="text-xs text-[#7A6A5C] italic">
                              Processed
                            </span>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={7}
                        className="px-6 py-16 text-center text-[#666666] font-light"
                      >
                        No booking requests found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

         
          <div className="md:hidden space-y-3">
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <div
                  key={booking._id}
                  className="rounded-2xl border border-[#E5E2DE] bg-white p-4 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="h-11 w-11 rounded-full bg-[#F7F5F2] border border-[#E5E2DE] flex items-center justify-center shrink-0">
                        <User size={18} className="text-[#7A6A5C]" />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-sm font-semibold text-[#1A1A1A] truncate">
                          {booking.name}
                        </h3>

                        <p className="text-xs text-[#7A6A5C] truncate">
                          {booking.email || "Guest reservation"}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider shrink-0 border ${getStatusStyle(
                        booking.status
                      )}`}
                    >
                      {booking.status}
                    </span>
                  </div>

                  <div className="mt-4 space-y-3 text-sm text-[#666666]">
                    <div className="flex items-start gap-2">
                      <Store
                        size={16}
                        className="text-[#7A6A5C] shrink-0 mt-0.5"
                      />
                      <span className="font-medium text-[#1A1A1A]">
                        {booking.restaurant?.name || "N/A"}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar
                        size={16}
                        className="text-[#7A6A5C] shrink-0"
                      />
                      <span>{formatDate(booking.bookingDate)}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock
                        size={16}
                        className="text-[#7A6A5C] shrink-0"
                      />
                      <span>{booking.bookingTime || "N/A"}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Users
                        size={16}
                        className="text-[#7A6A5C] shrink-0"
                      />
                      <span>
                        {booking.guests} {booking.guests === 1 ? "Guest" : "Guests"}
                      </span>
                    </div>
                  </div>

                  {booking.status === "pending" ? (
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <button
                        onClick={() =>
                          updateStatus(
                            booking._id,
                            "confirmed"
                          )
                        }
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1A1A1A] px-4 py-3 text-sm font-medium text-white hover:bg-[#333333] transition active:scale-[0.99]"
                      >
                        <Check size={16} />
                        Accept
                      </button>

                      <button
                        onClick={() =>
                          updateStatus(
                            booking._id,
                            "cancelled"
                          )
                        }
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-100 transition active:scale-[0.99]"
                      >
                        <X size={16} />
                        Reject
                      </button>
                    </div>
                  ) : (
                    <div className="mt-4 rounded-xl border border-[#E5E2DE] bg-[#F7F5F2] px-3 py-2 text-center text-xs text-[#7A6A5C]">
                      Booking already processed
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="rounded-2xl border border-[#E5E2DE] bg-white p-8 text-center text-sm text-[#666666] font-light shadow-sm">
                No booking requests found.
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;