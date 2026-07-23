"use client";

const RestaurantTable = ({restaurants}) => {
  console.log(restaurants);
  return (
    <div className="flex-1 min-h-screen bg-gray-100 p-8">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Restaurant Management
          </h1>
          <p className="text-gray-500 mt-1">
            Manage all registered restaurants.
          </p>
        </div>

        <div className="bg-white px-6 py-4 rounded-2xl shadow">
          <p className="text-sm text-gray-500">
            Total Restaurants
          </p>
          <h2 className="text-3xl font-bold text-amber-500">
            {restaurants.length}
          </h2>
        </div>
      </div>


      {/* Search */}
      <div className="bg-white p-5 rounded-2xl  shadow mb-6">
        <input
          type="text"
          placeholder="Search restaurants..."
          className="
          text-neutral-800
          w-full 
          border
          border-gray-300 
          rounded-xl 
          px-4 
          py-3 
          outline-none
          focus:border-amber-500
          "
        />
      </div>


      {/* Table */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-black text-white">

            <tr>
              <th className="px-6 py-4 text-left">
                Image
              </th>

              <th className="px-6 py-4 text-left">
                Restaurant
              </th>

              <th className="px-6 py-4 text-left">
                Owner
              </th>

              <th className="px-6 py-4 text-left">
                Price
              </th>

              <th className="px-6 py-4 text-left">
                Status
              </th>

              <th className="px-6 py-4 text-center">
                Action
              </th>

            </tr>

          </thead>


          <tbody>
            
            {
              restaurants.map((restaurant)=>(
                <tr key={restaurant._id} className="border-b hover:bg-gray-50 transition">

              <td className="px-6 py-4">

                <img
                  src={`http://localhost:5000/${restaurant.restaurantImage}`}
                  className="
                  w-16 
                  h-16 
                  rounded-xl 
                  object-cover
                  "
                />

              </td>


              <td className="px-6 py-4 text-neutral-900 font-semibold">
                {restaurant.name}
              </td>


              <td className="px-6 py-4 text-gray-800">
                {restaurant.owner?.name||"N/A"}
              </td>


              <td className="px-6 py-4 text-gray-700">
                {restaurant.price}
              </td>


              <td className="px-6 py-4">

                <span
                  className="
                  bg-green-100
                  text-green-700
                  px-3
                  py-1
                  rounded-full
                  text-sm
                  "
                >
                  active
                </span>

              </td>


              <td className="px-6 py-4 text-center">

                <button
                  className="
                  bg-red-500
                  hover:bg-red-600
                  text-white
                  px-5
                  py-2
                  rounded-lg
                  transition
                  "
                >
                  Delete
                </button>

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


export default RestaurantTable;