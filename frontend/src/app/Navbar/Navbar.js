"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

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

const OwnerNavbar = () => {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/profile`, {
          method: "GET",
          credentials: "include",
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          setUser(null);
        }
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    getUser();
  }, []);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeDropdown);

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  const handleLogout = async () => {
    const loadingToast = toast.loading("Logging out...");

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/logout`, {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        toast.success("Logged out successfully", {
          id: loadingToast,
        });

        setUser(null);

        router.push("/login");
      }
    } catch (error) {
      toast.error("Logout failed", {
        id: loadingToast,
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-[#FDFCFB]/95 backdrop-blur-md border-b border-[#E5E2DE]">
      <div className="h-16 sm:h-20 flex items-center justify-between px-4 sm:px-10">
        <Link href="/home" className="flex flex-col leading-none flex-shrink-0">
          {" "}
          <span className="font-serif text-lg sm:text-xl lg:text-2xl tracking-widest text-stone-900 uppercase">
            {" "}
            Dine
            <span className="italic font-light text-[#7A6A5C]">Flow</span>{" "}
          </span>{" "}
          <span className="hidden sm:block text-[10px] tracking-[0.25em] uppercase text-stone-500 mt-1">
            {" "}
            Culinary Experiences{" "}
          </span>{" "}
        </Link>

        <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest">
          <Link href="/home" 
          className="text-[#1A1A1A] hover:text-[#7A6A5C] transition"
          >Home</Link>

          <Link href="/restaurants"
          className="text-[#1A1A1A] hover:text-[#7A6A5C] transition"
          >Restaurants</Link>

          <Link href="/home#about"
          className="text-[#1A1A1A] hover:text-[#7A6A5C] transition"
          >About Us</Link>

          <Link href="/home#contact"
          className="text-[#1A1A1A] hover:text-[#7A6A5C] transition"
          >Contact Us</Link>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X className= "text-[#1A1A1A]" /> : < Menu className="text-[#1A1A1A]" />}
          </button>

           {mobileMenuOpen && (
  <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-stone-200 shadow-lg">
    <div className="flex items-center flex-col p-5 gap-4">

      <Link
      className="text-[#1A1A1A] hover:text-[#7A6A5C] transition"
      href="/home">Home</Link>

      <Link 
     className="text-[#1A1A1A] hover:text-[#7A6A5C] transition"
      href="/home#about">
        About Us
      </Link>

      <Link 
      className=" text-[#1A1A1A] active:text-[#7A6A5C] transition"
      href="/restaurants">
        Restaurants
      </Link>

      <Link
      className="text-[#1A1A1A] hover:text-[#7A6A5C] transition"
      href="/home#contact">
        Contact Us
      </Link>

    </div>
  </div>
)}

          {loading ? null : user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 bg-stone-900 text-white px-4 py-2 rounded-full"
              >
                <div className="h-7 w-7 rounded-full bg-stone-700 flex items-center justify-center">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>

                <span>{user?.name?.split(" ")[0]}</span>

                <ChevronDown size={15} />
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl border border-[#E5E2DE] p-2">
                  <Link
                    href="/profile"

                    className=" text-[#1A1A1A] hover:text-[#7A6A5C] transition block px-4 py-3 hover:bg-gray-100"
                  >
                    <User size={16} className="inline mr-2" />
                    Profile
                  </Link>

                  {user.role === "customer" && (
                    <Link
                      href="/myBookings"
                      className=" text-[#1A1A1A] hover:text-[#7A6A5C] transition block px-4 py-3 hover:bg-gray-100"
                    >
                      <CalendarDays size={16} className="inline mr-2" />
                      My Bookings
                    </Link>
                  )}

                  {user.role === "owner" && (
                    <>
                      <Link
                        href="/myRestaurants"
                        className=" text-[#1A1A1A] hover:text-[#7A6A5C] transition block px-4 py-3 hover:bg-gray-100"
                      >
                        <Store size={16} className="inline mr-2" />
                        My Restaurants
                      </Link>

                      <Link
                        href="/ownerBookings"
                        className=" text-[#1A1A1A] hover:text-[#7A6A5C] transition block px-4 py-3 hover:bg-gray-100"
                      >
                        <CalendarDays size={16} className="inline mr-2" />
                        Booking Requests
                      </Link>

                      <Link
                        href="/add-restaurant"
                        className=" text-[#1A1A1A] hover:text-[#7A6A5C] transition block px-4 py-3 hover:bg-gray-100"
                      >
                        <PlusCircle size={16} className="inline mr-2" />
                        Add Restaurant
                      </Link>
                    </>
                  )}

                  {user.role === "admin" && (
                    <Link
                      href="/admin"
                      className=" text-[#1A1A1A] hover:text-[#7A6A5C] transition block px-4 py-3 hover:bg-gray-100"
                    >
                      <Shield size={16} className="inline mr-2" />
                      Admin Dashboard
                    </Link>
                  )}

                  <hr className="text-stone-200" />

                  <button
                    onClick={handleLogout}
                    className=" w-full text-left px-4 py-3 text-red-600 hover:bg-red-50"
                  >
                    <LogOut size={16} className="inline mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-3">
              <Link href="/login" className="px-4 py-2 rounded-full border">
                Login
              </Link>

              <Link
                href="/signup"
                className="px-4 py-2 rounded-full bg-stone-900 text-white"
              >
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default OwnerNavbar;
