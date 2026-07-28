// "use client";

// import { div } from "framer-motion/client";
// import { useState } from "react";

// export default function Home() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const userData = {
//       name,
//       email,
//       password,
//     };

//     console.log(userData);

//     try {
//       const response = await fetch("http://localhost:5000/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userData),
//       });

//       const data = await response.json();

//       console.log(data);

//       if (response.ok) {
//         alert("Signup Successful");

//         setName("");
//         setEmail("");
//         setPassword("");
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   };

//   return (
    
//     // <div className="min-h-screen bg-gradient-to-br from-slate-950 via-zinc-900 to-black flex items-center justify-center px-4">
//     <div className="flex justify-center items-center min-h-[90vh] absolute inset-0 bg-[url('/images/Background-form.jpg')] bg-cover bg-center scale-110">
//         <div className="absolute inset-0 backdrop-blur-sm bg-black/40" />
//       <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl p-8">
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-white">Dine<span className="text-amber-400">Flow</span></h1>
//           <p className="text-gray-300 mt-2">Create your account</p>
//         </div>

//         <form onSubmit={handleSubmit} className="flex flex-col gap-5">
//           <input
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             type="text"
//             placeholder="Full Name"
//             className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-amber-400"
//           />

//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email Address"
//             className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-amber-400"
//           />

//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//             className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-amber-400"
//           />

//           <button
//             type="submit"
//             className="mt-2 rounded-xl bg-amber-500 py-3 font-semibold text-white transition hover:bg-amber-400"
//           >
//             Create Account
//           </button>

//           <p className="text-center text-gray-300">
//             Already have an account?{" "}
//             <a
//               href="/login"
//               className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full"
//             >
//               Login
//             </a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

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
            Join <span className="text-[#7A6A5C]">DineFlow</span>
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