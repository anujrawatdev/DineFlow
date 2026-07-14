"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative border-t border-black/10 bg-neutral-700 text-neutral-300 overflow-hidden">
      {/* Premium subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-700/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold tracking-wider text-white">
              Dine<span className="text-amber-400">Flow</span>
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Reserve your table in seconds and enjoy unforgettable dining experiences at top-rated premium restaurants.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide text-sm uppercase">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/home" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link href="/restaurants" className="hover:text-amber-400 transition-colors">Explore Restaurants</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Help & Policies */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide text-sm uppercase">Support</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="#" className="hover:text-amber-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-amber-400 transition-colors">Cancellation Policy</Link></li>
              <li><Link href="#" className="hover:text-amber-400 transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Newsletter / Booking Call */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide text-sm uppercase">Subscribe</h3>
            <p className="text-sm text-neutral-400 mb-4">Get exclusive updates on new premium spots and curated culinary events.</p>
            <form className="flex">
              <button className="bg-amber-700 hover:bg-amber-600 px-8 py-2 rounded-xl transition-colors text-white text-sm font-semibold">
                Join
              </button>
            </form>
          </div>

        </div>

        <hr className="border-white/15 my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-neutral-300">
          <p>© {new Date().getFullYear()} DineFlow. All rights reserved.</p>
          <p>Crafted for Fine Dining Enthusiasts.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;