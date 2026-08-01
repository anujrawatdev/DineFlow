// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import Navbar from "../Navbar/Navbar";
// import RestaurantsCard from "../cards/RestaurantsCard";
// import { motion } from "framer-motion";
// import AboutUs from "./AboutUs/About.js";
// import ContactUs from "./ContactUs/page";
// import Footer from "./Footer/page";
// import RegisterAsOwner from "./RegisterAsOwner/page";

// const Page = () => {
//   const [allRestaurants, setAllRestaurants] = useState([]);

//   useEffect(() => {
//     const fetchAllRestaurants = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/restaurants", {
//           method: "GET",
//           credentials: "include",
//         });
//         const data = await response.json();
//         setAllRestaurants(data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchAllRestaurants();
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#f8f5f0] text-stone-900 font-sans selection:bg-stone-300">
//       <Navbar />

//       {/* HERO SECTION - Fixed vertical spacing and gap */}
//       <section className="relative pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 md:px-10 lg:px-12 flex flex-col justify-center">
//         <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center py-4 lg:py-6">
          
//           {/* Left Text Content */}
//           <div className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left z-10 space-y-4 sm:space-y-6">
//             <span className="text-xs uppercase tracking-[0.3em] text-stone-500 font-semibold">
//               Premium Dining Experience
//             </span>
//             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-serif text-stone-900 leading-[1.08] font-normal tracking-tight">
//               Curating Moments, <br />
//               <span className="italic">Defining Taste.</span>
//             </h1>
//             <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-sm sm:max-w-md font-light">
//               Reserve your table seamlessly at the finest dining establishments. Fine cuisine tailored for your most exceptional occasions.
//             </p>
//             <div className="pt-2 sm:pt-4">
//               <Link href="/restaurants">
//                 <button className="w-full sm:w-auto justify-center bg-white hover:bg-stone-900 hover:text-white text-stone-900 border border-stone-300 rounded-full px-6 sm:px-8 py-3.5 sm:py-4 text-[11px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-3">
//                   <span>Explore Restaurants</span>
//                   <span>→</span>
//                 </button>
//               </Link>
//             </div>
//           </div>

//           {/* Right Hero Image */}
//           <div className="lg:col-span-7 relative h-[360px] sm:h-[420px] md:h-[480px] lg:h-[500px] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl">
//             <div 
//               className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
//               style={{ backgroundImage: "url('/images/DineFlowHomepage.png')" }}
//             />
            
//             {/* Subtle Floating Card Overlay */}
//             <div className="absolute bottom-6 left-6 right-6 md:right-auto backdrop-blur-md bg-black/20 p-5 sm:p-6 rounded-2xl max-w-md border border-white/30 shadow-lg">
//               <span className="text-[10px] uppercase tracking-[0.25em] text-stone-300 block mb-1">
//                 Featured Selection
//               </span>
//               <p className="font-serif text-sm sm:text-base md:text-lg text-stone-100 leading-snug">
//                 Exclusive culinary spaces designed to inspire.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FEATURED RESTAURANTS */}
//       <section className="bg-[#EFECE6] py-14 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-b border-stone-200/80">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-10 md:mb-14 lg:mb-16 gap-4">
//             <div>
//               <span className="text-xs uppercase tracking-[0.25em] text-stone-500 font-semibold block mb-2">
//                 Handpicked Dining
//               </span>
//               <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 font-normal leading-tight">
//                 Featured Restaurants
//               </h2>
//             </div>
//             <Link href="/restaurants">
//               <button className="text-xs uppercase tracking-[0.2em] text-stone-800 font-medium border-b border-stone-800 pb-1 hover:text-stone-500 hover:border-stone-500 transition-all">
//                 View All Places →
//               </button>
//             </Link>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 sm:gap-3 md:gap-5">
//             {allRestaurants.slice(0, 6).map((restaurant, index) => (
//               <motion.div
//                 key={restaurant._id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
//               >
//                 <RestaurantsCard restaurant={restaurant} />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ABOUT US SECTION */}
//       <div id="about" className="bg-[#f8f5f0] py-10 sm:py-12 md:py-16">
//         <AboutUs />
//       </div>

