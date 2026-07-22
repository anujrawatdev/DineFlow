"use client";

const userTable = () => {
  return (
    <div className="flex-1 min-h-screen bg-gray-100 p-8">

      {/* Heading */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Users Management
          </h1>
          <p className="text-gray-500 mt-1">
            View and manage all registered users.
          </p>
        </div>

        <div className="bg-white px-5 py-3 rounded-xl shadow">
          <p className="text-sm text-gray-500">Total Users</p>
          <h2 className="text-2xl font-bold text-amber-500">120</h2>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl shadow p-5 mb-6">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full text-neutral-600 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-amber-500"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-black text-white">

            <tr>
              <th className="text-left px-6 py-4">Name</th>
              <th className="text-left px-6 py-4">Email</th>
              <th className="text-left px-6 py-4">Role</th>
              <th className="text-left px-6 py-4">Joined</th>
              <th className="text-center px-6 py-4">Action</th>
            </tr>

          </thead>

          <tbody>

            <tr className="border-b hover:bg-gray-50 transition">
              <td className="px-6 py-5 text-neutral-800 font-medium">Anuj Rawat</td>
              <td className="px-6 py-5 text-gray-600">
                anuj@gmail.com
              </td>
              <td className="px-6 py-5">
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">
                  Admin
                </span>
              </td>
              <td className="px-6 py-5 text-gray-600">
                22 Jul 2026
              </td>

              <td className="px-6 py-5 text-center">
                <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition">
                  Delete
                </button>
              </td>
            </tr>

            <tr className="border-b hover:bg-gray-50 transition">
              <td className="px-6 py-5 font-medium text-neutral-800">Rahul Sharma</td>
              <td className="px-6 py-5 text-gray-600">
                rahul@gmail.com
              </td>
              <td className="px-6 py-5">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Customer
                </span>
              </td>
              <td className="px-6 py-5 text-gray-600">
                21 Jul 2026
              </td>

              <td className="px-6 py-5 text-center">
                <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition">
                  Delete
                </button>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition">
              <td className="px-6 py-5 font-medium text-neutral-800">Aman Verma</td>
              <td className="px-6 py-5 text-gray-600">
                aman@gmail.com
              </td>
              <td className="px-6 py-5">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  Owner
                </span>
              </td>
              <td className="px-6 py-5 text-gray-600">
                20 Jul 2026
              </td>

              <td className="px-6 py-5 text-center">
                <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition">
                  Delete
                </button>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default userTable;