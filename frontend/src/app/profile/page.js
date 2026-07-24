"use client";

import React, { useState, useEffect } from "react";

const Page = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function userProfile() {
      const reponse = await fetch("http://localhost:5000/profile", {
        method: "GET",
        credentials: "include",
      });
      const data = await reponse.json();
      setUser(data);
    }
    userProfile();
  }, []);

  if (!user) {
  return (
    <div className="min-h-screen flex justify-center items-center">
      Loading...
    </div>
  );
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-amber-50 to-stone-200 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl border border-white/50 overflow-hidden">
        {/* Header */}
        <div className="h-44 bg-gradient-to-r from-amber-900 via-amber-700 to-orange-500 relative">
          {/* Avatar */}
          <div className="absolute -bottom-14 left-1/2 -translate-x-1/2">
            <div className="w-28 h-28 rounded-full bg-white shadow-xl flex items-center justify-center border-[6px] border-white">
              <span className="text-5xl font-bold text-amber-800">
                {user?.name?.charAt(0).toUpperCase()}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-20 pb-10 px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">{user?.name}</h1>

            <p className="text-gray-500 mt-1">{user?.email}</p>

            <span className="inline-block mt-4 px-5 py-2 rounded-full bg-amber-100 text-amber-800 font-semibold">
              {user?.role}
            </span>
          </div>

          {/* Details */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-stone-50 rounded-2xl p-6 border">
              <p className="text-gray-500 text-sm">Full Name</p>

              <h2 className="text-lg font-semibold text-gray-800 mt-2">
                {user?.name}
              </h2>
            </div>

            <div className="bg-stone-50 rounded-2xl p-6 border">
              <p className="text-gray-500 text-sm">Email Address</p>

              <h2 className="text-lg font-semibold text-gray-800 mt-2">
                {user?.email}
              </h2>
            </div>

            <div className="bg-stone-50 rounded-2xl p-6 border">
              <p className="text-gray-500 text-sm">Role</p>

              <h2 className="text-lg font-semibold text-gray-800 mt-2">
                {user?.role}
              </h2>
            </div>

            <div className="bg-stone-50 rounded-2xl p-6 border">
              <p className="text-gray-500 text-sm">Member Since</p>

              <h2 className="text-lg font-semibold text-gray-800 mt-2">
                {new Date(user?.createdAt).toLocaleDateString()}
              </h2>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center mt-12 gap-4">
            <button className="px-8 py-3 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-semibold transition">
              Edit Profile
            </button>

            <button className="px-8 py-3 rounded-xl border border-amber-800 text-amber-800 hover:bg-amber-50 font-semibold transition">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
