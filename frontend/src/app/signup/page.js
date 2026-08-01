"use client";

import React, { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import {useRouter} from "next/navigation";

export default function Home() {

const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
    };

    console.log(userData);

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        toast.success("Signup Successful");

        setName("");
        setEmail("");
        setPassword("");
        
        router.push("/login");
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.log("Error:", error);
      toast.error(error.message || "Network error");
    }
  };

  return (
    <main className="min-h-screen bg-[#FDFCFB] flex items-center justify-center p-4 sm:p-8 lg:p-12 text-[#1A1A1A]">
      <div className="w-full max-w-md md:max-w-4xl lg:max-w-5xl bg-white border border-[#E5E2DE] rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        
        <div className="hidden md:flex flex-col justify-between bg-[#1A1A1A] text-white p-8 lg:p-12 relative overflow-hidden">
          
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#7A6A5C]/20 rounded-full blur-3xl pointer-events-none" />
           <div className="absolute -bottom-24 -right-24 w-42 h-42 bg-[#7A6A5C]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <p className="text-xl font-serif uppercase tracking-widest text-stone-200">
              Dine<span className="text-[#C9BDB0]">Flow</span>
            </p>
          </div>

          <div className="relative z-10 my-auto py-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-normal leading-tight tracking-tight">
              Crafting Exceptional Dining Experiences.
            </h2>
            <p className="mt-4 text-sm lg:text-base text-stone-300 font-light leading-relaxed max-w-sm">
              Manage reservations, explore curated culinary spaces, and elevate your restaurant management effortlessly.
            </p>
          </div>

          <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-stone-400 font-light">
            <span>© DineFlow Platform</span>
            <span>Owner & Guest Panel</span>
          </div>
        </div>

        
        <div className="p-6 sm:p-10 md:p-10 lg:p-12 flex flex-col justify-center bg-white">
          
          
          <div className="text-center md:text-left mb-8">
            <p className="md:hidden text-lg font-serif uppercase tracking-widest mb-2">
              Dine <span className="text-[#7A6A5C]">Flow</span>
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-normal font-serif tracking-tight text-[#1A1A1A]">
              Create an Account
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-[#666666] font-light">
              Enter your details to register and manage your dining experience.
            </p>
          </div>

          
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6">
            <div>
              <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-[#7A6A5C] font-semibold mb-2">
                Full Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="John Doe"
                className="w-full rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] px-4 py-3 sm:py-3.5 text-sm text-[#1A1A1A] placeholder-[#A39A90] outline-none transition focus:border-[#7A6A5C] focus:bg-white"
                required
              />
            </div>

            <div>
              <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-[#7A6A5C] font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="w-full rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] px-4 py-3 sm:py-3.5 text-sm text-[#1A1A1A] placeholder-[#A39A90] outline-none transition focus:border-[#7A6A5C] focus:bg-white"
                required
              />
            </div>

            <div>
              <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-[#7A6A5C] font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] px-4 py-3 sm:py-3.5 text-sm text-[#1A1A1A] placeholder-[#A39A90] outline-none transition focus:border-[#7A6A5C] focus:bg-white"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-[#1A1A1A] py-3.5 sm:py-4 text-xs font-medium uppercase tracking-wider text-white transition hover:bg-[#333333] shadow-md active:scale-[0.99]"
            >
              Create Account
            </button>

            <div className="pt-2 text-center md:text-left text-xs sm:text-sm text-[#666666] font-light">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-[#1A1A1A] underline underline-offset-4 hover:text-[#7A6A5C] transition"
              >
                Log In
              </Link>
            </div>
          </form>

        </div>

      </div>
    </main>
  );
}