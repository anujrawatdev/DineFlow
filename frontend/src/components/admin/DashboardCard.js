


import React from "react";
import { Utensils } from "lucide-react";
const DashboardCard = ({ title, count, icon:Icon = Utensils }) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-xs uppercase tracking-wider font-semibold text-[#7A6A5C]">
          {title}
        </p>

        <h2 className="text-3xl font-serif font-normal text-[#1A1A1A] mt-2">
          {count ?? 0}
        </h2>
      </div>

      <div className="w-12 h-12 rounded-xl bg-[#F7F5F2] border border-[#E5E2DE] flex items-center justify-center text-xl shadow-none">
        <Icon size={22}/>
      </div>
    </div>
  );
};

export default DashboardCard;