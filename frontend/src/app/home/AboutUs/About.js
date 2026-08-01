


// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const About = () => {
//   return (
//     <div id="about" className="relative bg-[#f8f5f0] text-stone-900 font-sans selection:bg-stone-300">
//       {/* Hero Section */}
//       <section className="relative h-[50vh] flex flex-col items-center justify-center overflow-hidden px-6">
//         <div 
//           className="absolute inset-0 bg-cover bg-center opacity-90"
//           style={{ backgroundImage: "url('/images/DineFlowHomepage.png')" }} 
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-[#f8f5f0]/20 via-[#f8f5f0]/50 to-[#f8f5f0]" />
        
//         <div className="relative z-10 text-center max-w-3xl px-6">
//           <motion.span 
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-xs uppercase tracking-[0.3em] text-stone-700 font-semibold block mb-3"
//           >
//             The DineFlow Ethos
//           </motion.span>
//           <motion.h1 
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-5xl md:text-6xl font-serif text-stone-900 tracking-tight mb-6 font-normal"
//           >
//             Redefining <span className="italic">Fine Dining</span>
//           </motion.h1>
//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.2 }}
//             className="text-stone-700 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto"
//           >
//             At DineFlow, we believe booking a table shouldn't just be utility—it should be the seamless beginning of an extraordinary culinary journey.
//           </motion.p>
//         </div>
//       </section>

//       {/* Narrative & Stats Section */}
//       <section className="max-w-7xl mx-auto px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
//         <motion.div 
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="space-y-6"
//         >
//           <span className="text-xs uppercase tracking-[0.25em] text-stone-500 font-semibold">About Us</span>
//           <h2 className="text-4xl font-serif text-stone-900 font-normal">Our Story</h2>
//           <p className="text-stone-600 leading-relaxed font-light text-sm md:text-base">
//             DineFlow was born out of a shared passion for luxury gastronomy and cutting-edge technology. We observed how tedious the booking process can be for premier restaurants, often ruining the excitement of the upcoming meal.
//           </p>
//           <p className="text-stone-600 leading-relaxed font-light text-sm md:text-base">
//             We curated an exclusive ecosystem connecting discerning diners with top-tier restaurants. Our vision is to empower food lovers to discover, select, and book the absolute best seats in the culinary landscape effortlessly.
//           </p>
//         </motion.div>

//         {/* Dynamic Interactive Stats Cards */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.98 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="grid grid-cols-2 gap-5"
//         >
//           <div className="p-8 rounded-3xl bg-[#EFECE6] border border-stone-200/80 hover:border-stone-400 transition-all duration-300">
//             <h3 className="text-4xl font-serif text-stone-900 mb-2 font-normal">150+</h3>
//             <p className="text-stone-500 text-xs uppercase tracking-wider font-sans">Michelin & Luxury Partners</p>
//           </div>
//           <div className="p-8 rounded-3xl bg-[#EFECE6] border border-stone-200/80 hover:border-stone-400 transition-all duration-300">
//             <h3 className="text-4xl font-serif text-stone-900 mb-2 font-normal">50k+</h3>
//             <p className="text-stone-500 text-xs uppercase tracking-wider font-sans">Exquisite Meals Booked</p>
//           </div>
//           <div className="p-8 rounded-3xl bg-[#EFECE6] border border-stone-200/80 hover:border-stone-400 transition-all duration-300">
//             <h3 className="text-4xl font-serif text-stone-900 mb-2 font-normal">99.9%</h3>
//             <p className="text-stone-500 text-xs uppercase tracking-wider font-sans">Reservation Match Rate</p>
//           </div>
//           <div className="p-8 rounded-3xl bg-[#EFECE6] border border-stone-200/80 hover:border-stone-400 transition-all duration-300">
//             <h3 className="text-4xl font-serif text-stone-900 mb-2 font-normal">4.9/5</h3>
//             <p className="text-stone-500 text-xs uppercase tracking-wider font-sans">Diner Satisfaction Rating</p>
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default About;

"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="relative bg-[#f8f5f0] text-stone-900 font-sans selection:bg-stone-300 overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative min-h-[42vh] sm:min-h-[48vh] md:min-h-[55vh] flex items-center justify-center overflow-hidden px-4 sm:px-6">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{ backgroundImage: "url('/images/DineFlowHomepage.png')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f5f0]/20 via-[#f8f5f0]/55 to-[#f8f5f0]" />

        <div className="relative z-10 text-center max-w-3xl mx-auto px-2 sm:px-4 py-10 sm:py-14">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.3em] text-stone-700 font-semibold block mb-2 sm:mb-3"
          >
            The DineFlow Ethos
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 tracking-tight leading-tight mb-4 sm:mb-6 font-normal"
          >
            Redefining <span className="italic">Fine Dining</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-stone-700 font-light leading-relaxed max-w-2xl mx-auto px-1"
          >
            At DineFlow, we believe booking a table shouldn't just be utility—it
            should be the seamless beginning of an extraordinary culinary journey.
          </motion.p>
        </div>
      </section>

      {/* Narrative + Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-5 lg:space-y-6"
          >
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] text-stone-500 font-semibold">
              About Us
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-stone-900 font-normal leading-tight">
              Our Story
            </h2>

            <p className="text-stone-600 leading-relaxed font-light text-sm sm:text-base">
              DineFlow was born out of a shared passion for luxury gastronomy
              and cutting-edge technology. We observed how tedious the booking
              process can be for premier restaurants, often ruining the
              excitement of the upcoming meal.
            </p>

            <p className="text-stone-600 leading-relaxed font-light text-sm sm:text-base">
              We curated an exclusive ecosystem connecting discerning diners
              with top-tier restaurants. Our vision is to empower food lovers to
              discover, select, and book the absolute best seats in the culinary
              landscape effortlessly.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5"
          >
            {[
              { value: "150+", label: "Michelin & Luxury Partners" },
              { value: "50k+", label: "Exquisite Meals Booked" },
              { value: "99.9%", label: "Reservation Match Rate" },
              { value: "4.9/5", label: "Diner Satisfaction Rating" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#EFECE6] border border-stone-200/80 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-7 lg:p-8 hover:border-stone-400 hover:shadow-sm transition-all duration-300 min-h-[120px] sm:min-h-[140px] flex flex-col justify-between"
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-stone-900 font-normal leading-none mb-2">
                  {item.value}
                </h3>

                <p className="text-[10px] sm:text-xs uppercase tracking-wide sm:tracking-wider text-stone-500 font-sans leading-snug">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;