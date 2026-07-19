"use client";
import React from "react";
import { useState, useEffect } from "react";
import OwnerNavbar from "../Navbar/onwerNavbar";

const page = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await fetch("http://localhost:5000/ownerBookings", {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      setBookings(data);
    };
    fetchBookings();
  }, []);

  const updateStatus = async (id, status) => {
    const response = await fetch(`http://localhost:5000/ownerBookings/${id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: status,
      }),
    });
    console.log(response.status);

    const text = await response.text();
    console.log(text);
  };
  return (
    <>
      <OwnerNavbar />
      <div className=" p-34 p-10 min-h-screen bg-neutral-200">
        <h1 className=" text-3xl text-amber-900 font-bold mb-8">
          Booking Requests
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow">
            <thead>
              <tr className="bg-[#4B3225] text-white">
                <th className="p-4">Customer</th>
                <th className="p-4">Restaurant</th>
                <th className="p-4">Date</th>
                <th className="p-4">Time</th>
                <th className="p-4">Guests</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id} className="border-b text-center">
                  <td className=" text-neutral-800 p-4">{booking.name}</td>

                  <td className="p-4 text-neutral-800">
                    {booking.restaurant.name}
                  </td>

                  <td className="p-4 text-neutral-800">
                    {new Date(booking.bookingDate).toLocaleDateString()}
                  </td>

                  <td className="p-4 text-neutral-800">
                    {booking.bookingTime}
                  </td>

                  <td className="p-4 text-neutral-800">{booking.guests}</td>

                  <td className="p-4 text-neutral-800">
                    <span
                      className={`px-3 py-1 rounded-full ${
                        booking.status === "confirmed"
                          ? "bg-green-200 text-green-800"
                          : booking.status === "cancelled"
                            ? "bg-red-200 text-red-900"
                            : "bg-yellow-200 text-yellow-800"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>

                  <td className="p-4 flex gap-3 justify-center">
                    {booking.status === "pending" && (
                      <>
                        <button
                          onClick={() => updateStatus(booking._id, "confirmed")}
                          className="bg-green-600 text-white px-4 py-2 rounded-lg"
                        >
                          Accept
                        </button>

                        <button
                          onClick={() => updateStatus(booking._id, "cancelled")}
                          className="bg-red-600 text-white px-4 py-2 rounded-lg"
                        >
                          Reject
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default page;
