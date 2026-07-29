"use client";

import React, { useState, useEffect } from "react";
import { User, Mail, Shield, Calendar } from "lucide-react";
import {toast} from 'sonner';

const Page = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    async function userProfile() {
      try {
        const response = await fetch("http://localhost:5000/profile", {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        setUser(data);
        setName(data.name);
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
      }
    }
    userProfile();
  }, []);

  const updateProfile = async () => {
    const response = await fetch("http://localhost:5000/profile/update", {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    });

    const data = await response.json();

    if(response.ok){
      setUser(data.user);
      setIsEditing(false);
      toast.success("profile updated successfully");
    }else{
      toast.error(data.message);
    }

  };

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
            {
              isEditing?(
                <input 
                value={name}
                onChange={(e)=> setName(e.target.value)}
                className="border rounded-lg px-4 py-2 mt-2 text-center"
                type="text" />
              ):(
                <h2 className="text-2xl font-serif font-normal text-[#1A1A1A]">
              {user?.name}
            </h2>
              )
            }
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
            {isEditing?(
              <>
              <button 
              onClick={updateProfile}
              className="flex-1 rounded-xl bg-[#1A1A1A] py-3.5 text-white"
               >
              Save Changes
              </button>
              <button 
              onClick={()=> {
                setName(user.name);
                setIsEditing(false);
              }}
              className="flex-1 rounded-xl border ">
              Cancel
            </button>
              </>
            ):(
              <>
              <button
              onClick={() =>{ 
                setName(user.name);
                setIsEditing(true)}}
              className="flex-1 rounded-xl bg-[#1A1A1A] py-3.5 text-xs font-medium uppercase tracking-wider text-white transition hover:bg-[#333333] shadow-sm"
            >
              Edit Name
            </button>
            </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
