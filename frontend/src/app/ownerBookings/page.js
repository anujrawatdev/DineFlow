"use client";
import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { toast } from "sonner";
const Page = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("http://localhost:5000/ownerBookings", {
          method: "GET",
          credentials: "include",
        });
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
      status === "confirmed" ? "Confirming booking..." : "Rejecting booking...",
    );

    try {
      const response = await fetch(
        `http://localhost:5000/ownerBookings/${id}`,
        {
          method: "PATCH",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: status,
          }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setBookings((prev) =>
          prev.map((booking) =>
            booking._id === id ? { ...booking, status } : booking,
          ),
        );
        toast.success(
          status === "confirmed"
            ? "Booking confirmed successfully"
            : "Booking rejected successfully",
          { id: loadingToast },
        );
      } else {
        toast.error(err.message || "Failed to update booking status", {
          id: loadingToast,
        });
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

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen bg-[#FDFCFB] text-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-10">
            <p className="text-xs tracking-[0.25em] uppercase text-[#7A6A5C] font-semibold">
              Management
            </p>
            <h1 className="mt-2 text-4xl md:text-5xl font-normal text-[#1A1A1A] font-serif tracking-tight">
              Booking Requests
            </h1>
            <p className="mt-2 text-[#666666] font-light">
              Manage incoming reservation requests and update table
              confirmations.
            </p>
          </div>

          {/* Table Container */}
          <div className="rounded-2xl border border-[#E5E2DE] bg-white shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F7F5F2] border-b border-[#E5E2DE] text-xs uppercase tracking-[0.15em] font-semibold text-[#7A6A5C]">
                    <th className="px-6 py-5">Customer</th>
                    <th className="px-6 py-5">Restaurant</th>
                    <th className="px-6 py-5">Date</th>
                    <th className="px-6 py-5">Time</th>
                    <th className="px-6 py-5">Guests</th>
                    <th className="px-6 py-5 text-center">Status</th>
                    <th className="px-6 py-5 text-right">Action</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#E5E2DE] text-sm">
                  {bookings.length > 0 ? (
                    bookings.map((booking) => (
                      <tr
                        key={booking._id}
                        className="hover:bg-[#FDFCFB] transition-colors"
                      >
                        <td className="px-6 py-5 font-serif text-base text-[#1A1A1A] font-medium">
                          {booking.name}
                        </td>

                        <td className="px-6 py-5 text-[#666666] font-light">
                          {booking.restaurant?.name || "N/A"}
                        </td>

                        <td className="px-6 py-5 text-[#666666] font-light">
                          {new Date(booking.bookingDate).toLocaleDateString()}
                        </td>

                        <td className="px-6 py-5 text-[#666666] font-light">
                          {booking.bookingTime}
                        </td>

                        <td className="px-6 py-5 text-[#666666] font-light">
                          {booking.guests}
                        </td>

                        <td className="px-6 py-5 text-center">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider border ${getStatusStyle(
                              booking.status,
                            )}`}
                          >
                            {booking.status}
                          </span>
                        </td>

                        <td className="px-6 py-5 text-right">
                          {booking.status === "pending" ? (
                            <div className="flex gap-2 justify-end">
                              <button
                                onClick={() => {
                                  if (
                                    confirm(
                                      "are you sure want to accept this request?",
                                    )
                                  ) {
                                    updateStatus(booking._id, "confirmed");
                                  }
                                }}
                                className="bg-[#1A1A1A] hover:bg-[#333333] text-white text-xs font-medium tracking-wider uppercase px-4 py-2 rounded-full transition shadow-sm"
                              >
                                Accept
                              </button>

                              <button
                                onClick={() => {
                                  if (
                                    confirm(
                                      "are you sure want to reject this request?",
                                    )
                                  ) {
                                    updateStatus(booking._id, "cancelled");
                                  }
                                }}
                                className="border border-[#E5E2DE] bg-white hover:bg-[#F7F5F2] text-[#9B2C2C] text-xs font-medium tracking-wider uppercase px-4 py-2 rounded-full transition"
                              >
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
        </div>
      </main>
    </>
  );
};

export default Page;
