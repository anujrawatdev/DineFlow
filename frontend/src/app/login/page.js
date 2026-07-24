"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";




const page = () => {

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
      const response = await fetch("http://localhost:5000/login", {
        method:"POST",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(userData),
      });

      const data = await response.json(userData);

      if (response.ok) {
        alert("login successfully");
        console.log("login successful");

        setEmail("");
        setPassword("");

        router.push("/home");
        
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div className=" flex justify-center items-center min-h-[90vh] absolute inset-0 bg-[url('/images/Background-form.jpg')] bg-cover bg-center scale-110">
      <div className="absolute inset-0 backdrop-blur-sm bg-black/40" />
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">Dine<span className="text-amber-400">Flow</span></h1>
          <p className="text-gray-300 mt-2">Login your account</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-amber-400"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-amber-400"
          />

          <button
            type="submit"
            className="mt-2 rounded-xl bg-amber-500 py-3 font-semibold text-white transition hover:bg-amber-400"
          >
            Login Account
          </button>
           <p className="text-center text-gray-300">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              SignUp
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default page;
