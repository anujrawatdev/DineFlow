"use client";

import React, { useState } from "react";
import { Search, Trash2, Mail, CalendarDays } from "lucide-react";

const UserTable = ({ users = [], loading, onDelete }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const getRoleBadgeStyle = (role) => {
    switch (role?.toLowerCase()) {
      case "admin":
        return "bg-[#1A1A1A] text-white border border-[#1A1A1A]";
      case "owner":
        return "bg-[#F7F5F2] text-[#7A6A5C] border border-[#E5E2DE]";
      default:
        return "bg-[#FDFCFB] text-[#666666] border border-[#E5E2DE]";
    }
  };

  const formatDate = (date) => {
    if (!date) return "N/A";
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-3 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-5 mb-6 sm:mb-8">
          <div className="min-w-0">
            <p className="text-[10px] sm:text-xs tracking-[0.18em] sm:tracking-[0.25em] uppercase text-[#7A6A5C] font-semibold">
              Administration
            </p>

            <h1 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-normal font-serif tracking-tight text-[#1A1A1A] leading-tight">
              User Management
            </h1>

            <p className="mt-2 text-sm sm:text-base text-[#666666] font-light leading-relaxed max-w-2xl">
              View, search, and manage registered user accounts across the
              platform.
            </p>
          </div>

          <div className="w-full md:w-auto rounded-2xl border border-[#E5E2DE] bg-white px-4 sm:px-6 py-3 sm:py-4 shadow-sm">
            <p className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-[#7A6A5C]">
              Total Users
            </p>

            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#1A1A1A] mt-1">
              {users.length}
            </h2>
          </div>
        </div>

        <div className="rounded-2xl border border-[#E5E2DE] bg-white p-3 sm:p-4 mb-5 sm:mb-6 shadow-sm">
          <div className="flex items-center gap-2 sm:gap-3 px-1 sm:px-2">
            <Search size={18} className="text-[#7A6A5C] shrink-0" />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search users..."
              className="w-full bg-transparent text-sm sm:text-base text-[#1A1A1A] placeholder-[#A39A90] outline-none"
            />
          </div>
        </div>

        <div className="hidden md:block rounded-2xl border border-[#E5E2DE] bg-white shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E5E2DE] bg-[#F7F5F2]">
                  <th className="px-5 lg:px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                    User
                  </th>

                  <th className="px-5 lg:px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                    Email Address
                  </th>

                  <th className="px-5 lg:px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                    Role
                  </th>

                  <th className="px-5 lg:px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C]">
                    Joined Date
                  </th>

                  <th className="px-5 lg:px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#7A6A5C] text-right">
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
                      <td className="px-5 lg:px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#F7F5F2] border border-[#E5E2DE] flex items-center justify-center text-sm font-serif text-[#1A1A1A]">
                            {user.name?.charAt(0).toUpperCase()}
                          </div>

                          <span className="text-sm font-medium text-[#1A1A1A]">
                            {user.name}
                          </span>
                        </div>
                      </td>

                      <td className="px-5 lg:px-6 py-4 text-sm text-[#666666] font-light">
                        {user.email}
                      </td>

                      <td className="px-5 lg:px-6 py-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider ${getRoleBadgeStyle(
                            user.role,
                          )}`}
                        >
                          {user.role}
                        </span>
                      </td>

                      <td className="px-5 lg:px-6 py-4 text-sm text-[#666666] font-light">
                        {formatDate(user.createdAt)}
                      </td>

                      <td className="px-5 lg:px-6 py-4 text-right">
                        {user?.role !== "admin" && (
                          <button
                            onClick={() => {
                              if (
                                confirm(
                                  "Are you sure you want to delete this user?",
                                )
                              ) {
                                onDelete(user._id);
                              }
                            }}
                            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-red-600 hover:bg-red-50 border border-transparent hover:border-red-100 transition"
                            title="Delete User"
                          >
                            <Trash2 size={15} />
                            Delete
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="md:hidden space-y-3">
          {loading ? (
            <div className="rounded-2xl border border-[#E5E2DE] bg-white p-8 text-center text-sm text-[#7A6A5C] font-serif shadow-sm">
              Loading user entries...
            </div>
          ) : filteredUsers.length === 0 ? (
            <div className="rounded-2xl border border-[#E5E2DE] bg-white p-8 text-center text-sm text-[#666666] font-light shadow-sm">
              No user accounts found matching your query.
            </div>
          ) : (
            filteredUsers.map((user) => (
              <div
                key={user._id}
                className="rounded-2xl border border-[#E5E2DE] bg-white p-4 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-11 h-11 rounded-full bg-[#F7F5F2] border border-[#E5E2DE] flex items-center justify-center text-sm font-serif text-[#1A1A1A] shrink-0">
                      {user.name?.charAt(0).toUpperCase()}
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-[#1A1A1A] truncate">
                        {user.name}
                      </h3>

                      <span
                        className={`mt-1 inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider ${getRoleBadgeStyle(
                          user.role,
                        )}`}
                      >
                        {user.role}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex items-start gap-2 text-[#666666]">
                    <Mail
                      size={16}
                      className="text-[#7A6A5C] shrink-0 mt-0.5"
                    />
                    <span className="break-all leading-relaxed">
                      {user.email}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[#666666]">
                    <CalendarDays
                      size={16}
                      className="text-[#7A6A5C] shrink-0"
                    />
                    <span>Joined {formatDate(user.createdAt)}</span>
                  </div>
                </div>

                {user?.role?.toLowerCase() !== "admin" && (
                  <button
                    onClick={() => {
                      if (
                        confirm("Are you sure you want to delete this user?")
                      ) {
                        onDelete(user._id);
                      }
                    }}
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600 transition hover:bg-red-100 active:scale-[0.99]"
                  >
                    <Trash2 size={16} />
                    Delete User
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default UserTable;
