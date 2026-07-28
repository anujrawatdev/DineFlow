// "use client";

// import React, { useState, useEffect } from "react";

// const Page = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     async function userProfile() {
//       const reponse = await fetch("http://localhost:5000/profile", {
//         method: "GET",
//         credentials: "include",
//       });
//       const data = await reponse.json();
//       setUser(data);
//     }
//     userProfile();
//   }, []);

//   if (!user) {
//   return (
//     <div className="min-h-screen flex justify-center items-center">
//       Loading...
//     </div>
//   );
// }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-stone-100 via-amber-50 to-stone-200 flex items-center justify-center p-6">
//       <div className="w-full max-w-3xl rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl border border-white/50 overflow-hidden">
//         {/* Header */}
//         <div className="h-44 bg-gradient-to-r from-amber-900 via-amber-700 to-orange-500 relative">
//           {/* Avatar */}
//           <div className="absolute -bottom-14 left-1/2 -translate-x-1/2">
//             <div className="w-28 h-28 rounded-full bg-white shadow-xl flex items-center justify-center border-[6px] border-white">
//               <span className="text-5xl font-bold text-amber-800">
//                 {user?.name?.charAt(0).toUpperCase()}
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="pt-20 pb-10 px-8">
//           <div className="text-center">
//             <h1 className="text-3xl font-bold text-gray-800">{user?.name}</h1>

//             <p className="text-gray-500 mt-1">{user?.email}</p>

//             <span className="inline-block mt-4 px-5 py-2 rounded-full bg-amber-100 text-amber-800 font-semibold">
//               {user?.role}
//             </span>
//           </div>

//           {/* Details */}
//           <div className="grid md:grid-cols-2 gap-6 mt-12">
//             <div className="bg-stone-50 rounded-2xl p-6 border">
//               <p className="text-gray-500 text-sm">Full Name</p>

//               <h2 className="text-lg font-semibold text-gray-800 mt-2">
//                 {user?.name}
//               </h2>
//             </div>

//             <div className="bg-stone-50 rounded-2xl p-6 border">
//               <p className="text-gray-500 text-sm">Email Address</p>

//               <h2 className="text-lg font-semibold text-gray-800 mt-2">
//                 {user?.email}
//               </h2>
//             </div>

//             <div className="bg-stone-50 rounded-2xl p-6 border">
//               <p className="text-gray-500 text-sm">Role</p>

//               <h2 className="text-lg font-semibold text-gray-800 mt-2">
//                 {user?.role}
//               </h2>
//             </div>

//             <div className="bg-stone-50 rounded-2xl p-6 border">
//               <p className="text-gray-500 text-sm">Member Since</p>

//               <h2 className="text-lg font-semibold text-gray-800 mt-2">
//                 {new Date(user?.createdAt).toLocaleDateString()}
//               </h2>
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-center mt-12 gap-4">
//             <button className="px-8 py-3 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-semibold transition">
//               Edit Profile
//             </button>

//             <button className="px-8 py-3 rounded-xl border border-amber-800 text-amber-800 hover:bg-amber-50 font-semibold transition">
//               Change Password
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;

"use client";

import React, { useState, useEffect } from "react";
import { User, Mail, Shield, Calendar } from "lucide-react";

const Page = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function userProfile() {
      try {
        const response = await fetch("http://localhost:5000/profile", {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
      }
    }
    userProfile();
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen bg-[#FDFCFB] flex justify-center items-center text-[#7A6A5C] font-serif text-lg">
        Loading Profile...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#FDFCFB] flex items-center justify-center px-6 py-16 text-[#1A1A1A]">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-xs tracking-[0.25em] uppercase text-[#7A6A5C] font-semibold">
            Account Details
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-normal font-serif tracking-tight text-[#1A1A1A]">
            User Profile
          </h1>
        </div>

        {/* Profile Card */}
        <div className="rounded-2xl border border-[#E5E2DE] bg-white p-8 md:p-10 shadow-sm">
          {/* Avatar & Main Info */}
          <div className="flex flex-col items-center border-b border-[#E5E2DE] pb-8">
            <div className="w-24 h-24 rounded-full bg-[#F7F5F2] border border-[#E5E2DE] flex items-center justify-center text-3xl font-serif text-[#1A1A1A] mb-4 shadow-sm">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <h2 className="text-2xl font-serif font-normal text-[#1A1A1A]">
              {user?.name}
            </h2>
            <p className="text-sm text-[#666666] font-light mt-1">
              {user?.email}
            </p>

            <span className="mt-4 inline-block rounded-full bg-[#F7F5F2] border border-[#E5E2DE] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
              {user?.role}
            </span>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] p-5">
              <div className="flex items-center gap-2 text-[#7A6A5C] mb-1">
                <User size={15} />
                <p className="text-xs uppercase tracking-wider font-semibold">
                  Full Name
                </p>
              </div>
              <h3 className="text-sm font-medium text-[#1A1A1A]">
                {user?.name}
              </h3>
            </div>

            <div className="rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] p-5">
              <div className="flex items-center gap-2 text-[#7A6A5C] mb-1">
                <Mail size={15} />
                <p className="text-xs uppercase tracking-wider font-semibold">
                  Email Address
                </p>
              </div>
              <h3 className="text-sm font-medium text-[#1A1A1A]">
                {user?.email}
              </h3>
            </div>

            <div className="rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] p-5">
              <div className="flex items-center gap-2 text-[#7A6A5C] mb-1">
                <Shield size={15} />
                <p className="text-xs uppercase tracking-wider font-semibold">
                  Role
                </p>
              </div>
              <h3 className="text-sm font-medium text-[#1A1A1A] capitalize">
                {user?.role}
              </h3>
            </div>

            <div className="rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] p-5">
              <div className="flex items-center gap-2 text-[#7A6A5C] mb-1">
                <Calendar size={15} />
                <p className="text-xs uppercase tracking-wider font-semibold">
                  Member Since
                </p>
              </div>
              <h3 className="text-sm font-medium text-[#1A1A1A]">
                {user?.createdAt
                  ? new Date(user.createdAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })
                  : "N/A"}
              </h3>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-4 border-t border-[#E5E2DE]">
            <button className="flex-1 rounded-xl bg-[#1A1A1A] py-3.5 text-xs font-medium uppercase tracking-wider text-white transition hover:bg-[#333333] shadow-sm">
              Edit Profile
            </button>

            <button className="flex-1 rounded-xl border border-[#E5E2DE] bg-[#F7F5F2] py-3.5 text-xs font-medium uppercase tracking-wider text-[#1A1A1A] transition hover:bg-[#E5E2DE]">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
