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
        const profileResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/profile`, {
          credentials: "include",
        });

        const user = await profileResponse.json();

        if (user.role !== "admin") {
          router.push("/home");
          return;
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/dashboard`, {
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
    
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#FDFCFB] text-[#1A1A1A]">
      
      <aside className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-[#E5E2DE] bg-white p-3 sm:p-5 lg:p-6 flex flex-col gap-4 lg:gap-6">
        <div>
          
          <div className="pb-2 border-b border-[#E5E2DE]">
            <h1 className="text-2xl font-serif tracking-tight text-[#1A1A1A]">
              DineFlow
            </h1>
            <p className="text-xs uppercase tracking-widest text-[#7A6A5C] font-semibold mt-1">
              Admin Portal
            </p>
          </div>

          
          <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pt-3 lg:pb-0 -mx-1 px-1">
            <Link
              href="/admin"
              className="shrink-0 whitespace-nowrap flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#F7F5F2] text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] transition"
            >
              <LayoutDashboard size={16} className="text-[#7A6A5C]" />
              Dashboard
            </Link>

            <Link
              href="/admin/users"
              className="shrink-0 whitespace-nowrap flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#F7F5F2] text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] transition"
            >
              <Users size={16} className="text-[#7A6A5C]" />
              Users
            </Link>

            <Link
              href="/admin/restaurants"
              className="shrink-0 whitespace-nowrap flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#F7F5F2] text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] transition"
            >
              <UtensilsCrossed size={16} className="text-[#7A6A5C]" />
              Restaurants
            </Link>

            <Link
              href="/admin/bookings"
              className="shrink-0 whitespace-nowrap flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#F7F5F2] text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] transition"
            >
              <Calendar size={16} className="text-[#7A6A5C]" />
              Bookings
            </Link>

            <Link
              href="/admin/ownerRequest"
              className="shrink-0 whitespace-nowrap flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#F7F5F2] text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] transition"
            >
              <UserCheck size={16} className="text-[#7A6A5C]" />
              Owner Requests
            </Link>
          </nav>
        </div>

        
        <div className="pt-4 border-t border-[#E5E2DE] flex justify-end lg:block">
          <Link href="/home">
          <button
           className="w-auto lg:w-full px-4 sm:px-5 flex items-center justify-center gap-2 rounded-xl border border-[#E5E2DE] bg-[#F7F5F2] py-2.5 sm:py-3 text-[11px] sm:text-xs font-medium uppercase tracking-wider text-[#1A1A1A] transition hover:bg-[#E5E2DE]">
            <CircleArrowLeft size={15} />
            Home
          </button>
          </Link>
        </div>
      </aside>

      
      <main className="flex-1 p-4 sm:p-6 md:p-8 lg:p-12 overflow-y-auto">
        
        <div className="mb-10">
          <p className="text-xs tracking-[0.25em] uppercase text-[#7A6A5C] font-semibold">
            Overview
          </p>
          <h1 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-normal font-serif tracking-tight text-[#1A1A1A]">
            Dashboard Metrics
          </h1>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          <div className="rounded-2xl border border-[#E5E2DE] bg-white p-4 sm:p-5 lg:p-6 shadow-sm">
            <DashboardCard
              title="Users"
              count={stats?.totalUsers}
              icon={Users}

            />
          </div>

          <div className="rounded-2xl border border-[#E5E2DE] bg-white p-4 sm:p-5 lg:p-6 shadow-sm">
            <DashboardCard
              title="Restaurants"
              count={stats?.totalRestaurants}
              icon={Utensils}
            />
          </div>

          <div className="rounded-2xl border border-[#E5E2DE] bg-white p-4 sm:p-5 lg:p-6 shadow-sm">
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