"use client"

import BookingTable from "@/components/admin/BookingTable";
import React, { useEffect ,useState } from "react";

const page = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("http://localhost:5000/admin/bookings", {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.log("error:",error);
      }
    };
    fetchBookings();
  }, []);
  return (
    <div>
      <BookingTable 
      bookings ={bookings}/>
    </div>
  );
};

export default page;
