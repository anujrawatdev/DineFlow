"use client"
import React from "react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { User, CalendarDays, Store, LogOut, ChevronDown } from "lucide-react";
import {useRouter} from "next/navigation";

const Navbar = () => {
     const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {

    try {
      const response = await fetch("http://localhost:5000/logout", {
        method: "POST",
        credentials: "include",
      });

      const data = await response.json();
      alert(data.message);

      router.push("/login");
    } catch (error) {
      console.log("error:",error)
    }
  };

  return (
    <nav
      className="
      fixed top-0 left-0 z-50
      w-full h-[10vh]
      flex items-center justify-between
      px-8
      bg-amber-900/90
      backdrop-blur-xl
      border-b border-white/10
      shadow-md
    "
    >
      <div className="font-bold text-2xl text-white">
        Dine<span className="text-amber-500">Flow</span>
      </div>

      <div className="flex gap-8 text-white">
        <Link
          href="/home"
          className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all hover:after:w-full"
        >
          Home
        </Link>

        <Link
          href="#about"
          className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all hover:after:w-full"
        >
          About Us
        </Link>

        <Link
          href="#contact"
          className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all hover:after:w-full"
        >
          Contact Us
        </Link>
      </div>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 rounded-full px-2 py-1 hover:bg-white/10 transition"
        >
          <div className="h-10 w-10 rounded-full bg-amber-500 flex items-center justify-center font-bold text-white">
            A
          </div>

          <ChevronDown
            size={18}
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-3 w-60 rounded-xl text-neutral-200 bg-black/55 backdrop-blur-3xl border border-zinc-700 overflow-hidden">
            <Link
              href="/profile"
              className="flex items-center gap-3 px-4 py-3 hover:bg-neutral-300/55 transition"
            >
              <User size={18} />
              My Profile
            </Link>

            <Link
              href="/myBookings"
              className="flex items-center gap-3 px-4 py-3 hover:bg-neutral-300/55 transition"
            >
              <CalendarDays size={18} />
              My Bookings
            </Link>

            <hr className="border-zinc-700" />

            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-red-900 hover:bg-red-300/35 transition"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
