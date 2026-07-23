"use client";

const BookingTable = ({bookings}) => {
  console.log(bookings);
  return (
    <div className="flex-1 min-h-screen bg-gray-100 p-8">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Booking Management
          </h1>
          <p className="text-gray-500 mt-1">
            View and manage all restaurant bookings.
          </p>
        </div>

        <div className="bg-white px-6 py-4 rounded-2xl shadow">
          <p className="text-sm text-gray-500">
            Total Bookings
          </p>
          <h2 className="text-3xl font-bold text-amber-500">
            {bookings.length}
          </h2>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white p-5 rounded-2xl shadow mb-6">
        <input
          type="text"
          placeholder="Search bookings..."
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-neutral-800 outline-none focus:border-amber-500"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-black text-white">
            <tr>
              <th className="px-6 py-4 text-left">Customer</th>
              <th className="px-6 py-4 text-left">Restaurant</th>
              <th className="px-6 py-4 text-left">Guests</th>
              <th className="px-6 py-4 text-left">Date</th>
              <th className="px-6 py-4 text-left">Time</th>
              <th className="px-6 py-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {
              bookings.map((booking)=>(
                 <tr key={booking._id} className="border-b hover:bg-gray-50 transition">
              <td className="px-6 py-5">
                <div>
                  <p className="font-semibold text-gray-900">
                    {booking.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {booking.email}
                  </p>
                </div>
              </td>

              <td className="px-6 py-5 text-gray-800">
                {booking.restaurant?(
                  <span>
                    {booking.restaurant.name}
                  </span>
                ):(
                  <span className="text-red-600">
                    Restaurnt Deleted
                  </span>
                )}
              </td>

              <td className="px-6 py-5 text-gray-700">
                {booking.guests}
              </td>

              <td className="px-6 py-5 text-gray-700">
                {new Date(booking.createdAt).toLocaleDateString()}
              </td>

              <td className="px-6 py-5 text-gray-700">
                {booking.bookingTime}
              </td>

              <td className="px-6 py-5">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  {booking.status}
                </span>
              </td>

            </tr>
              ))
            }
          </tbody>

        </table>

      </div>
    </div>
  );
};

export default BookingTable;