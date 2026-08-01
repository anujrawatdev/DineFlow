

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