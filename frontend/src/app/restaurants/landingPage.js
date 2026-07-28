// import React from "react";
// import { Search } from "lucide-react";

// const LandingPage = ({searchTerm,setSearchTerm}) => {

//   return (
//     <section
//       className="
//       relative
//       h-[80vh]
//       w-full
//       overflow-hidden
//       "
//     >
//       {/* Background Image */}
//       <img
//         src="images/Background-form.jpg"
//         alt="Restaurant"
//         className="
//         absolute
//         inset-0
//         w-full
//         h-full
//         object-cover
//         "
//       />

//       {/* Dark Overlay */}
//       <div
//         className="
//         absolute
//         inset-0
//         bg-black/60
//         "
//       />

//       {/* Content */}
//       <div
//         className="
//         relative
//         z-10
//         h-full
//         flex
//         flex-col
//         justify-center
//         items-center
//         text-center
//         px-6
//         "
//       >
//         <h1
//           className="
//           text-5xl
//           md:text-7xl
//           font-bold
//           text-white
//           mb-6
//           "
//         >
//           Discover Amazing
//           <span className="text-amber-400"> Restaurants</span>
//         </h1>

//         <p
//           className="
//           text-lg
//           md:text-xl
//           text-gray-300
//           max-w-2xl
//           mb-8
//           "
//         >
//           Explore top-rated restaurants, discover new cuisines, and book your
//           perfect dining experience.
//         </p>

//         {/* Search Bar UI */}
//         <div
//           className="
//           relative
//           w-full
//           max-w-3xl
//           mx-auto
//           "
//         >
          
// <Search
//     size={28}
//     className="absolute left-5 top-1/2 -translate-y-1/2 z-10 text-gray-300 pointer-events-none"
//   />
//           <input
//           value={searchTerm}
//           onChange={(e)=> setSearchTerm(e.target.value)}
//             type="text"
//             placeholder=" Search restaurants, cuisines or locations..."
//             className="
//             w-full
//             h-16
//             rounded-full
//             bg-white/10
//             backdrop-blur-xl
//             border
//             border-white/20
//             pl-14
//             pr-6
//             text-white
//             placeholder:text-gray-300
//             outline-none
//             focus:border-amber-400
//             transition
//             "
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LandingPage;

"use client";
import React from "react";
import { Search } from "lucide-react";

const LandingPage = ({ searchTerm, setSearchTerm }) => {
  return (
    <section className="relative h-[65vh] md:h-[70vh] w-full overflow-hidden flex items-center justify-center px-6">
      {/* Background Image */}
      <img
        src="images/Background-form.jpg"
        alt="Restaurant"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* Light Soothing Overlay */}
      <div className="absolute inset-0 bg-[#f8f5f0]/15 backdrop-blur-[5px]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center space-y-6">
        
        <span className="text-xs uppercase tracking-[0.3em] text-stone-700 font-semibold">
          Fine Dining Reservations
        </span>

        <h1 className="text-4xl md:text-6xl font-serif text-stone-900 leading-[1.15] font-normal tracking-tight">
          Discover Extraordinary <br />
          <span className="italic font-light">Culinary Destinations</span>
        </h1>

        <p className="text-stone-900 text-sm md:text-base font-light max-w-xl leading-relaxed">
          Explore top-rated establishments, indulge in refined cuisines, and secure your table effortlessly.
        </p>

        {/* Soothing Search Bar UI */}
        <div className="relative w-full max-w-2xl pt-4">
          <Search
            size={20}
            className="absolute left-6 top-[calc(50%+8px)] -translate-y-1/2 z-10 text-stone-400 pointer-events-none"
          />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search by restaurant name, cuisine, or city..."
            className="
              w-full
              h-14
              rounded-full
              bg-white/90
              backdrop-blur-md
              border
              border-stone-200/80
              pl-14
              pr-6
              text-stone-900
              text-sm
              font-sans
              placeholder:text-stone-400
              outline-none
              shadow-sm
              focus:shadow-md
              focus:border-stone-400
              transition-all
              duration-300
            "
          />
        </div>

      </div>
    </section>
  );
};

export default LandingPage;