//       {/* OWNER REGISTER SECTION */}
//       <div className="bg-[#EFECE6] border-t border-b border-stone-200">
//         <RegisterAsOwner />
//       </div>

//       {/* CONTACT US SECTION */}
//       <div id="contact" className="bg-[#1A1A1A] text-stone-100 py-12 sm:py-14 md:py-16">
//         <ContactUs />
//       </div>

//       {/* FOOTER */}
//       <Footer />
//     </div>
//   );
// };

// export default Page;

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/app/Navbar/Navbar";
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

      {/* HERO SECTION - Optimized for iPad Pro & Large Screen Layouts */}
      <section className="relative pt-20 sm:pt-24 lg:pt-24 xl:pt-28 pb-8 sm:pb-12 lg:pb-12 px-4 sm:px-6 md:px-10 lg:px-12 flex flex-col justify-start">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center py-2 lg:py-4">
          
          {/* Left Text Content */}
          <div className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left z-10 space-y-4 sm:space-y-5 lg:space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-stone-500 font-semibold">
              Premium Dining Experience
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-serif text-stone-900 leading-[1.08] font-normal tracking-tight">
              Curating Moments, <br />
              <span className="italic">Defining Taste.</span>
            </h1>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-sm sm:max-w-md font-light">
              Reserve your table seamlessly at the finest dining establishments. Fine cuisine tailored for your most exceptional occasions.
            </p>
            <div className="pt-2">
              <Link href="/restaurants">
                <button className="w-full sm:w-auto justify-center bg-white hover:bg-stone-900 hover:text-white text-stone-900 border border-stone-300 rounded-full px-6 sm:px-8 py-3.5 sm:py-4 text-[11px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-3">
                  <span>Explore Restaurants</span>
                  <span>→</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="lg:col-span-7 relative h-[340px] sm:h-[420px] md:h-[480px] lg:h-[460px] xl:h-[520px] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{ backgroundImage: "url('/images/DineFlowHomepage.png')" }}
            />
            
            {/* Subtle Floating Card Overlay */}
            <div className="absolute bottom-5 left-5 right-5 md:right-auto backdrop-blur-md bg-black/25 p-4 sm:p-6 rounded-2xl max-w-md border border-white/30 shadow-lg">
              <span className="text-[10px] uppercase tracking-[0.25em] text-stone-300 block mb-1">
                Featured Selection
              </span>
              <p className="font-serif text-sm sm:text-base md:text-lg text-stone-100 leading-snug">
                Exclusive culinary spaces designed to inspire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED RESTAURANTS */}
      <section className="bg-[#EFECE6] py-12 sm:py-16 md:py-20 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-10 md:mb-14 lg:mb-14 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-stone-500 font-semibold block mb-2">
                Handpicked Dining
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 font-normal leading-tight">
                Featured Restaurants
              </h2>
            </div>
            <Link href="/restaurants">
              <button className="text-xs uppercase tracking-[0.2em] text-stone-800 font-medium border-b border-stone-800 pb-1 hover:text-stone-500 hover:border-stone-500 transition-all">
                View All Places →
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
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
      <div id="about" className="bg-[#f8f5f0] py-10 sm:py-12 md:py-16">
        <AboutUs />
      </div>

      {/* OWNER REGISTER SECTION */}
      <div className="bg-[#EFECE6] border-t border-b border-stone-200">
        <RegisterAsOwner />
      </div>

      {/* CONTACT US SECTION */}
      <div id="contact" className="bg-[#1A1A1A] text-stone-100 py-12 sm:py-14 md:py-16">
        <ContactUs />
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Page;