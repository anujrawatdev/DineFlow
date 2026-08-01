// "use client";

// import { Crown, Store, ShieldCheck, ArrowRight } from "lucide-react";
// import Link from "next/link";

// export default function RegisterAsOwner() {
//   return (
//     <section className="py-24 px-6 md:px-16 bg-[#EFECE6] font-sans">
//       <div className="max-w-6xl mx-auto rounded-3xl border border-stone-300/80 bg-[#f8f5f0] shadow-sm overflow-hidden">
//         <div className="grid md:grid-cols-12 gap-8 p-10 md:p-16 items-center">

//           {/* Left Column */}
//           <div className="md:col-span-7 flex flex-col items-start space-y-6">
//             <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-[#EFECE6] px-4 py-1.5 text-xs tracking-wider uppercase font-medium text-stone-700">
//               <Crown size={14} className="text-yellow-600" />
//               <span>For Restaurant Partners</span>
//             </div>

//             <h2 className="text-4xl md:text-5xl font-serif text-stone-900 font-normal leading-[1.15]">
//               Grow your venue with <br />
//               <span className="italic">DineFlow</span>
//             </h2>

//             <p className="text-stone-600 font-light text-sm md:text-base leading-relaxed max-w-md">
//               Join luxury dining establishments managing bookings, guest preferences, and exclusive reservations through one elevated platform.
//             </p>

//             <div className="pt-2">
//               <Link href="/owner/register">
//                 <button className="group flex items-center gap-3 rounded-full bg-stone-900 px-8 py-4 text-xs tracking-[0.2em] uppercase font-medium text-stone-100 transition-all hover:bg-stone-800 shadow-sm">
//                   <span>Register as Owner</span>
//                   <ArrowRight
//                     size={16}
//                     className="transition-transform group-hover:translate-x-1"
//                   />
//                 </button>
//               </Link>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="md:col-span-5 rounded-2xl border border-stone-200 bg-[#EFECE6]/60 p-8 space-y-6">
//             <h3 className="text-xs uppercase tracking-[0.25em] text-[#7A6A5C] font-semibold">
//               Partner Advantages
//             </h3>

//             <div className="space-y-6">
//               <div className="flex gap-4 items-start">
//                 <div className="rounded-full bg-stone-200 p-2.5 shrink-0 text-stone-800">
//                   <Store className="text-[#7A6A5C]" size={18} />
//                 </div>
//                 <div>
//                   <h4 className="text-stone-800 font-medium text-sm">
//                     Manage Restaurants
//                   </h4>
//                   <p className="text-xs text-stone-600 font-light mt-0.5 leading-relaxed">
//                     Create and maintain your culinary listings with total layout precision.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-4 items-start">
//                 <div className="rounded-full bg-stone-200 p-2.5 shrink-0 text-stone-800">
//                   <ShieldCheck size={18} className="text-[#7A6A5C]" />
//                 </div>
//                 <div>
//                   <h4 className="text-stone-800 font-medium text-sm">
//                     Verified Exclusivity
//                   </h4>
//                   <p className="text-xs text-stone-600 font-light mt-0.5 leading-relaxed">
//                     Every owner account undergoes review to maintain elite platform standards.
//                   </p>
//                 </div>
//               </div>

//               <div className="rounded-2xl border border-stone-300/60 bg-white/60 p-4">
//                 <p className="text-stone-600 text-xs font-light leading-relaxed">
//                   ⭐ After submitting your application, our team will review your profile. Once approved, you'll unlock management features.
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
    <section className="py-14 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#EFECE6] font-sans">
      <div className="max-w-6xl mx-auto rounded-[28px] sm:rounded-[32px] border border-stone-300/80 bg-[#f8f5f0] shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 p-5 sm:p-8 md:p-10 lg:p-16 items-center">

          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left space-y-5">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-[#EFECE6] px-3 py-1.5 sm:px-4 text-[10px] sm:text-xs tracking-[0.16em] sm:tracking-wider uppercase font-medium text-stone-700">
              <Crown size={14} className="text-yellow-600" />
              <span>For Restaurant Partners</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-[2.8rem] lg:text-5xl font-serif text-stone-900 font-normal leading-[1.12]">
              Grow your venue with
              <br className="hidden sm:block" />
              <span className="italic"> DineFlow</span>
            </h2>

            {/* Description */}
            <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed max-w-lg">
              Join luxury dining establishments managing bookings, guest
              preferences, and exclusive reservations through one elevated
              platform.
            </p>

            {/* CTA */}
            <div className="pt-1 sm:pt-2 w-full sm:w-auto">
              <Link href="/owner/register" className="block w-full sm:w-auto">
                <button className="group w-full sm:w-auto justify-center flex items-center gap-3 rounded-full bg-stone-900 px-6 sm:px-8 py-3.5 sm:py-4 text-[11px] sm:text-xs tracking-[0.16em] sm:tracking-[0.2em] uppercase font-medium text-stone-100 transition-all hover:bg-stone-800 active:scale-[0.99] shadow-sm">
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
          <div className="lg:col-span-5 w-full max-w-md lg:max-w-none mx-auto rounded-3xl border border-stone-200 bg-[#EFECE6]/60 p-6 md:p-7 lg:p-8 space-y-6">

            <h3 className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#7A6A5C] font-semibold">
              Partner Advantages
            </h3>

            <div className="space-y-5 sm:space-y-6">

              {/* Feature 1 */}
              <div className="flex gap-3 sm:gap-4 items-start">
                <div className="rounded-full bg-stone-200 p-2 sm:p-2.5 shrink-0 text-stone-800">
                  <Store className="text-[#7A6A5C]" size={18} />
                </div>

                <div>
                  <h4 className="text-stone-800 font-medium text-sm sm:text-base">
                    Manage Restaurants
                  </h4>

                  <p className="text-xs sm:text-sm text-stone-600 font-light mt-1 leading-relaxed">
                    Create and maintain your culinary listings with total layout
                    precision.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-3 sm:gap-4 items-start">
                <div className="rounded-full bg-stone-200 p-2 sm:p-2.5 shrink-0 text-stone-800">
                  <ShieldCheck size={18} className="text-[#7A6A5C]" />
                </div>

                <div>
                  <h4 className="text-stone-800 font-medium text-sm sm:text-base">
                    Verified Exclusivity
                  </h4>

                  <p className="text-xs sm:text-sm text-stone-600 font-light mt-1 leading-relaxed">
                    Every owner account undergoes review to maintain elite
                    platform standards.
                  </p>
                </div>
              </div>

              {/* Info Card */}
              <div className="rounded-2xl border border-stone-300/60 bg-white/70 backdrop-blur-sm p-4 sm:p-5">
                <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                  ⭐ After submitting your application, our team will review
                  your profile. Once approved, you'll unlock management
                  features.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}