"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";


const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${form.name}, we will connect with you soon.`);
  };

  return (
    <div id="contact" className="relative min-h-screen bg-neutral-300 text-neutral-350">
    

      <div className="relative max-w-7xl mx-auto px-6 py-24 z-10">
        
        {/* Glow Effects */}
        <div className="absolute top-40 left-10 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/25 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className=" text-neutral-900 text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Get In <span className="text-amber-800">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-neutral-800"
          >
            Have a special booking request or partnership inquiry? Reach out to our concierge service.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold text-amber-800 mb-6">Concierge Office</h2>
              <p className="text-neutral-900 leading-relaxed mb-6">
                Our support and partnership desks are available to accommodate custom private dinners, corporate bookings, and elite restaurant integrations.
              </p>
            </div>

            <div className="space-y-6 text-neutral-300">
              <div className="flex items-start gap-4">
                <span className="text-amber-400 text-lg mt-1">📍</span>
                <div >
                  <p className="font-semibold text-black">Headquarters</p>
                  <p className="text-sm text-neutral-800">Suite 400, Luxury Mile, New Delhi, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-amber-400 text-lg mt-1">📞</span>
                <div>
                  <p className="font-semibold text-black">Direct Concierge</p>
                  <p className="text-sm text-neutral-800">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-amber-400 text-lg mt-1">✉️</span>
                <div>
                  <p className="font-semibold text-black">Inquiries</p>
                  <p className="text-sm text-neutral-800">concierge@dineflow.com</p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="flex gap-5 justify-center items-center flex-col h-[45vh] w-[35vw] rounded-2xl bg-cover">
            <h3 className=" text-neutral-900 flex flex-col justify-center font-bold font-serif text-5xl">Want to be our<span className="ml-20 text-amber-800">Partner</span></h3>
        <a href="/signup"><button href="/signup" className=" text-xl font-bold font-sans text-shadow-lg px-4 py-3 h-[50px] w-[200px] rounded-2xl bg-amber-800 hover:bg-neutral-200 hover:border-1 hover:border-amber-800 hover:text-amber-800" >Sign Up</button></a>  
         <a href="/login"><button  className=" text-xl font-bold font-sans text-shadow-lg py-3 px-5 h-[50px] w-[200px] rounded-2xl bg-amber-800 hover:border-1 hover:border-amber-800 hover:bg-neutral-200 hover:text-amber-800" >Login</button></a> 
</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;