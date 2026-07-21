"use client";

import { usePathname } from "next/navigation";
import { UserCircle2 } from "lucide-react";

const pageTitles = {
  "/admin": "Dashboard",
  "/admin/users": "Users",
  "/admin/restaurants": "Restaurants",
  "/admin/bookings": "Bookings",
};

const AdminNavbar = () => {
  const pathname = usePathname();

  const title = pageTitles[pathname] || "Admin Panel";

  return (
    <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-50">
      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          {title}
        </h1>

        <p className="text-sm text-gray-500">
          Welcome to DineFlow Admin Panel
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <div className="text-right">
          <h2 className="font-semibold text-gray-800">
            Admin
          </h2>

          <p className="text-sm text-gray-500">
            Administrator
          </p>
        </div>

        <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
          <UserCircle2 size={30} className="text-white" />
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;