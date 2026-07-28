// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";


// const Contact = () => {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Thank you ${form.name}, we will connect with you soon.`);
//   };

//   return (
//     <div id="contact" className="relative min-h-screen bg-neutral-300 text-neutral-350">
    

//       <div className="relative max-w-7xl mx-auto px-6 py-24 z-10">
        
//         {/* Glow Effects */}
//         <div className="absolute top-40 left-10 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
//         <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/25 rounded-full blur-3xl pointer-events-none" />

//         <div className="text-center max-w-2xl mx-auto mb-16">
//           <motion.h1 
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className=" text-neutral-900 text-4xl md:text-5xl font-bold tracking-tight mb-4"
//           >
//             Get In <span className="text-amber-800">Touch</span>
//           </motion.h1>
//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-neutral-800"
//           >
//             Have a special booking request or partnership inquiry? Reach out to our concierge service.
//           </motion.p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
//           {/* Info Side */}
//           <motion.div 
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="space-y-8"
//           >
//             <div>
//               <h2 className="text-4xl font-bold text-amber-800 mb-6">Concierge Office</h2>
//               <p className="text-neutral-900 leading-relaxed mb-6">
//                 Our support and partnership desks are available to accommodate custom private dinners, corporate bookings, and elite restaurant integrations.
//               </p>
//             </div>

//             <div className="space-y-6 text-neutral-300">
//               <div className="flex items-start gap-4">
//                 <span className="text-amber-400 text-lg mt-1">📍</span>
//                 <div >
//                   <p className="font-semibold text-black">Headquarters</p>
//                   <p className="text-sm text-neutral-800">Suite 400, Luxury Mile, New Delhi, India</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <span className="text-amber-400 text-lg mt-1">📞</span>
//                 <div>
//                   <p className="font-semibold text-black">Direct Concierge</p>
//                   <p className="text-sm text-neutral-800">+91 98765 43210</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <span className="text-amber-400 text-lg mt-1">✉️</span>
//                 <div>
//                   <p className="font-semibold text-black">Inquiries</p>
//                   <p className="text-sm text-neutral-800">concierge@dineflow.com</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//           <div className="flex gap-5 justify-center items-center flex-col h-[45vh] w-[35vw] rounded-2xl bg-cover">
//             <h3 className=" text-neutral-900 flex flex-col justify-center font-bold font-serif text-5xl">Want to be our<span className="ml-20 text-amber-800">Partner</span></h3>
//         <a href="/signup"><button href="/signup" className=" text-xl font-bold font-sans text-shadow-lg px-4 py-3 h-[50px] w-[200px] rounded-2xl bg-amber-800 hover:bg-neutral-200 hover:border-1 hover:border-amber-800 hover:text-amber-800" >Sign Up</button></a>  
//          <a href="/login"><button  className=" text-xl font-bold font-sans text-shadow-lg py-3 px-5 h-[50px] w-[200px] rounded-2xl bg-amber-800 hover:border-1 hover:border-amber-800 hover:bg-neutral-200 hover:text-amber-800" >Login</button></a> 
// </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div id="contact" className="relative bg-[#1A1A1A] text-stone-100 py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-stone-400 block mb-3 font-medium">
            Personalized Concierge
          </span>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-normal tracking-tight mb-4 text-stone-100"
          >
            Get In <span className="italic">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-stone-400 font-light text-sm md:text-base"
          >
            Have a special booking request or partnership inquiry? Reach out to our direct concierge service.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-3xl font-serif font-normal text-stone-100 mb-4">Concierge Office</h2>
              <p className="text-stone-400 leading-relaxed font-light text-sm md:text-base">
                Our support and partnership desks are available to accommodate custom private dinners, corporate bookings, and elite restaurant integrations.
              </p>
            </div>

            <div className="space-y-6 text-stone-300 border-t border-stone-800 pt-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-stone-400 mt-1 shrink-0" size={20} />
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1">Headquarters</p>
                  <p className="text-sm font-light text-stone-300">Suite 400, Luxury Mile, New Delhi, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-stone-400 mt-1 shrink-0" size={20} />
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1">Direct Concierge</p>
                  <p className="text-sm font-light text-stone-300">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-stone-400 mt-1 shrink-0" size={20} />
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1">Inquiries</p>
                  <p className="text-sm font-light text-stone-300">concierge@dineflow.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Partner Action Box */}
          <div className="rounded-3xl border border-stone-800 bg-stone-900/60 p-10 md:p-14 text-center flex flex-col justify-center items-center space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-stone-400 font-semibold">Join Our Ecosystem</span>
            <h3 className="font-serif text-3xl md:text-4xl text-stone-100 font-normal">
              Want to be our <span className="italic block mt-1">Partner?</span>
            </h3>
            <p className="text-stone-400 text-xs font-light max-w-xs leading-relaxed">
              Unlock powerful table management tools and connect with high-value diners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4">
              <Link href="/signup" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto min-w-[160px] bg-stone-100 hover:bg-white text-stone-900 rounded-full py-3.5 px-6 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300">
                  Sign Up
                </button>
              </Link>
              <Link href="/login" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto min-w-[160px] border border-stone-700 hover:border-stone-500 text-stone-300 rounded-full py-3.5 px-6 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;