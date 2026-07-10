// import React from 'react'
// import Navbar from '../Navbar/Navbar.js';

// const page = () => {
//   return (
//     <>
//  <div className=" absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black min-h-screen bg-[url('/images/DineFlowHomepage.png')] bg-cover bg-center " >
//     <Navbar/>
// </div>
//     </>
//   )
// }

// export default page

import React from "react";
import Navbar from "../Navbar/Navbar";

const page = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/DineFlowHomepage.png')] bg-cover bg-center" />

      {/* Black Fade Overlay */}
      <div className=" absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.2)_20%,rgba(0,0,0,0.85)_100%)]"/>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
          <section className="flex flex-col items-center justify-center min-h-[90vh] text-white">
    <h1 className=" text-6xl font-bold drop-shadow-[0_6px_20px_rgba(0,0,0,0.9)]">
      Discover the Best Food Near You
    </h1>
    <p className="drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)]">Reserve your table in seconds and enjoy unforgettable dining experiences at top-rated restaurants.</p>
    <button className="mt-5 font-bold rounded-full border border-amber-400/40 bg-white/10 backdrop-blur-md px-4 py-2 text-white tracking-wide transition-all duration-300 hover:bg-amber-900 hover:text-black hover:scale-102">
  Explore Restaurants
</button>
  </section>
      </div>
    </div>
  );
};

export default page;
