import React from "react";
import { Search } from "lucide-react";

const LandingPage = ({searchTerm,setSearchTerm}) => {

  return (
    <section
      className="
      relative
      h-[80vh]
      w-full
      overflow-hidden
      "
    >
      {/* Background Image */}
      <img
        src="images/Background-form.jpg"
        alt="Restaurant"
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        "
      />

      {/* Dark Overlay */}
      <div
        className="
        absolute
        inset-0
        bg-black/60
        "
      />

      {/* Content */}
      <div
        className="
        relative
        z-10
        h-full
        flex
        flex-col
        justify-center
        items-center
        text-center
        px-6
        "
      >
        <h1
          className="
          text-5xl
          md:text-7xl
          font-bold
          text-white
          mb-6
          "
        >
          Discover Amazing
          <span className="text-amber-400"> Restaurants</span>
        </h1>

        <p
          className="
          text-lg
          md:text-xl
          text-gray-300
          max-w-2xl
          mb-8
          "
        >
          Explore top-rated restaurants, discover new cuisines, and book your
          perfect dining experience.
        </p>

        {/* Search Bar UI */}
        <div
          className="
          relative
          w-full
          max-w-3xl
          mx-auto
          "
        >
          
<Search
    size={28}
    className="absolute left-5 top-1/2 -translate-y-1/2 z-10 text-gray-300 pointer-events-none"
  />
          <input
          value={searchTerm}
          onChange={(e)=> setSearchTerm(e.target.value)}
            type="text"
            placeholder=" Search restaurants, cuisines or locations..."
            className="
            w-full
            h-16
            rounded-full
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            pl-14
            pr-6
            text-white
            placeholder:text-gray-300
            outline-none
            focus:border-amber-400
            transition
            "
          />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
