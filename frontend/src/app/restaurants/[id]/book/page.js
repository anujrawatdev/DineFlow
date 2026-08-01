"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/app/Navbar/Navbar";
import Footer from "@/app/home/Footer/page";
import { useParams, useRouter } from "next/navigation";
import {
  Calendar,
  Clock,
  Users,
  User,
  Mail,
  Phone,
  MessageSquare,
  Utensils,
} from "lucide-react";
import { toast } from "sonner";

const Page = () => {
  const params = useParams();
  const router = useRouter();

  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/profile`, {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) {
          toast.error("Please login to book a table");
          router.replace("/login");
          return;
        }

        const user = await response.json();

        if (user.role !== "customer") {
          toast.error("Only customers can book tables");
          router.replace("/home");
          return;
        }

        setCheckingAuth(false);
      } catch (error) {
        router.replace("/login");
      }
    };

    checkAuth();
  }, [router]);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/restaurants/${params.id}`,
        );
        const data = await response.json();
        setRestaurant(data);
      } catch (error) {
        console.error("Error fetching restaurant:", error);
      } finally {
        setLoading(false);
      }
    };
    if (params?.id) {
      fetchRestaurant();
    }
  }, [params?.id]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "2",
    bookingDate: "",
    bookingTime: "07:00 PM",
    specialRequest: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          restaurant: params.id,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Booking successful!");
        router.push("/myBookings");
      } else {
        toast.error(data.message || "Failed to confirm reservation.");
      }
    } catch (error) {
      console.error("Booking error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-stone-900 font-sans selection:bg-stone-300 flex flex-col justify-between">
      <Navbar />

      <main className="pt-28 pb-20 px-4 sm:px-6 flex justify-center flex-grow">
        <div className="w-full max-w-4xl bg-[#FAF8F5] border border-stone-200/80 rounded-3xl shadow-sm overflow-hidden my-auto">
          <div className="bg-stone-900 text-[#FAF8F5] px-8 py-10 text-center relative overflow-hidden">
            <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-semibold block mb-2">
              Exclusive Table Experience
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-normal tracking-tight mb-3">
              Reserve Your Table
            </h1>
            <p className="text-stone-300 text-xs md:text-sm font-light max-w-lg mx-auto leading-relaxed">
              Complete your details below to confirm your dining reservation at{" "}
              <span className="text-white font-medium italic">
                {restaurant?.name || "our restaurant"}
              </span>
              .
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-12 space-y-10">
            <div className="space-y-6">
              <div className="border-b border-stone-200/80 pb-3">
                <h2 className="text-xl font-serif text-stone-900 font-normal">
                  1. Personal Details
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-stone-600 font-medium flex items-center gap-1.5">
                    <User size={14} className="text-stone-400" />
                    Reservation Name
                  </label>
                  <input
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    type="text"
                    placeholder="e.g. Eleanor Vance"
                    className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-stone-600 font-medium flex items-center gap-1.5">
                    <Mail size={14} className="text-stone-400" />
                    Email Address
                  </label>
                  <input
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    type="email"
                    placeholder="eleanor@example.com"
                    className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-stone-600 font-medium flex items-center gap-1.5">
                    <Phone size={14} className="text-stone-400" />
                    Phone Number
                  </label>
                  <input
                    required
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    type="tel"
                    placeholder="9876543210"
                    className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-stone-600 font-medium flex items-center gap-1.5">
                    <Users size={14} className="text-stone-400" />
                    Number of Guests
                  </label>
                  <input
                    required
                    value={formData.guests}
                    onChange={(e) =>
                      setFormData({ ...formData, guests: e.target.value })
                    }
                    type="number"
                    min="1"
                    max="20"
                    placeholder="2"
                    className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-b border-stone-200/80 pb-3">
                <h2 className="text-xl font-serif text-stone-900 font-normal">
                  2. Date & Time
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-stone-600 font-medium flex items-center gap-1.5">
                    <Calendar size={14} className="text-stone-400" />
                    Booking Date
                  </label>
                  <input
                    required
                    value={formData.bookingDate}
                    onChange={(e) =>
                      setFormData({ ...formData, bookingDate: e.target.value })
                    }
                    type="date"
                    className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-800 outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-stone-600 font-medium flex items-center gap-1.5">
                    <Clock size={14} className="text-stone-400" />
                    Booking Time
                  </label>
                  <select
                    value={formData.bookingTime}
                    onChange={(e) =>
                      setFormData({ ...formData, bookingTime: e.target.value })
                    }
                    className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-800 outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-all"
                  >
                    <option value="8:00 AM">8:00 AM</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                    <option value="06:00 PM">06:00 PM</option>
                    <option value="07:00 PM">07:00 PM</option>
                    <option value="08:00 PM">08:00 PM</option>
                    <option value="09:00 PM">09:00 PM</option>
                    <option value="10:00 PM">10:00 PM</option>
                    <option value="11:00 PM">11:00 PM</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-stone-600 font-medium flex items-center gap-1.5">
                <MessageSquare size={14} className="text-stone-400" />
                Special Requests (Optional)
              </label>
              <textarea
                value={formData.specialRequest}
                onChange={(e) =>
                  setFormData({ ...formData, specialRequest: e.target.value })
                }
                rows={3}
                placeholder="Dietary restrictions, anniversary celebration, preferred seating area..."
                className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 resize-none outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-all"
              />
            </div>

            <div className="bg-[#f2eee9] rounded-2xl p-6 border border-stone-200/70 space-y-3">
              <div className="flex items-center gap-2 border-b border-stone-300/60 pb-3">
                <Utensils size={16} className="text-stone-700" />
                <h3 className="font-serif text-lg text-stone-900 font-normal">
                  Reservation Summary
                </h3>
              </div>

              <div className="space-y-2 text-xs md:text-sm text-stone-600 font-light">
                <div className="flex justify-between items-center">
                  <span>Establishment</span>
                  <span className="font-medium text-stone-900 font-serif">
                    {loading ? "Loading..." : restaurant?.name || "N/A"}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span>Location</span>
                  <span className="font-normal text-stone-800 truncate max-w-[250px]">
                    {restaurant?.location
                      ? `${restaurant.location?.street || ""}, ${restaurant.location?.city || ""}`
                      : "N/A"}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span>Average Cost (for two)</span>
                  <span className="font-semibold text-stone-900">
                    ₹{restaurant?.price || "—"}
                  </span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-stone-900 hover:bg-stone-800 text-stone-100 text-xs uppercase tracking-[0.2em] font-sans py-4 rounded-full transition-all duration-300 shadow-sm"
            >
              Confirm Reservation
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Page;
