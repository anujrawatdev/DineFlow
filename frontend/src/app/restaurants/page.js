// "use client";
// import React, { useEffect, useState } from "react";
// import RestaurantsCard from "../cards/RestaurantsCard";
// import LandingPage from "./landingPage";
// import Footer from "../home/Footer/page";
// import Navbar from "../Navbar/Navbar";
// import { filter } from "framer-motion/client";
// const page = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [allRestaurants, setAllRestaurants] = useState([]);

//   useEffect(() => {
//     const fetchAllRestaurants = async () => {
//       const response = await fetch("http://localhost:5000/restaurants", {
//         method: "GET",
//         credentials: "include",
//       });
//       const data = await response.json();
//       setAllRestaurants(data);
//     };

//     fetchAllRestaurants();
//   }, []);

//   const filterRestaurants = allRestaurants.filter((restaurant)=>{
//      return restaurant.name
//      .toLowerCase()
//      .includes(searchTerm.toLowerCase());
//   })

//   return (
//     <div>
//       <Navbar />
//       <main className="min-h-screen bg-neutral-300">
//         <LandingPage 
//         searchTerm={searchTerm}
//         setSearchTerm={setSearchTerm}
//          />

//         <section className="flex flex-wrap gap-5 justify-center px-10 py-10">
//           {filterRestaurants.map((restaurant) => (
//             <RestaurantsCard key={restaurant._id} restaurant={restaurant} />
//           ))}
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default page;

"use client";
import React, { useEffect, useState } from "react";
import RestaurantsCard from "../cards/RestaurantsCard";
import LandingPage from "./landingPage";
import Footer from "../home/Footer/page";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    const fetchAllRestaurants = async () => {
      try {
        const response = await fetch("http://localhost:5000/restaurants", {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        setAllRestaurants(data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchAllRestaurants();
  }, []);

  const filterRestaurants = allRestaurants.filter((restaurant) => {
    const term = searchTerm.toLowerCase();
    return (
      restaurant.name?.toLowerCase().includes(term) ||
      restaurant.cuisine?.toLowerCase().includes(term) ||
      restaurant.location?.city?.toLowerCase().includes(term)
    );
  });

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-stone-900 font-sans selection:bg-stone-300">
      <Navbar />
      
      <main className="pt-[10vh]">
        <LandingPage
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {/* RESTAURANT GRID SECTION */}
        <section className="max-w-7xl mx-auto px-6 md:px-16 py-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4 border-b border-stone-200/80 pb-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-stone-500 font-semibold block mb-2">
                Curated Collection
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-stone-900 font-normal">
                {searchTerm ? `Results for "${searchTerm}"` : "All Establishments"}
              </h2>
            </div>
            <p className="text-xs uppercase tracking-widest text-stone-500 font-sans">
              Showing {filterRestaurants.length} Places
            </p>
          </div>

          {filterRestaurants.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filterRestaurants.map((restaurant, index) => (
                <motion.div
                  key={restaurant._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <RestaurantsCard restaurant={restaurant} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center space-y-4">
              <p className="font-serif text-2xl text-stone-600 font-light">
                No dining places match your query.
              </p>
              <button
                onClick={() => setSearchTerm("")}
                className="text-xs uppercase tracking-[0.2em] text-stone-900 border-b border-stone-900 pb-1 hover:text-stone-500 transition-colors"
              >
                Clear Search Filter
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Page;
