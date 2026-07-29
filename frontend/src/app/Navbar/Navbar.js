"use client";
import React from "react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  User,
  CalendarDays,
  LogOut,
  Store,
  ChevronDown,
  PlusCircle,
  Shield,
  Menu,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import {toast} from 'sonner';
const OwnerNavbar = () => {
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
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
  const loadingToast = toast.loading("Logging out...");

  try {
    const response = await fetch("http://localhost:5000/logout", {
      method: "POST",
      credentials: "include",
    });

    const data = await response.json();

    if (response.ok) {
      toast.success("Logged out successfully", {
        id: loadingToast,
      });

      router.push("/login");
    } else {
      toast.error(data.message || "Logout failed", {
        id: loadingToast,
      });
    }
  } catch (error) {
    console.log("error:", error);

    toast.error("Server error. Please try again.", {
      id: loadingToast,
    });
  }
};

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
      <div className="min-h-screen flex justify-center items-center bg-[#FDFCFB] text-[#7A6A5C] text-sm tracking-widest uppercase font-medium">
        Loading...
      </div>
    );
  }

  return (
    // <nav
    //   className="
    //     fixed top-0 left-0 z-50
    //     w-full h-20
    //     flex items-center justify-between
    //     px-8 md:px-12
    //     bg-[#FDFCFB]/90
    //     backdrop-blur-md
    //     border-b border-[#E5E2DE]
    //   "
    // >
    //   {/* Brand Logo */}
    //   <div className="flex flex-col leading-none">
    //     <span className="font-serif text-2xl tracking-widest text-stone-900 uppercase">
    //       Dine<span className="italic font-light text-[#7A6A5C]">Flow</span>
    //     </span>
    //     <span className="text-[9px] tracking-[0.3em] uppercase text-stone-500 font-sans mt-1">
    //       Culinary Experiences
    //     </span>
    //   </div>

    //   {/* Navigation Links */}
    //   <div className="hidden md:flex gap-10 text-xs uppercase tracking-[0.2em] font-medium text-[#1A1A1A]">
    //     <Link
    //       href="/home"
    //       className="relative py-1 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#1A1A1A] after:transition-all hover:after:w-full"
    //     >
    //       Home
    //     </Link>

    //     <Link
    //       href="/home#about"
    //       className="relative py-1 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#1A1A1A] after:transition-all hover:after:w-full"
    //     >
    //       About Us
    //     </Link>

    //     <Link
    //       href="/home#ContactUs"
    //       className="relative py-1 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#1A1A1A] after:transition-all hover:after:w-full"
    //     >
    //       Contact Us
    //     </Link>
    //     <Link
    //       href="/restaurants"
    //       className="relative py-1 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#1A1A1A] after:transition-all hover:after:w-full"
    //     >
    //       Restaurants
    //     </Link>
    //   </div>

    //   {/* User Dropdown */}
    //  <div className="relative" ref={dropdownRef}>
    //     <button
    //       onClick={() => setIsOpen(!isOpen)}
    //       className="flex items-center gap-3 bg-stone-900 text-stone-100 px-5 py-2.5 rounded-full hover:bg-stone-800 transition-all text-xs tracking-wider uppercase font-sans shadow-sm"
    //     >
    //       <div className="h-6 w-6 rounded-full bg-stone-700 text-stone-200 flex items-center justify-center font-serif text-xs">
    //         {user?.name?.charAt(0).toUpperCase()}
    //       </div>
    //       <span>{user?.name?.split(" ")[0]}</span>
    //       <ChevronDown
    //         size={14}
    //         className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
    //       />
    //     </button>

    //     {isOpen && (
    //       <div className="absolute right-0 mt-3 w-60 rounded-2xl bg-white border border-[#E5E2DE] shadow-xl overflow-hidden py-2 text-sm text-[#1A1A1A]">
    //         <Link
    //           href="/profile"
    //           className="flex items-center gap-3 px-5 py-3 hover:bg-[#F7F5F2] transition text-[#1A1A1A] font-medium"
    //         >
    //           <User size={16} className="text-[#7A6A5C]" />
    //           My Profile
    //         </Link>

    //          {user?.role==="customer"&&(
    //           <>
    //           <Link
    //           href="/myBookings"
    //           className="flex items-center gap-3 px-5 py-3 hover:bg-[#F7F5F2] transition text-[#1A1A1A] font-medium"
    //         >
    //           <CalendarDays size={16} className="text-[#7A6A5C]" />
    //           My Bookings
    //         </Link>
    //           </>
    //          )}

    //         {user?.role==="owner" && (
    //           <>
    //           <Link
    //           href="/myRestaurants"
    //           className="flex items-center gap-3 px-5 py-3 hover:bg-[#F7F5F2] transition text-[#1A1A1A] font-medium"
    //         >
    //           <Store size={16} className="text-[#7A6A5C]" />
    //           My Restaurants
    //         </Link>

    //         <Link
    //           href="/ownerBookings"
    //           className="flex items-center gap-3 px-5 py-3 hover:bg-[#F7F5F2] transition text-[#1A1A1A] font-medium"
    //         >
    //           <CalendarDays size={16} className="text-[#7A6A5C]" />
    //           Booking Requests
    //         </Link>

    //         <Link
    //           href="/add-restaurant"
    //           className="flex items-center gap-3 px-5 py-3 hover:bg-[#F7F5F2] transition text-[#1A1A1A] font-medium"
    //         >
    //           <PlusCircle size={16} className="text-[#7A6A5C]" />
    //           Add Restaurants
    //         </Link>

    //         </>
    //         )}
    //         {user?.role==="admin"&&(
    //           <>
    //           <Link
    //           href="/admin"
    //           className="flex items-center gap-3 px-5 py-3 hover:bg-[#F7F5F2] transition text-[#1A1A1A] font-medium"
    //         >
    //           <Shield size={16} className="text-[#7A6A5C]" />
    //           Admin Dashboard
    //         </Link>
    //           </>
    //         )}

    //         <hr className="border-[#E5E2DE] my-1" />

    //         <button
    //           onClick={handleLogout}
    //           className="w-full flex items-center gap-3 px-5 py-3 text-red-600 hover:bg-red-50 transition text-left font-medium"
    //         >
    //           <LogOut size={16} />
    //           Logout
    //         </button>
    //       </div>
    //     )}
    //   </div>
    // </nav>

    <nav
  className="fixed top-0 left-0 z-50 w-full bg-[#FDFCFB]/95 backdrop-blur-md border-b border-[#E5E2DE]"
>
  <div className="h-16 md:h-20 flex items-center justify-between px-4 md:px-12">
    
    {/* Logo */}
    <Link href="/home" className="flex flex-col leading-none">
      <span className="font-serif text-lg md:text-2xl tracking-widest text-stone-900 uppercase">
        Dine<span className="italic font-light text-[#7A6A5C]">Flow</span>
      </span>
      <span className="hidden sm:block text-[8px] tracking-[0.25em] uppercase text-stone-500 mt-1">
        Culinary Experiences
      </span>
    </Link>

    {/* Desktop Links */}
    <div className="hidden md:flex gap-10 text-xs uppercase tracking-[0.2em] font-medium text-[#1A1A1A]">
      <Link href="/home">Home</Link>
      <Link href="/home#about">About Us</Link>
      <Link href="/home#ContactUs">Contact Us</Link>
      <Link href="/restaurants">Restaurants</Link>
    </div>

    {/* Right side */}
    <div className="flex items-center gap-2 md:gap-3">

      {/* Mobile menu button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-2 rounded-full border border-[#E5E2DE] bg-white text-[#1A1A1A]"
      >
        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Profile dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-stone-900 text-stone-100 px-3 md:px-5 py-2 rounded-full hover:bg-stone-800 transition text-xs uppercase tracking-wider shadow-sm"
        >
          <div className="h-7 w-7 rounded-full bg-stone-700 text-stone-200 flex items-center justify-center font-serif text-xs">
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          {/* Hide full name on mobile */}
          <span className="hidden md:inline">
            {user?.name?.split(" ")[0]}
          </span>

          <ChevronDown
            size={14}
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      {isOpen && (
  <div className="absolute right-0 mt-3 w-64 rounded-2xl bg-white border border-[#E5E2DE] shadow-xl overflow-hidden py-2 text-sm text-[#1A1A1A]">

    <Link
      href="/profile"
      className="flex items-center gap-3 px-5 py-3 hover:bg-[#F7F5F2] transition font-medium"
      onClick={() => setIsOpen(false)}
    >
      <User size={16} className="text-[#7A6A5C]" />
      My Profile
    </Link>

    {user?.role === "customer" && (
      <Link
        href="/myBookings"
        className="flex items-center gap-3 px-5 py-3 hover:bg-[#F7F5F2] transition font-medium"
        onClick={() => setIsOpen(false)}
      >
        <CalendarDays size={16} className="text-[#7A6A5C]" />
        My Bookings
      </Link>
    )}

    {user?.role === "owner" && (
      <>
        <Link
          href="/myRestaurants"
          className="flex items-center gap-3 px-5 py-3 hover:bg-[#F7F5F2] transition font-medium"
          onClick={() => setIsOpen(false)}
        >
          <Store size={16} className="text-[#7A6A5C]" />
          My Restaurants
        </Link>

        <Link
          href="/ownerBookings"
          className="flex items-center gap-3 px-5 py-3 hover:bg-[#F7F5F2] transition font-medium"
          onClick={() => setIsOpen(false)}
        >
          <CalendarDays size={16} className="text-[#7A6A5C]" />
          Booking Requests
        </Link>

        <Link
          href="/add-restaurant"
          className="flex items-center gap-3 px-5 py-3 hover:bg-[#F7F5F2] transition font-medium"
          onClick={() => setIsOpen(false)}
        >
          <PlusCircle size={16} className="text-[#7A6A5C]" />
          Add Restaurant
        </Link>
      </>
    )}

    {user?.role === "admin" && (
      <Link
        href="/admin"
        className="flex items-center gap-3 px-5 py-3 hover:bg-[#F7F5F2] transition font-medium"
        onClick={() => setIsOpen(false)}
      >
        <Shield size={16} className="text-[#7A6A5C]" />
        Admin Dashboard
      </Link>
    )}

    <hr className="border-[#E5E2DE] my-1" />

    <button
      onClick={handleLogout}
      className="w-full flex items-center gap-3 px-5 py-3 text-red-600 hover:bg-red-50 transition text-left font-medium"
    >
      <LogOut size={16} />
      Logout
    </button>
  </div>
)}
        {/* Keep your existing profile dropdown here */}
      </div>
    </div>
  </div>

  {/* Mobile Navigation Dropdown */}
  {mobileMenuOpen && (
    <div className="md:hidden border-t border-[#E5E2DE] bg-white px-4 py-4 space-y-3 shadow-sm">
      <Link
        href="/home"
        onClick={() => setMobileMenuOpen(false)}
        className="block py-2 text-sm font-medium text-[#1A1A1A]"
      >
        Home
      </Link>

      <Link
        href="/home#about"
        onClick={() => setMobileMenuOpen(false)}
        className="block py-2 text-sm font-medium text-[#1A1A1A]"
      >
        About Us
      </Link>

      <Link
        href="/home#ContactUs"
        onClick={() => setMobileMenuOpen(false)}
        className="block py-2 text-sm font-medium text-[#1A1A1A]"
      >
        Contact Us
      </Link>

      <Link
        href="/restaurants"
        onClick={() => setMobileMenuOpen(false)}
        className="block py-2 text-sm font-medium text-[#1A1A1A]"
      >
        Restaurants
      </Link>
    </div>
  )}
</nav>

  );
};

export default OwnerNavbar;