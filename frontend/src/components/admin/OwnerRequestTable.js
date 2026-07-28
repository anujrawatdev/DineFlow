// import React from "react";
// import { Check, X } from "lucide-react";
// import { div } from "framer-motion/client";

// const OwnerRequestTable = ({ requests = [], onApprove, onReject }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-md overflow-hidden">
//       <div className="p-5 border-b">
//         <h2 className="text-xl font-semibold text-gray-800">Owner Requests</h2>
//         <p className="text-sm text-gray-500">
//           Review and manage restaurant owner applications
//         </p>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full text-left">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="px-6 py-4 text-sm font-semibold text-gray-600">
//                 Owner
//               </th>

//               <th className="px-6 py-4 text-sm font-semibold text-gray-600">
//                 Restaurant
//               </th>

//               <th className="px-6 py-4 text-sm font-semibold text-gray-600">
//                 Phone
//               </th>

//               <th className="px-6 py-4 text-sm font-semibold text-gray-600">
//                 Address
//               </th>

//               <th className="px-6 py-4 text-sm font-semibold text-gray-600">
//                 Status
//               </th>

//               <th className="px-6 py-4 text-sm font-semibold text-gray-600">
//                 Action
//               </th>
//             </tr>
//           </thead>

//           <tbody>
//             {requests.length > 0 ? (
//               requests.map((request) => (
//                 <tr
//                   key={request._id}
//                   className="border-b hover:bg-gray-50 transition"
//                 >
//                   <td className="px-6 py-4">
//                     <div>
//                       <p className="font-medium text-gray-800">
//                         {request.user?.name}
//                       </p>
//                       <p className="text-sm text-gray-500">
//                         {request.user?.email}
//                       </p>
//                     </div>
//                   </td>

//                   <td className="px-6 py-4 text-gray-700">
//                     {request.restaurantName}
//                   </td>

//                   <td className="px-6 py-4 text-gray-700">{request.phone}</td>

//                   <td className="px-6 py-4 text-gray-700">{request.address}</td>

//                   <td className="px-6 py-4">
//                     <span
//                       className={`px-3 py-1 rounded-full text-xs font-medium ${
//                         request.status === "approved"
//                           ? "bg-green-300 text-green-800"
//                           : request.status === "rejected"
//                             ? "bg-red-300 text-red-800"
//                             : "bg-yellow-200 text-yellow-800"
//                       }`}
//                     >
//                       {request.status
//                         ? request.status.charAt(0).toUpperCase() +
//                           request.status.slice(1)
//                         : "Pending"}
//                     </span>
//                   </td>

//                   <td className="px-6 py-4 ">
//                     {request.status === "pending"?(
//                       <div className="flex gap-3">
//                       <button
//                       onClick={() => onApprove(request._id)}
//                       className="flex items-center gap-1 px-4 py-2 rounded-lg bg-green-600 text-white text-sm hover:bg-green-700"
//                     >
//                       <Check size={16} />
//                       Approve
//                     </button>

//                     <button
//                       onClick={() => onReject(request._id)}
//                       className="flex items-center gap-1 px-4 py-2 rounded-lg bg-red-600 text-white text-sm hover:bg-red-700"
//                     >
//                       <X size={16} />
//                       Reject
//                     </button>
//                     </div>
//                     ):(
//                       <span className="px-2 py-1 rounded-xl bg-blue-200 text-blue-900 text-sm">
//                         Checked
//                       </span>
//                     )}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="6" className="text-center py-10 text-gray-500">
//                   No owner requests found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default OwnerRequestTable;

"use client";

import React, { useState } from "react";
import { Search, Check, X, Phone, MapPin } from "lucide-react";

