// "use client";

// import OwnerRequestTable from "@/components/admin/OwnerRequestTable";
// import { Store, Clock } from "lucide-react";
// import { useState,useEffect } from "react";

// const OwnerRequestPage = () => {
//   const [requests, setRequests] = useState([]);

//   useEffect(() => {
//     const allRequest = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:5000/owner-requests",{ 
//             method: "GET",
//             credentials: "include" },
//         );
//         console.log("Response Status:", response.status);

//         if (!response.ok) {
//         const errorData = await response.json();
//         console.error("Backend Error Response:", errorData);
//         return;
//       }

//         const data = await response.json();
//         console.log("Fetched Requests Data:", data);

//         if (data && Array.isArray(data.ownerRequests)) {
//         setRequests(data.ownerRequests);
//       } else if (Array.isArray(data)) {
//         setRequests(data); 
//       }
//       } catch (error) {
//         console.log("error:",error);
//       }
//     };
//     allRequest();
//   }, []);

//   const handleApprove = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:5000/owner-requests/${id}/approve`, {
//         method: "PATCH",
//         credentials: "include",
//       });

//       if (response.ok) {
        
//         setRequests((prev) => prev.filter((req) => req._id !== id));

//       } else {
//         const err = await response.json();
//         alert(err.message || "Failed to approve request");
//       }
//     } catch (error) {
//       console.error("Approve Error:", error);
//     }
//   };

//   const handleReject = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:5000/owner-requests/${id}/reject`, {
//         method: "PATCH",
//         credentials: "include",
//       });

//       if (response.ok) {
        
//         setRequests((prev) => prev.filter((req) => req._id !== id));
//       } else {
//         const err = await response.json();
//         alert(err.message || "Failed to reject request");
//       }
//     } catch (error) {
//       console.error("Reject Error:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-neutral-100 p-8">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-8">
//         <div>
//           <h1 className="text-4xl font-bold font-serif text-black">
//             Owner Requests
//           </h1>

//           <p className="text-neutral-600 mt-2">
//             Manage restaurant owner applications
//           </p>
//         </div>

//         <div className="bg-white shadow-md rounded-xl px-5 py-3 flex items-center gap-3 border">
//           <div className="bg-amber-100 p-3 rounded-full">
//             <Clock size={22} className="text-amber-600" />
//           </div>

//           <div>
//             <p className="text-sm text-gray-500">Pending Requests</p>

//             <h2 className="text-xl text-neutral-800 font-bold">{requests.length}</h2>
//           </div>
//         </div>
//       </div>

//       {/* Info Card */}
//       <div className="bg-black rounded-2xl p-6 mb-8 flex items-center justify-between">
//         <div>
//           <h2 className="text-2xl font-bold text-white">
//             Become a DineFlow Partner 🍽️
//           </h2>

//           <p className="text-neutral-300 mt-2">
//             Review restaurant owner applications and approve trusted partners.
//           </p>
//         </div>

//         <Store size={60} className="text-amber-500" />
//       </div>

//       {/* Table */}
//       <div>
//         <OwnerRequestTable requests={requests}
//         onApprove={handleApprove}
//         onReject={handleReject} />
//       </div>
//     </div>
//   );
// };

// export default OwnerRequestPage;

"use client";

import OwnerRequestTable from "@/components/admin/OwnerRequestTable";
import { Store, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const OwnerRequestPage = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/owner-requests", {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Backend Error Response:", errorData);
          return;
        }

        const data = await response.json();

        if (data && Array.isArray(data.ownerRequests)) {
          setRequests(data.ownerRequests);
        } else if (Array.isArray(data)) {
          setRequests(data);
        }
      } catch (error) {
        console.error("Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const handleApprove = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/owner-requests/${id}/approve`,
        {
          method: "PATCH",
          credentials: "include",
        }
      );

      if (response.ok) {
        // Update request status locally or filter out depending on desired flow
        setRequests((prev) =>
          prev.map((req) =>
            req._id === id ? { ...req, status: "approved" } : req
          )
        );
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
      const response = await fetch(
        `http://localhost:5000/owner-requests/${id}/reject`,
        {
          method: "PATCH",
          credentials: "include",
        }
      );

      if (response.ok) {
        setRequests((prev) =>
          prev.map((req) =>
            req._id === id ? { ...req, status: "rejected" } : req
          )
        );
      } else {
        const err = await response.json();
        alert(err.message || "Failed to reject request");
      }
    } catch (error) {
      console.error("Reject Error:", error);
    }
  };

  const pendingCount = requests.filter(
    (req) => !req.status || req.status === "pending"
  ).length;

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Banner Section */}
        <div className="relative overflow-hidden rounded-2xl bg-[#1A1A1A] p-8 md:p-10 text-white mb-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl z-10">
            <p className="text-xs tracking-[0.25em] uppercase text-[#A39A90] font-semibold mb-2">
              Partner Operations
            </p>
            <h1 className="text-3xl md:text-4xl font-serif font-normal text-white tracking-tight">
              DineFlow Partnership Requests 🍽️
            </h1>
            <p className="mt-2 text-sm text-[#CCCCCC] font-light leading-relaxed">
              Review incoming applications from prospective restaurant owners.
              Verify business details and approve eligible vendors for setup.
            </p>
          </div>

          <div className="flex items-center gap-4 self-stretch md:self-auto justify-between md:justify-end border-t md:border-t-0 border-[#333333] pt-4 md:pt-0">
            <div className="flex items-center gap-3 bg-[#2A2A2A] px-5 py-3 rounded-xl border border-[#3A3A3A]">
              <Clock size={20} className="text-[#CDE3D5]" />
              <div>
                <p className="text-xs text-[#A39A90] uppercase tracking-wider font-semibold">
                  Pending Review
                </p>
                <p className="text-xl font-serif text-white">{pendingCount}</p>
              </div>
            </div>

            <div className="p-3 bg-[#2A2A2A] rounded-xl border border-[#3A3A3A] hidden sm:block">
              <Store size={32} className="text-white" />
            </div>
          </div>
        </div>

        {/* Request Table */}
        <div className="-mx-8 md:-mx-12">
          <OwnerRequestTable
            requests={requests}
            loading={loading}
            onApprove={handleApprove}
            onReject={handleReject}
          />
        </div>
      </div>
    </div>
  );
};

export default OwnerRequestPage;
