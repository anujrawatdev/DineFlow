"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";

const Page = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Login successful");

        setEmail("");
        setPassword("");

        router.push("/home");
      } else {
        toast.error(data.message || "Failed to log in");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-[#FDFCFB] flex items-center justify-center px-4 sm:px-6 md:px-10 py-12 md:py-20 text-[#1A1A1A]">
      <div className="w-full max-w-md md:max-w-lg transition-all duration-300">
        
        
        <div className="text-center mb-6 md:mb-10 space-y-1.5 md:space-y-2.5">
          <p className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-[#1A1A1A] font-semibold">
            Welcome Back
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal font-serif tracking-tight text-[#1A1A1A]">
            Log In to <span className="text-[#1A1A1A]">Dine<span className="text-[#7A6A5C]">Flow</span></span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-[#666666] font-light max-w-xs sm:max-w-sm mx-auto">
            Enter your credentials to access your account dashboard.
          </p>
        </div>

        
        <div className="rounded-2xl md:rounded-3xl border border-[#E5E2DE] bg-white p-6 sm:p-8 md:p-12 shadow-sm md:shadow-md transition-all duration-300">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-7">
            <div>
              <label className="block text-[11px] md:text-xs uppercase tracking-wider text-[#7A6A5C] font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="w-full rounded-xl md:rounded-2xl border border-[#E5E2DE] bg-[#FDFCFB] px-4 md:px-5 py-3 md:py-3.5 text-sm md:text-base text-[#1A1A1A] placeholder-[#A39A90] outline-none transition focus:border-[#7A6A5C] focus:bg-white focus:ring-1 focus:ring-[#7A6A5C]"
                required
              />
            </div>

            <div>
              <label className="block text-[11px] md:text-xs uppercase tracking-wider text-[#7A6A5C] font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl md:rounded-2xl border border-[#E5E2DE] bg-[#FDFCFB] px-4 md:px-5 py-3 md:py-3.5 text-sm md:text-base text-[#1A1A1A] placeholder-[#A39A90] outline-none transition focus:border-[#7A6A5C] focus:bg-white focus:ring-1 focus:ring-[#7A6A5C]"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-1 md:mt-2 w-full rounded-xl md:rounded-2xl bg-[#1A1A1A] py-3.5 md:py-4 text-xs md:text-sm font-medium uppercase tracking-wider text-white transition hover:bg-[#333333] shadow-sm hover:shadow active:scale-[0.99]"
            >
              Log In
            </button>

            <div className="pt-2 text-center text-xs md:text-sm text-[#666666] font-light">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="font-medium text-[#1A1A1A] underline underline-offset-4 hover:text-[#7A6A5C] transition"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Page;