const OwnerRequestTable = ({ requests = [], loading, onApprove, onReject }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter requests based on search query
  const filteredRequests = requests.filter(
    (request) =>
      request.user?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.user?.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.restaurantName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.phone?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Helper for status badge styling
  const getStatusBadgeStyle = (status) => {
    switch (status?.toLowerCase()) {
      case "approved":
        return "bg-[#F2F7F4] text-[#2D5A3F] border border-[#CDE3D5]";
      case "rejected":
        return "bg-[#FDF2F2] text-[#9B2C2C] border border-[#F8D7D7]";
      default:
        // Pending
        return "bg-[#FFFDF5] text-[#975A16] border border-[#FEEBC8]";
    }
  };

  return (
    <div className="flex-1 min-h-screen bg-[#FDFCFB] p-8 md:p-12 text-[#1A1A1A]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-[#7A6A5C] font-semibold">
            Administration
          </p>
          <h1 className="mt-1 text-4xl font-normal font-serif tracking-tight text-[#1A1A1A]">
            Owner Applications
          </h1>
          <p className="mt-1 text-sm text-[#666666] font-light">
            Review, verify, and approve restaurant partnership requests.
          </p>
        </div>

        <div className="rounded-2xl border border-[#E5E2DE] bg-white px-6 py-4 shadow-sm self-start md:self-auto">
          <p className="text-xs uppercase tracking-wider font-semibold text-[#7A6A5C]">
            Total Requests
          </p>
          <h2 className="text-2xl font-serif font-normal text-[#1A1A1A] mt-1">
            {requests.length}
          </h2>
        </div>
      </div>

      {/* Search Input */}
      <div className="rounded-2xl border border-[#E5E2DE] bg-white p-4 mb-6 shadow-sm">
        <div className="flex items-center gap-3 px-2">
          <Search size={18} className="text-[#7A6A5C]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by owner name, email, or restaurant..."
            className="w-full bg-transparent text-sm text-[#1A1A1A] placeholder-[#A39A90] outline-none"
          />
        </div>
      </div>

      {/* Table Container */}
      <div className="rounded-2xl border border-[#E5E2DE] bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#E5E2DE] bg-[#F7F5F2]">
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                  Applicant
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                  Restaurant Name
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                  Phone
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                  Address
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                  Status
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C] text-right">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#E5E2DE]">
              {loading ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-12 text-center text-sm text-[#7A6A5C] font-serif"
                  >
                    Loading owner applications...
                  </td>
                </tr>
              ) : filteredRequests.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-12 text-center text-sm text-[#666666] font-light"
                  >
                    No pending or processed requests found.
                  </td>
                </tr>
              ) : (
                filteredRequests.map((request) => (
                  <tr
                    key={request._id}
                    className="hover:bg-[#FDFCFB] transition-colors"
                  >
                    {/* Applicant Info */}
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-[#1A1A1A]">
                          {request.user?.name || "Unknown Applicant"}
                        </p>
                        <p className="text-xs text-[#7A6A5C] font-light mt-0.5">
                          {request.user?.email}
                        </p>
                      </div>
                    </td>

                    {/* Restaurant Name */}
                    <td className="px-6 py-4 text-sm font-medium text-[#1A1A1A]">
                      {request.restaurantName}
                    </td>

                    {/* Phone */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-sm text-[#666666] font-light">
                        <Phone size={13} className="text-[#7A6A5C]" />
                        <span>{request.phone || "N/A"}</span>
                      </div>
                    </td>

                    {/* Address */}
                    <td className="px-6 py-4 max-w-xs truncate">
                      <div className="flex items-center gap-1.5 text-sm text-[#666666] font-light truncate">
                        <MapPin size={13} className="text-[#7A6A5C] shrink-0" />
                        <span className="truncate">{request.address || "N/A"}</span>
                      </div>
                    </td>

                    {/* Status Badge */}
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider ${getStatusBadgeStyle(
                          request.status
                        )}`}
                      >
                        {request.status || "Pending"}
                      </span>
                    </td>

                    {/* Action Buttons */}
                    <td className="px-6 py-4 text-right">
                      {request.status === "pending" || !request.status ? (
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => {
                              if(
                                confirm("are you sure you want to confirm?")
                              )
                              {onApprove(request._id)}
                            }}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-medium bg-[#1A1A1A] text-white hover:bg-[#333333] transition"
                            title="Approve Application"
                          >
                            <Check size={14} />
                            Approve
                          </button>

                          <button
                            onClick={() => {
                              if(
                                confirm("are you sure you want to reject?")
                              )
                              {onReject(request._id)}
                            }}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-medium text-red-600 border border-red-200 hover:bg-red-50 transition"
                            title="Reject Application"
                          >
                            <X size={14} />
                            Reject
                          </button>
                        </div>
                      ) : (
                        <span className="text-xs font-light text-[#A39A90] italic">
                          Processed
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OwnerRequestTable;
