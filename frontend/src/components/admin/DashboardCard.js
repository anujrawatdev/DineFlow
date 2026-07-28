// import React from "react";

// const DashboardCard = ({title,count,emoji}) => {
//   return (
//     <div className="w-72 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 p-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <p className="text-sm text-gray-500 uppercase tracking-wide">
//             {title}
//           </p>

//           <h2 className="text-4xl font-bold text-black mt-3">
//             {count}
//           </h2>
//         </div>

//         <div className="w-16 h-16 rounded-2xl bg-amber-500 flex items-center justify-center shadow-md">
//           <span className="text-3xl">{emoji}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardCard;


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