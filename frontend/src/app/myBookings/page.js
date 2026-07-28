// "use client";

// import React,{useState,useEffect} from "react";
// import Navbar from "../Navbar/Navbar";

// const MyBookings = () => {

//   const [myBookings, setMyBookings] = useState([]);
//   const [loading, setLoading] = useState(true);


//   const getStatusColor = (status) => {
//     switch(status){
//       case "pending":
//         return "bg-yellow-100 text-yellow-700";

//       case "confirmed":
//         return "bg-green-100 text-green-700";

//       case "cancelled":
//         return "bg-red-100 text-red-700";

//       default:
//         return "bg-gray-100 text-gray-700";
//     }
//   };


//   useEffect(() => {

//     const fetchBookings = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/myBookings", {
//           method: "GET",
//           credentials: "include",
//         });

//         const data = await response.json();

//         console.log(data);

//         if(response.ok){
//           console.log(data)
//           setMyBookings(data);
//         }

//       } catch(error){
//         console.log(error);
//       }
//       finally{
//         setLoading(false);
//       }
//     };

//     fetchBookings();

//   }, []);
//   return (
//     <>
//     <Navbar/>
//     <div className=" pt-32 min-h-screen bg-gray-100 py-10 px-5">
//       <div className=" max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
//         <div className="px-8 py-6 border-b">
//           <h1 className="text-3xl font-bold text-gray-800">My Bookings</h1>
//           <p className="text-gray-500 mt-1">
//             View all your restaurant reservations.
//           </p>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-amber-950 text-white">
//               <tr>
//                 <th className="px-6 py-4 text-left">Restaurant</th>
//                 <th className="px-6 py-4 text-left">Date</th>
//                 <th className="px-6 py-4 text-left">Time</th>
//                 <th className="px-6 py-4 text-left">Guests</th>
//                 <th className="px-6 py-4 text-right">Status</th>
//               </tr>
//             </thead>

//             <tbody>
//               {
              
//               myBookings.map((booking) => (
//                 <tr
//                   key={booking._id}
//                   className="border-b hover:bg-gray-50 transition"
//                 >
//                   <td className="px-6 py-5 font-semibold text-gray-800">
//                     {booking.restaurant?.name|| "Restaurant not found"}
//                   </td>

//                   <td className="px-6 py-5 text-gray-600">{new Date(booking.bookingDate).toLocaleDateString()}</td>

//                   <td className="px-6 py-5 text-gray-600">{booking.bookingTime}</td>

//                   <td className="px-6 py-5 text-gray-600">{booking.guests}</td>

//                   <td className="px-6 py-5 text-right">
//                     <span
//                       className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(
//                         booking.status,
//                       )}`}
//                     >
//                       {booking.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default MyBookings;

"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";

const MyBookings = () => {
  const [myBookings, setMyBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const getStatusStyle = (status) => {
    switch (status) {
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
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FDFCFB] pt-32 pb-20 text-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header Section */}
          <div className="mb-10">
            <p className="text-xs tracking-[0.25em] uppercase text-[#7A6A5C] font-semibold">
              Reservations
            </p>
            <h1 className="mt-2 text-4xl md:text-5xl font-normal text-[#1A1A1A] font-serif tracking-tight">
              My Bookings
            </h1>
            <p className="mt-2 text-[#666666] font-light">
              View and track all your upcoming and past restaurant dining reservations.
            </p>
          </div>

          {/* Table Container */}
          <div className="rounded-2xl border border-[#E5E2DE] bg-white shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F7F5F2] border-b border-[#E5E2DE] text-xs uppercase tracking-[0.15em] font-semibold text-[#7A6A5C]">
                    <th className="px-8 py-5">Restaurant</th>
                    <th className="px-6 py-5">Date</th>
                    <th className="px-6 py-5">Time</th>
                    <th className="px-6 py-5">Guests</th>
                    <th className="px-8 py-5 text-right">Status</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#E5E2DE] text-sm">
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
                        <td className="px-8 py-6 font-serif text-base text-[#1A1A1A] font-medium">
                          {booking.restaurant?.name || "Restaurant not found"}
                        </td>

                        <td className="px-6 py-6 text-[#666666] font-light">
                          {new Date(booking.bookingDate).toLocaleDateString()}
                        </td>

                        <td className="px-6 py-6 text-[#666666] font-light">
                          {booking.bookingTime}
                        </td>

                        <td className="px-6 py-6 text-[#666666] font-light">
                          {booking.guests} {booking.guests === 1 ? "Person" : "Guests"}
                        </td>

                        <td className="px-8 py-6 text-right">
                          <span
                            className={`inline-block px-3.5 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider border ${getStatusStyle(
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