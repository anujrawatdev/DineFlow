// "use client";
// import React from "react";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="relative border-t border-black/10 bg-neutral-700 text-neutral-300 overflow-hidden">
//       {/* Premium subtle background glow */}
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-700/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
//           {/* Brand Col */}
//           <div className="space-y-4">
//             <Link href="/" className="text-2xl font-bold tracking-wider text-white">
//               Dine<span className="text-amber-400">Flow</span>
//             </Link>
//             <p className="text-sm text-neutral-400 leading-relaxed">
//               Reserve your table in seconds and enjoy unforgettable dining experiences at top-rated premium restaurants.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-white font-semibold mb-4 tracking-wide text-sm uppercase">Quick Links</h3>
//             <ul className="space-y-2.5 text-sm">
//               <li><Link href="/home" className="hover:text-amber-400 transition-colors">Home</Link></li>
//               <li><Link href="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
//               <li><Link href="/restaurants" className="hover:text-amber-400 transition-colors">Explore Restaurants</Link></li>
//               <li><Link href="/contact" className="hover:text-amber-400 transition-colors">Contact Us</Link></li>
//             </ul>
//           </div>

//           {/* Help & Policies */}
//           <div>
//             <h3 className="text-white font-semibold mb-4 tracking-wide text-sm uppercase">Support</h3>
//             <ul className="space-y-2.5 text-sm">
//               <li><Link href="#" className="hover:text-amber-400 transition-colors">Terms of Service</Link></li>
//               <li><Link href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</Link></li>
//               <li><Link href="#" className="hover:text-amber-400 transition-colors">Cancellation Policy</Link></li>
//               <li><Link href="#" className="hover:text-amber-400 transition-colors">FAQs</Link></li>
//             </ul>
//           </div>

//           {/* Newsletter / Booking Call */}
//           <div>
//             <h3 className="text-white font-semibold mb-4 tracking-wide text-sm uppercase">Subscribe</h3>
//             <p className="text-sm text-neutral-400 mb-4">Get exclusive updates on new premium spots and curated culinary events.</p>
//             <form className="flex">
//               <button className="bg-amber-700 hover:bg-amber-600 px-8 py-2 rounded-xl transition-colors text-white text-sm font-semibold">
//                 Join
//               </button>
//             </form>
//           </div>

//         </div>

//         <hr className="border-white/15 my-8" />

//         <div className="flex flex-col md:flex-row items-center justify-between text-xs text-neutral-300">
//           <p>© {new Date().getFullYear()} DineFlow. All rights reserved.</p>
//           <p>Crafted for Fine Dining Enthusiasts.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";
import React from "react";
import Link from "next/link";

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
          <div>
            <h3 className="text-stone-100 font-medium mb-4 tracking-[0.2em] text-xs uppercase">Stay Updated</h3>
            <p className="text-xs text-stone-400 font-light mb-4 leading-relaxed">
              Get exclusive updates on new premium spots and curated culinary events.
            </p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-stone-900 border border-stone-800 rounded-full px-4 py-2.5 text-xs text-stone-200 placeholder-stone-600 focus:outline-none focus:border-stone-600"
              />
              <button className="bg-stone-100 hover:bg-white text-stone-900 px-6 py-2.5 rounded-full transition-colors text-xs uppercase tracking-wider font-medium">
                Subscribe
              </button>
            </form>
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