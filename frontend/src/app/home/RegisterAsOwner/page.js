// "use client";

// import { Crown, Store, ShieldCheck, ArrowRight } from "lucide-react";
// import Link from "next/link";

// export default function RegisterAsOwner() {
//   return (
//     <section className="flex items-center justify-center py-20 px-6">
//       <div className="relative max-w-5xl w-full overflow-hidden rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 shadow-2xl">

//         {/* Glow */}
//         <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-yellow-500/20 blur-3xl"></div>
//         <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl"></div>

//         <div className="relative grid md:grid-cols-2 gap-10 p-10 md:p-14">

//           {/* Left */}
//           <div className="flex flex-col justify-center">
//             <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-yellow-400">
//               <Crown size={18} />
//               Become a Restaurant Owner
//             </div>

//             <h2 className="text-4xl font-bold text-white leading-tight">
//               Grow your restaurant with{" "}
//               <span className="text-yellow-400">DineFlow</span>
//             </h2>

//             <p className="mt-5 text-zinc-400 leading-7">
//               Join hundreds of restaurant owners managing bookings, customers,
//               and reservations through one powerful platform.
//             </p>

//             <div className="mt-8">
//               <Link href="/owner/register">
//               <button className="group flex items-center gap-2 rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400">
//                 Register as Owner
//                 <ArrowRight
//                   size={18}
//                   className="transition group-hover:translate-x-1"
//                 />
//               </button>
//               </Link>
//             </div>
//           </div>

//           {/* Right */}
//           <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8">

//             <h3 className="text-xl font-semibold text-white mb-6">
//               Why become an Owner?
//             </h3>

//             <div className="space-y-6">

//               <div className="flex gap-4">
//                 <div className="rounded-xl bg-yellow-500/10 p-3">
//                   <Store className="text-yellow-400" />
//                 </div>
//                 <div>
//                   <h4 className="text-white font-semibold">
//                     Manage Restaurants
//                   </h4>
//                   <p className="text-sm text-zinc-400">
//                     Create and manage your restaurant listings effortlessly.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <div className="rounded-xl bg-green-500/10 p-3">
//                   <ShieldCheck className="text-green-400" />
//                 </div>
//                 <div>
//                   <h4 className="text-white font-semibold">
//                     Verified by Admin
//                   </h4>
//                   <p className="text-sm text-zinc-400">
//                     Every owner account is reviewed before activation for trust
//                     and security.
//                   </p>
//                 </div>
//               </div>

//               <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/10 p-5">
//                 <p className="text-yellow-300 text-sm">
//                   ⭐ After submitting your request, our admin team will review
//                   your application. Once approved, you'll unlock restaurant
//                   management features.
//                 </p>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { Crown, Store, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RegisterAsOwner() {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#EFECE6] font-sans">
      <div className="max-w-6xl mx-auto rounded-3xl border border-stone-300/80 bg-[#f8f5f0] shadow-sm overflow-hidden">
        <div className="grid md:grid-cols-12 gap-8 p-10 md:p-16 items-center">

          {/* Left Column */}
          <div className="md:col-span-7 flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-[#EFECE6] px-4 py-1.5 text-xs tracking-wider uppercase font-medium text-stone-700">
              <Crown size={14} className="text-yellow-600" />
              <span>For Restaurant Partners</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 font-normal leading-[1.15]">
              Grow your venue with <br />
              <span className="italic">DineFlow</span>
            </h2>

            <p className="text-stone-600 font-light text-sm md:text-base leading-relaxed max-w-md">
              Join luxury dining establishments managing bookings, guest preferences, and exclusive reservations through one elevated platform.
            </p>

            <div className="pt-2">
              <Link href="/owner/register">
                <button className="group flex items-center gap-3 rounded-full bg-stone-900 px-8 py-4 text-xs tracking-[0.2em] uppercase font-medium text-stone-100 transition-all hover:bg-stone-800 shadow-sm">
                  <span>Register as Owner</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-5 rounded-2xl border border-stone-200 bg-[#EFECE6]/60 p-8 space-y-6">
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#7A6A5C] font-semibold">
              Partner Advantages
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="rounded-full bg-stone-200 p-2.5 shrink-0 text-stone-800">
                  <Store className="text-[#7A6A5C]" size={18} />
                </div>
                <div>
                  <h4 className="text-stone-800 font-medium text-sm">
                    Manage Restaurants
                  </h4>
                  <p className="text-xs text-stone-600 font-light mt-0.5 leading-relaxed">
                    Create and maintain your culinary listings with total layout precision.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="rounded-full bg-stone-200 p-2.5 shrink-0 text-stone-800">
                  <ShieldCheck size={18} className="text-[#7A6A5C]" />
                </div>
                <div>
                  <h4 className="text-stone-800 font-medium text-sm">
                    Verified Exclusivity
                  </h4>
                  <p className="text-xs text-stone-600 font-light mt-0.5 leading-relaxed">
                    Every owner account undergoes review to maintain elite platform standards.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-stone-300/60 bg-white/60 p-4">
                <p className="text-stone-600 text-xs font-light leading-relaxed">
                  ⭐ After submitting your application, our team will review your profile. Once approved, you'll unlock management features.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}