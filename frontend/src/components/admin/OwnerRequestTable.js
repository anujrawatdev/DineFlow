import React from "react";
import { Check, X } from "lucide-react";

const OwnerRequestTable = ({ requests = [], onApprove, onReject }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-5 border-b">
        <h2 className="text-xl font-semibold text-gray-800">Owner Requests</h2>
        <p className="text-sm text-gray-500">
          Review and manage restaurant owner applications
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                Owner
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                Restaurant
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                Phone
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                Address
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                Status
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {requests.length > 0 ? (
              requests.map((request) => (
                <tr
                  key={request._id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-800">
                        {request.user?.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {request.user?.email}
                      </p>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-gray-700">
                    {request.restaurantName}
                  </td>

                  <td className="px-6 py-4 text-gray-700">{request.phone}</td>

                  <td className="px-6 py-4 text-gray-700">{request.address}</td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        request.status === "approved"
                          ? "bg-green-100 text-green-700"
                          : request.status === "rejected"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {request.status
                        ? request.status.charAt(0).toUpperCase() +
                          request.status.slice(1)
                        : "Pending"}
                    </span>
                  </td>

                  <td className="px-6 py-4 flex gap-3">
                    <button
                      onClick={() => onApprove(request._id)}
                      className="flex items-center gap-1 px-4 py-2 rounded-lg bg-green-600 text-white text-sm hover:bg-green-700"
                    >
                      <Check size={16} />
                      Approve
                    </button>

                    <button
                      onClick={() => onReject(request._id)}
                      className="flex items-center gap-1 px-4 py-2 rounded-lg bg-red-600 text-white text-sm hover:bg-red-700"
                    >
                      <X size={16} />
                      Reject
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-10 text-gray-500">
                  No owner requests found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OwnerRequestTable;
