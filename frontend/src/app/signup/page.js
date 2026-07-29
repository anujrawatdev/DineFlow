

"use client";

import React, { useState } from "react";
import Link from "next/link";
import {toast} from 'sonner';

export default function Home() {
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
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("Error:", error);
      toast.error(error);
    }
  };

  return (
    <main className="min-h-screen bg-[#FDFCFB] flex items-center justify-center px-6 py-16 text-[#1A1A1A]">
      <div className="w-full max-w-md">
        {/* Header Branding */}
        <div className="text-center mb-8">
          <p className=" text-[#1A1A1A] text-xl font-normal font-serif uppercase  ">
            <span className=" text-xl text-[#1A1A1A]">Dine <span className="text-[#7A6A5C]">Flow</span></span>
          </p>
          <h1 className="mt-2 text-4xl font-normal font-serif tracking-tight text-[#1A1A1A]">
            Create an Account
          </h1>
          <p className="mt-2 text-sm text-[#666666] font-light">
            Enter your details to register and manage your dining experience.
          </p>
        </div>

        {/* Card Form */}
        <div className="rounded-2xl border border-[#E5E2DE] bg-white p-8 md:p-10 shadow-sm">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#7A6A5C] font-semibold mb-2">
                Full Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="John Doe"
                className="w-full rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#A39A90] outline-none transition focus:border-[#7A6A5C] focus:bg-white"
                required
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#7A6A5C] font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="w-full rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#A39A90] outline-none transition focus:border-[#7A6A5C] focus:bg-white"
                required
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#7A6A5C] font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#A39A90] outline-none transition focus:border-[#7A6A5C] focus:bg-white"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-[#1A1A1A] py-3.5 text-xs font-medium uppercase tracking-wider text-white transition hover:bg-[#333333] shadow-sm"
            >
              Create Account
            </button>

            <div className="pt-2 text-center text-xs text-[#666666] font-light">
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