import React from "react";

const DashboardCard = ({title,count,emoji}) => {
  return (
    <div className="w-72 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            {title}
          </p>

          <h2 className="text-4xl font-bold text-black mt-3">
            {count}
          </h2>
        </div>

        <div className="w-16 h-16 rounded-2xl bg-amber-500 flex items-center justify-center shadow-md">
          <span className="text-3xl">{emoji}</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;