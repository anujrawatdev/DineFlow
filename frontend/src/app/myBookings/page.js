"use client";

import React,{useState,useEffect} from "react";
import Navbar from "../Navbar/Navbar";

const MyBookings = () => {

  const [myBookings, setMyBookings] = useState([]);
  const [loading, setLoading] = useState(true);


  const getStatusColor = (status) => {
    switch(status){
      case "pending":
        return "bg-yellow-100 text-yellow-700";

      case "confirmed":
        return "bg-green-100 text-green-700";

      case "cancelled":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
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

        console.log(data);

        if(response.ok){
          console.log(data)
          setMyBookings(data);
        }

      } catch(error){
        console.log(error);
      }
      finally{
        setLoading(false);
      }
    };

    fetchBookings();

  }, []);
  return (
    <>
    <Navbar/>
    <div className=" pt-32 min-h-screen bg-gray-100 py-10 px-5">
      <div className=" max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-8 py-6 border-b">
          <h1 className="text-3xl font-bold text-gray-800">My Bookings</h1>
          <p className="text-gray-500 mt-1">
            View all your restaurant reservations.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-amber-950 text-white">
              <tr>
                <th className="px-6 py-4 text-left">Restaurant</th>
                <th className="px-6 py-4 text-left">Date</th>
                <th className="px-6 py-4 text-left">Time</th>
                <th className="px-6 py-4 text-left">Guests</th>
                <th className="px-6 py-4 text-right">Status</th>
              </tr>
            </thead>

            <tbody>
              {
              
              myBookings.map((booking) => (
                <tr
                  key={booking._id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-5 font-semibold text-gray-800">
                    {booking.restaurant?.name|| "Restaurant not found"}
                  </td>

                  <td className="px-6 py-5 text-gray-600">{new Date(booking.bookingDate).toLocaleDateString()}</td>

                  <td className="px-6 py-5 text-gray-600">{booking.bookingTime}</td>

                  <td className="px-6 py-5 text-gray-600">{booking.guests}</td>

                  <td className="px-6 py-5 text-right">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(
                        booking.status,
                      )}`}
                    >
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

export default MyBookings;
