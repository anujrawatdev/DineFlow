"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/app/Navbar/Navbar";



const About = () => {
  return (
    <div className="relative min-h-screen bg-neutral-300 text-neutral-900 selection:bg-amber-500 selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/DineFlowHomepage.png')] bg-cover bg-center opacity-85" />
        <div className="absolute inset-0  from-black/25 via-transparent to-black/35" />
        
        <div className="relative z-10 text-center max-w-3xl px-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6"
          >
            Redefining <span className="text-amber-400">Fine Dining</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-neutral-300 text-xl md:text-xl font-light leading-relaxed"
          >
            At DineFlow, we believe that booking a table shouldn't just be utility—it should be the seamless beginning of an extraordinary culinary journey.
          </motion.p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-sans font-bold text-amber-800">Our Story</h2>
          <p className="text-neutral-900 leading-relaxed">
            DineFlow was born out of a shared passion for luxury gastronomy and cutting-edge technology. We observed how tedious the booking process can be for premier restaurants, often ruining the excitement of the upcoming meal.
          </p>
          <p className="text-neutral-900 leading-relaxed">
            We curated an exclusive ecosystem connecting discerning diners with top-tier restaurants. Our vision is to empower food lovers to discover, select, and book the absolute best seats in the culinary landscape effortlessly.
          </p>
        </motion.div>

        {/* Dynamic Interactive Stats Cards */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="p-8 rounded-2xl bg-black/5 border border-black/10 backdrop-blur-md hover:border-amber-400/40 transition-all duration-300">
            <h3 className="text-4xl font-extrabold text-amber-800 mb-2">150+</h3>
            <p className="text-neutral-900 text-sm">Michelin & Luxury Partners</p>
          </div>
          <div className="p-8 rounded-2xl bg-black/5 border border-black/10 backdrop-blur-md hover:border-amber-400/40 transition-all duration-300">
            <h3 className="text-4xl font-extrabold text-amber-800 mb-2">50k+</h3>
            <p className="text-neutral-900 text-sm">Exquisite Meals Booked</p>
          </div>
          <div className="p-8 rounded-2xl bg-black/5 border border-black/10 backdrop-blur-md hover:border-amber-400/40 transition-all duration-300">
            <h3 className="text-4xl font-extrabold text-amber-800 mb-2">99.9%</h3>
            <p className="text-neutral-900 text-sm">Reservation Match Rate</p>
          </div>
          <div className="p-8 rounded-2xl bg-black/5 border border-black/10 backdrop-blur-md hover:border-amber-400/40 transition-all duration-300">
            <h3 className="text-4xl font-extrabold text-amber-800 mb-2">4.9/5</h3>
            <p className="text-neutral-900 text-sm">Diner Satisfaction Rating</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;