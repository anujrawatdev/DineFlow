// "use client";

// const userTable = ({users,loading , onDelete}) => {
  

//   return (
//     <div className="flex-1 min-h-screen bg-gray-100 p-8">

//       {/* Heading */}
//       <div className="flex items-center justify-between mb-8">
//         <div>
//           <h1 className="text-4xl font-bold text-gray-900">
//             Users Management
//           </h1>
//           <p className="text-gray-500 mt-1">
//             View and manage all registered users.
//           </p>
//         </div>

//         <div className="bg-white px-5 py-3 rounded-xl shadow">
//           <p className="text-sm text-gray-500">Total Users</p>
//           <h2 className="text-2xl font-bold text-amber-500">{users.length}</h2>
//         </div>
//       </div>

//       {/* Search */}
//       <div className="bg-white rounded-2xl shadow p-5 mb-6">
//         <input
//           type="text"
//           placeholder="Search users..."
//           className="w-full text-neutral-600 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-amber-500"
//         />
//       </div>

//       {/* Table */}
//       <div className="bg-white rounded-2xl shadow overflow-hidden">

//         <table className="w-full">

//           <thead className="bg-black text-white">

//             <tr>
//               <th className="text-left px-6 py-4">Name</th>
//               <th className="text-left px-6 py-4">Email</th>
//               <th className="text-left px-6 py-4">Role</th>
//               <th className="text-left px-6 py-4">Joined</th>
//               <th className="text-center px-6 py-4">Action</th>
//             </tr>

//           </thead>

//           <tbody>
//            {
//             users.map((user)=>(
//             <tr key={user._id} className="border-b hover:bg-gray-50 transition">
//               <td className="px-6 py-5 text-neutral-800 font-medium">
//                 {user.name}
//                 </td>
//               <td className="px-6 py-5 text-gray-600">
//                 {user.email}
//               </td>
//               <td className="px-6 py-5">
//                 <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">
//                   {user.role}
//                 </span>
//               </td>
//               <td className="px-6 py-5 text-gray-600">
//                 { new Date(user.createdAt).toLocaleDateString()}
//               </td>

//               <td className="px-6 py-5 text-center">
//                 <button 
//                 onClick={()=> onDelete(user._id)}
//                 className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition">
//                   Delete
//                 </button>
//               </td>
//             </tr>
//             ))
//            }
//           </tbody>

//         </table>

//       </div>

//     </div>
//   );
// };

// export default userTable;

"use client";

import React, { useState } from "react";
import { Search, Trash2, UserCheck, Shield, User as UserIcon } from "lucide-react";

const UserTable = ({ users = [], loading, onDelete }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter users based on search query
  const filteredUsers = users.filter(
    (user) =>
      user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Helper for role badge styling
  const getRoleBadgeStyle = (role) => {
    switch (role?.toLowerCase()) {
      case "admin":
        return "bg-[#1A1A1A] text-white";
      case "owner":
        return "bg-[#F7F5F2] text-[#7A6A5C] border border-[#E5E2DE]";
      default:
        return "bg-[#FDFCFB] text-[#666666] border border-[#E5E2DE]";
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
            User Management
          </h1>
          <p className="mt-1 text-sm text-[#666666] font-light">
            View, search, and manage registered user accounts across the platform.
          </p>
        </div>

        <div className="rounded-2xl border border-[#E5E2DE] bg-white px-6 py-4 shadow-sm self-start md:self-auto">
          <p className="text-xs uppercase tracking-wider font-semibold text-[#7A6A5C]">
            Total Users
          </p>
          <h2 className="text-2xl font-serif font-normal text-[#1A1A1A] mt-1">
            {users.length}
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
            placeholder="Search by name, email, or role..."
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
                  User
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                  Email Address
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                  Role
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                  Joined Date
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
                    colSpan={5}
                    className="px-6 py-12 text-center text-sm text-[#7A6A5C] font-serif"
                  >
                    Loading user entries...
                  </td>
                </tr>
              ) : filteredUsers.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-12 text-center text-sm text-[#666666] font-light"
                  >
                    No user accounts found matching your query.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr
                    key={user._id}
                    className="hover:bg-[#FDFCFB] transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-[#F7F5F2] border border-[#E5E2DE] flex items-center justify-center text-xs font-serif text-[#1A1A1A]">
                          {user.name?.charAt(0).toUpperCase()}
                        </div>
                        <span className="text-sm font-medium text-[#1A1A1A]">
                          {user.name}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-sm text-[#666666] font-light">
                      {user.email}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider ${getRoleBadgeStyle(
                          user.role
                        )}`}
                      >
                        {user.role}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-sm text-[#666666] font-light">
                      {user.createdAt
                        ? new Date(user.createdAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })
                        : "N/A"}
                    </td>

                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={()=>{
                          if(
                            confirm("are you sure you want to delete this user?")
                          )
                          {onDelete(user._id)}
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-red-600 hover:bg-red-50 border border-transparent hover:border-red-100 transition"
                        title="Delete User"
                      >
                        <Trash2 size={15} />
                        Delete
                      </button>
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

export default UserTable;