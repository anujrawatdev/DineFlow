

"use client";

import DashboardCard from "@/components/admin/DashboardCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LayoutDashboard, CircleArrowLeft, Users, UtensilsCrossed, Calendar, UserCheck, LogOut, Utensils } from "lucide-react";


const Page = () => {
  const router = useRouter();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchDashboardData = async () => {
      try {
        const profileResponse = await fetch("http://localhost:5000/profile", {
          credentials: "include",
        });

        const user = await profileResponse.json();

        if (user.role !== "admin") {
          router.push("/home");
          return;
        }

        const response = await fetch("http://localhost:5000/admin/dashboard", {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch dashboard data");
        }

        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();

    return ()=>{
      isMounted = false;
    }
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FDFCFB] flex justify-center items-center text-[#7A6A5C] font-serif text-lg">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <>
    
    <div className="flex min-h-screen bg-[#FDFCFB] text-[#1A1A1A]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[#E5E2DE] bg-white flex flex-col justify-between p-6">
        <div>
          {/* Logo Branding */}
          <div className="mb-10 pb-6 border-b border-[#E5E2DE]">
            <h1 className="text-2xl font-serif tracking-tight text-[#1A1A1A]">
              DineFlow
            </h1>
            <p className="text-xs uppercase tracking-widest text-[#7A6A5C] font-semibold mt-1">
              Admin Portal
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1.5">
            <Link
              href="/admin"
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#F7F5F2] text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] transition"
            >
              <LayoutDashboard size={16} className="text-[#7A6A5C]" />
              Dashboard
            </Link>

            <Link
              href="/admin/users"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-medium uppercase tracking-wider text-[#666666] hover:text-[#1A1A1A] hover:bg-[#FDFCFB] transition"
            >
              <Users size={16} className="text-[#7A6A5C]" />
              Users
            </Link>

            <Link
              href="/admin/restaurants"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-medium uppercase tracking-wider text-[#666666] hover:text-[#1A1A1A] hover:bg-[#FDFCFB] transition"
            >
              <UtensilsCrossed size={16} className="text-[#7A6A5C]" />
              Restaurants
            </Link>

            <Link
              href="/admin/bookings"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-medium uppercase tracking-wider text-[#666666] hover:text-[#1A1A1A] hover:bg-[#FDFCFB] transition"
            >
              <Calendar size={16} className="text-[#7A6A5C]" />
              Bookings
            </Link>

            <Link
              href="/admin/ownerRequest"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-medium uppercase tracking-wider text-[#666666] hover:text-[#1A1A1A] hover:bg-[#FDFCFB] transition"
            >
              <UserCheck size={16} className="text-[#7A6A5C]" />
              Owner Requests
            </Link>
          </nav>
        </div>

        {/* Logout Action */}
        <div className="pt-6 border-t border-[#E5E2DE]">
          <Link href="/home">
          <button
           className="w-full flex items-center justify-center gap-2 rounded-xl border border-[#E5E2DE] bg-[#F7F5F2] py-3 text-xs font-medium uppercase tracking-wider text-[#1A1A1A] transition hover:bg-[#E5E2DE]">
            <CircleArrowLeft size={15} />
            Home
          </button>
          </Link>
        </div>
      </aside>

      {/* Main Dashboard Content Area */}
      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs tracking-[0.25em] uppercase text-[#7A6A5C] font-semibold">
            Overview
          </p>
          <h1 className="mt-1 text-4xl font-normal font-serif tracking-tight text-[#1A1A1A]">
            Dashboard Metrics
          </h1>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-[#E5E2DE] bg-white p-6 shadow-sm">
            <DashboardCard
              title="Users"
              count={stats?.totalUsers}
              icon={Users}

            />
          </div>

          <div className="rounded-2xl border border-[#E5E2DE] bg-white p-6 shadow-sm">
            <DashboardCard
              title="Restaurants"
              count={stats?.totalRestaurants}
              icon={Utensils}
            />
          </div>

          <div className="rounded-2xl border border-[#E5E2DE] bg-white p-6 shadow-sm">
            <DashboardCard
              title="Bookings"
              count={stats?.totalBookings}
              icon={Calendar}
            />
          </div>
        </div>
      </main>
    </div>
    </>
  );
};

export default Page;