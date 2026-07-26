"use client";

import OwnerRequestTable from "@/components/admin/OwnerRequestTable";
import { Store, Clock } from "lucide-react";
import { useState,useEffect } from "react";

const OwnerRequestPage = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const allRequest = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/owner-requests",{ 
            method: "GET",
            credentials: "include" },
        );
        console.log("Response Status:", response.status);

        if (!response.ok) {
        const errorData = await response.json();
        console.error("Backend Error Response:", errorData);
        return;
      }

        const data = await response.json();
        console.log("Fetched Requests Data:", data);

        if (data && Array.isArray(data.ownerRequests)) {
        setRequests(data.ownerRequests);
      } else if (Array.isArray(data)) {
        setRequests(data); // Fallback in case response structure changes
      }
      } catch (error) {
        console.log("error:",error);
      }
    };
    allRequest();
  }, []);

  const handleApprove = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/owner-requests/${id}/approve`, {
        method: "PATCH",
        credentials: "include",
      });

      if (response.ok) {
        // Remove the approved request from UI (since list shows pending)
        setRequests((prev) => prev.filter((req) => req._id !== id));
      } else {
        const err = await response.json();
        alert(err.message || "Failed to approve request");
      }
    } catch (error) {
      console.error("Approve Error:", error);
    }
  };

  const handleReject = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/owner-requests/${id}/reject`, {
        method: "PATCH",
        credentials: "include",
      });

      if (response.ok) {
        
        setRequests((prev) => prev.filter((req) => req._id !== id));
      } else {
        const err = await response.json();
        alert(err.message || "Failed to reject request");
      }
    } catch (error) {
      console.error("Reject Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold font-serif text-black">
            Owner Requests
          </h1>

          <p className="text-neutral-600 mt-2">
            Manage restaurant owner applications
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl px-5 py-3 flex items-center gap-3 border">
          <div className="bg-amber-100 p-3 rounded-full">
            <Clock size={22} className="text-amber-600" />
          </div>

          <div>
            <p className="text-sm text-gray-500">Pending Requests</p>

            <h2 className="text-xl text-neutral-800 font-bold">{requests.length}</h2>
          </div>
        </div>
      </div>

      {/* Info Card */}
      <div className="bg-black rounded-2xl p-6 mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Become a DineFlow Partner 🍽️
          </h2>

          <p className="text-neutral-300 mt-2">
            Review restaurant owner applications and approve trusted partners.
          </p>
        </div>

        <Store size={60} className="text-amber-500" />
      </div>

      {/* Table */}
      <div>
        <OwnerRequestTable requests={requests}
        onApprove={handleApprove}
        onReject={handleReject} />
      </div>
    </div>
  );
};

export default OwnerRequestPage;
