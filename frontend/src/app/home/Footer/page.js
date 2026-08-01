"use client";
import React from "react";
import Link from "next/link";
import {
  Globe,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-stone-300 font-sans border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="font-serif text-2xl tracking-widest text-stone-100 uppercase block">
              Dine<span className="italic font-light">Flow</span>
            </Link>
            <p className="text-xs text-stone-400 font-light leading-relaxed max-w-xs">
              Reserve your table in seconds and enjoy unforgettable dining experiences at premier handpicked establishments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-stone-100 font-medium mb-4 tracking-[0.2em] text-xs uppercase">Navigation</h3>
            <ul className="space-y-2.5 text-xs font-light text-stone-400">
              <li><Link href="/home" className="hover:text-stone-100 transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-stone-100 transition-colors">About Us</Link></li>
              <li><Link href="/restaurants" className="hover:text-stone-100 transition-colors">Explore Restaurants</Link></li>
              <li><Link href="#contact" className="hover:text-stone-100 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Help & Policies */}
          <div>
            <h3 className="text-stone-100 font-medium mb-4 tracking-[0.2em] text-xs uppercase">Support</h3>
            <ul className="space-y-2.5 text-xs font-light text-stone-400">
              <li><Link href="#" className="hover:text-stone-100 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-stone-100 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-stone-100 transition-colors">Cancellation Policy</Link></li>
              <li><Link href="#" className="hover:text-stone-100 transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Newsletter Call */}
         {/* Social Media Presence */}
<div>
  <h3 className="text-stone-100 font-medium mb-4 tracking-[0.2em] text-xs uppercase">
    Follow DineFlow
  </h3>

  <p className="text-xs text-stone-400 font-light mb-5 leading-relaxed">
    Discover new restaurants, curated dining experiences, and premium hospitality inspiration.
  </p>

  <div className="flex items-center gap-3">
    <a
      href="#"
      className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center text-stone-300 hover:text-white hover:border-stone-500 transition"
      aria-label="Instagram"
    >
      <MapPin/>
    </a>

<a
      href="#"
      className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center text-stone-300 hover:text-white hover:border-stone-500 transition"
      aria-label="Instagram"
    >
      <Mail size={18}/>
    </a>
    <a
      href="#"
      className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center text-stone-300 hover:text-white hover:border-stone-500 transition"
      aria-label="Instagram"
    >
      <Phone size={18}/>
    </a>
    <a
      href="#"
      className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center text-stone-300 hover:text-white hover:border-stone-500 transition"
      aria-label="Instagram"
    >
      <Globe size={18}/>
    </a>
    
  </div>

  <p className="text-[11px] text-stone-500 mt-4 uppercase tracking-wider">
    @dineflow
  </p>
</div>

        </div>

        <hr className="border-stone-800 my-12" />

        <div className="flex flex-col md:flex-row items-center justify-between text-[11px] uppercase tracking-wider text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} DineFlow. All rights reserved.</p>
          <p>Designed for Fine Dining Enthusiasts.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;