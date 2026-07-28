// "use client";
// import React from "react";
// import { useEffect, useState, useRef } from "react";
// import Link from "next/link";
// import Navbar from "../Navbar/Navbar";
// import RestaurantsCard from "../cards/RestaurantsCard";
// import { motion, useScroll } from "framer-motion";

// import AboutUs from "./AboutUs/About.js";
// import ContactUs from "./ContactUs/page";
// import Footer from "./Footer/page";
// import RegisterAsOwner from "./RegisterAsOwner/page";

// const Page = () => {
//   const [allRestaurants, setAllRestaurants] = useState([]);


//   useEffect(() => {
//     const fetchAllRestaurants = async () => {
//       const response = await fetch("http://localhost:5000/restaurants", {
//         method: "GET",
//         credentials: "include",
//       });

//       const data = await response.json();
//       setAllRestaurants(data);
//     };

//     fetchAllRestaurants();
//   }, []);

//   return (
//     <div className="relative min-h-screen bg-neutral-900 text-white">

//       <div>
//         <Navbar />
//       </div>
  
//       <div className="relative h-[100vh] w-full overflow-hidden">
//         {/* Background Image */}
//         <div className="absolute inset-0 bg-[url('/images/DineFlowHomepage.png')] bg-cover bg-center" />

//         {/* Black Fade Overlay */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.25)_20%,rgba(0,0,0,0.15)_100%)]" />

//         {/* Hero Content */}
//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
//           <h1 className="text-6xl font-bold drop-shadow-[0_6px_20px_rgba(0,0,0,0.9)] text-center">
//             Discover the best{" "}
//             <span className="text-shadow-2xl text-amber-400">Restaurant</span>{" "}
//             Near You
//           </h1>
//           <p className="drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)] mt-4 text-center max-w-2xl">
//             Reserve your table in seconds and enjoy unforgettable dining
//             experiences at top-rated restaurants.
//           </p>
//           <Link href="/restaurants">
//   <button className="mt-8 font-bold rounded-full border border-amber-400/40 hover:bg-white/10 backdrop-blur-md px-6 py-3 text-white tracking-wide transition-all duration-300 bg-amber-900 hover:text-white hover:scale-105">
//     Explore Restaurants
//   </button>
// </Link>
//         </div>
//       </div>


//       {/* --- CONTENT AREA --- */}
//       <div className="relative z-10 bg-neutral-300">
        
//         {/* FEATURED RESTAURANTS */}
//         <section className="max-w-7xl mx-auto px-6 py-20">
//           <h2 className="text-4xl font-sans decoration-amber-800 font-bold mb-10 text-amber-800 text-center md:text-left">
//             Featured Restaurants
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {allRestaurants.slice(0, 6).map((restaurant, index) => (
//               <motion.div
//                 key={restaurant._id}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
//               >
//                 <RestaurantsCard restaurant={restaurant} />
//               </motion.div>
//             ))}
//           </div>

//           <div className="flex justify-center mt-12">
//             <Link href="/restaurants">
//               <button className="bg-amber-800 hover:bg-amber-600 text-white font-semibold rounded-2xl px-6 py-2.5 transition-all duration-300">
//                 View All Restaurants →
//               </button>
//             </Link>
//           </div>
//         </section>

//         {/* ABOUT US SECTION */}
//         <div className="bg-[#141414] border-t border-b border-white/5">
//           <AboutUs />
//         </div>

//         {/* CONTACT US SECTION */}
//         <div className="bg-[#0d0d0d]">
//           <ContactUs />
//         </div>
//         <div>
//           <RegisterAsOwner/>
//         </div>
//         {/* FOOTER */}
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Page;

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../Navbar/Navbar";
import RestaurantsCard from "../cards/RestaurantsCard";
import { motion } from "framer-motion";
import AboutUs from "./AboutUs/About.js";
import ContactUs from "./ContactUs/page";
import Footer from "./Footer/page";
import RegisterAsOwner from "./RegisterAsOwner/page";

const Page = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    const fetchAllRestaurants = async () => {
      try {
        const response = await fetch("http://localhost:5000/restaurants", {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        setAllRestaurants(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAllRestaurants();
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-stone-900 font-sans selection:bg-stone-300">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-[12vh] min-h-screen px-6 md:px-12 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-12">
          
          {/* Left Text Content */}
          <div className="lg:col-span-5 flex flex-col items-start z-10 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-stone-500 font-semibold">
              Premium Dining Experience
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 leading-[1.1] font-normal tracking-tight">
              Curating Moments, <br />
              <span className="italic">Defining Taste.</span>
            </h1>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed max-w-md font-light">
              Reserve your table seamlessly at the finest dining establishments. Fine cuisine tailored for your most exceptional occasions.
            </p>
            <div className="pt-4">
              <Link href="/restaurants">
                <button className="bg-white hover:bg-stone-900 hover:text-white text-stone-900 border border-stone-300 rounded-full px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-3">
                  <span>Explore Restaurants</span>
                  <span>→</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Right Hero Image (Clean, Architectural Display) */}
          <div className="lg:col-span-7 relative h-[500px] md:h-[620px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{ backgroundImage: "url('/images/DineFlowHomepage.png')" }}
            />
            {/* Soft Warm Overlay */}
            <div className="absolute inset-0 bg-stone-900/10" />
            
            {/* Subtle Floating Card Overlay like in image */}
            <div className="absolute bottom-6 left-6 right-6 md:right-auto  backdrop-blur-md p-6 rounded-2xl max-w-md border border-white/40 shadow-lg">
              <span className="text-[10px] uppercase tracking-[0.25em] text-stone-300 block mb-1">
                Featured Selection
              </span>
              <p className="font-serif text-lg text-stone-200">
                Exclusive culinary spaces designed to inspire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED RESTAURANTS */}
      <section className="bg-[#EFECE6] py-24 px-6 md:px-16 border-t border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-stone-500 font-semibold block mb-2">
                Handpicked Dining
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900 font-normal">
                Featured Restaurants
              </h2>
            </div>
            <Link href="/restaurants">
              <button className="text-xs uppercase tracking-[0.2em] text-stone-800 font-medium border-b border-stone-800 pb-1 hover:text-stone-500 hover:border-stone-500 transition-all">
                View All Places →
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {allRestaurants.slice(0, 6).map((restaurant, index) => (
              <motion.div
                key={restaurant._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                <RestaurantsCard restaurant={restaurant} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <div id="about" className="bg-[#f8f5f0] py-12">
        <AboutUs />
      </div>

      {/* OWNER REGISTER SECTION */}
      <div className="bg-[#EFECE6] border-t border-b border-stone-200">
        <RegisterAsOwner />
      </div>

      {/* CONTACT US SECTION */}
      <div id="contact" className="bg-[#1A1A1A] text-stone-100 py-16">
        <ContactUs />
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Page;