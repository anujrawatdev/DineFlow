// "use client";

// const BookingTable = ({bookings}) => {
//   console.log(bookings);
//   return (
//     <div className="flex-1 min-h-screen bg-gray-100 p-8">

//       {/* Header */}
//       <div className="flex justify-between items-center mb-8">
//         <div>
//           <h1 className="text-4xl font-bold text-gray-900">
//             Booking Management
//           </h1>
//           <p className="text-gray-500 mt-1">
//             View and manage all restaurant bookings.
//           </p>
//         </div>

//         <div className="bg-white px-6 py-4 rounded-2xl shadow">
//           <p className="text-sm text-gray-500">
//             Total Bookings
//           </p>
//           <h2 className="text-3xl font-bold text-amber-500">
//             {bookings.length}
//           </h2>
//         </div>
//       </div>

//       {/* Search */}
//       <div className="bg-white p-5 rounded-2xl shadow mb-6">
//         <input
//           type="text"
//           placeholder="Search bookings..."
//           className="w-full border border-gray-300 rounded-xl px-4 py-3 text-neutral-800 outline-none focus:border-amber-500"
//         />
//       </div>

//       {/* Table */}
//       <div className="bg-white rounded-2xl shadow overflow-hidden">

//         <table className="w-full">

//           <thead className="bg-black text-white">
//             <tr>
//               <th className="px-6 py-4 text-left">Customer</th>
//               <th className="px-6 py-4 text-left">Restaurant</th>
//               <th className="px-6 py-4 text-left">Guests</th>
//               <th className="px-6 py-4 text-left">Date</th>
//               <th className="px-6 py-4 text-left">Time</th>
//               <th className="px-6 py-4 text-left">Status</th>
//             </tr>
//           </thead>

//           <tbody>
//             {
//               bookings.map((booking)=>(
//                  <tr key={booking._id} className="border-b hover:bg-gray-50 transition">
//               <td className="px-6 py-5">
//                 <div>
//                   <p className="font-semibold text-gray-900">
//                     {booking.name}
//                   </p>
//                   <p className="text-sm text-gray-500">
//                     {booking.email}
//                   </p>
//                 </div>
//               </td>

//               <td className="px-6 py-5 text-gray-800">
//                 {booking.restaurant?(
//                   <span>
//                     {booking.restaurant.name}
//                   </span>
//                 ):(
//                   <span className="text-red-600">
//                     Restaurnt Deleted
//                   </span>
//                 )}
//               </td>

//               <td className="px-6 py-5 text-gray-700">
//                 {booking.guests}
//               </td>

//               <td className="px-6 py-5 text-gray-700">
//                 {new Date(booking.createdAt).toLocaleDateString()}
//               </td>

//               <td className="px-6 py-5 text-gray-700">
//                 {booking.bookingTime}
//               </td>

//               <td className="px-6 py-5">
//                 <span className={`p-1 rounded-xl ${booking.status === "confirmed"
//                 ? "bg-green-500"
//                 : booking.status === "cancelled"
//                 ? "bg-red-500"
//                 : "bg-yellow-500"}`}>
//                   {booking.status}
//                 </span>
//               </td>

//             </tr>
//               ))
//             }
//           </tbody>

//         </table>

//       </div>
//     </div>
//   );
// };

// export default BookingTable;

"use client";

import React, { useState } from "react";
import { Search, Calendar, Clock, Users } from "lucide-react";

const BookingTable = ({ bookings = [], loading }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter bookings based on search query
  const filteredBookings = bookings.filter(
    (booking) =>
      booking.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.restaurant?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.status?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Helper function for status badge styling
  const getStatusBadgeStyle = (status) => {
    switch (status?.toLowerCase()) {
      case "confirmed":
        return "bg-[#F2F7F4] text-[#2D5A3F] border border-[#CDE3D5]";
      case "cancelled":
        return "bg-[#FDF2F2] text-[#9B2C2C] border border-[#F8D7D7]";
      default:
        // Pending or other status
        return "bg-[#FFFDF5] text-[#975A16] border border-[#FEEBC8]";
    }
  };

  return (
    <div className="flex-1 min-h-screen bg-[#FDFCFB] p-8 md:p-12 text-[#1A1A1A]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-[#7A6A5C] font-semibold">
            Administration
          </p>
          <h1 className="mt-1 text-4xl font-normal font-serif tracking-tight text-[#1A1A1A]">
            Booking Management
          </h1>
          <p className="mt-1 text-sm text-[#666666] font-light">
            Monitor, track, and manage all active and historic guest reservations.
          </p>
        </div>

        <div className="rounded-2xl border border-[#E5E2DE] bg-white px-6 py-4 shadow-sm self-start md:self-auto">
          <p className="text-xs uppercase tracking-wider font-semibold text-[#7A6A5C]">
            Total Bookings
          </p>
          <h2 className="text-2xl font-serif font-normal text-[#1A1A1A] mt-1">
            {bookings.length}
          </h2>
        </div>
      </div>

      {/* Search Input */}
      <div className="rounded-2xl border border-[#E5E2DE] bg-white p-4 mb-6 shadow-sm">
        <div className="flex items-center gap-3 px-2">
          <Search size={18} className="text-[#7A6A5C]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by customer, restaurant, or status..."
            className="w-full bg-transparent text-sm text-[#1A1A1A] placeholder-[#A39A90] outline-none"
          />
        </div>
      </div>

      {/* Table Container */}
      <div className="rounded-2xl border border-[#E5E2DE] bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#E5E2DE] bg-[#F7F5F2]">
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                  Customer
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                  Restaurant
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                  Party Size
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                  Date
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                  Time
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C] text-right">
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
                    {/* Customer */}
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-[#1A1A1A]">
                          {booking.name}
                        </p>
                        <p className="text-xs text-[#7A6A5C] font-light mt-0.5">
                          {booking.email}
                        </p>
                      </div>
                    </td>

                    {/* Restaurant */}
                    <td className="px-6 py-4 text-sm font-medium text-[#1A1A1A]">
                      {booking.restaurant ? (
                        <span>{booking.restaurant.name}</span>
                      ) : (
                        <span className="text-xs text-red-600 font-normal italic">
                          Restaurant Removed
                        </span>
                      )}
                    </td>

                    {/* Guests */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-sm text-[#666666] font-light">
                        <Users size={14} className="text-[#7A6A5C]" />
                        <span>{booking.guests} {booking.guests === 1 ? "Guest" : "Guests"}</span>
                      </div>
                    </td>

                    {/* Date */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-sm text-[#666666] font-light">
                        <Calendar size={14} className="text-[#7A6A5C]" />
                        <span>
                          {booking.bookingDate
                            ? new Date(booking.bookingDate).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })
                            : booking.createdAt
                            ? new Date(booking.createdAt).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })
                            : "N/A"}
                        </span>
                      </div>
                    </td>

                    {/* Time */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-sm text-[#666666] font-light">
                        <Clock size={14} className="text-[#7A6A5C]" />
                        <span>{booking.bookingTime || "N/A"}</span>
                      </div>
                    </td>

                    {/* Status Badge */}
                    <td className="px-6 py-4 text-right">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider ${getStatusBadgeStyle(
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
    </div>
  );
};

export default BookingTable;