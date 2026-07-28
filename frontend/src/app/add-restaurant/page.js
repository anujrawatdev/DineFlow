// "use client";

// import React, { useState } from "react";
// import {toast } from 'sonner';

// const Page = () => {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [street, setStreet] = useState("");
//   const [state, setState] = useState("");
//   const [city, setCity] = useState("");
//   const [country, setCountry] = useState("");
//   const [openingTime, setOpeningTime] = useState("");
//   const [closingTime, setClosingTime] = useState("");
//   const [price, setPriceRange] = useState("");
//   const [cuisine, setCuisine] = useState("");
//   const [restaurantImage, setRestaurantImage] = useState("");

//   const handleAddRestaurant = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();

//     formData.append("name", name);
//     formData.append("description", description);
//     formData.append("openingTime", openingTime);
//     formData.append("closingTime", closingTime);
//     formData.append("price", price);
//     formData.append("cuisine", cuisine);
//     formData.append("street", street);
//     formData.append("state", state);
//     formData.append("city", city);
//     formData.append("country", country);
//     formData.append("restaurantImage", restaurantImage);

//     try {
//       const response = await fetch("http://localhost:5000/restaurant", {
//         method: "POST",
//         credentials: "include",
//         body: formData,
//       });

//       const data = await response.json();

//       if (response.ok) {
//         toast.success("Reastaurant created successfully");

//         setName("");
//         setDescription("");
//         setCity("");
//         setClosingTime("");
//         setOpeningTime("");
//         setCountry("");
//         setCuisine("");
//         setPriceRange("");
//         setStreet("");
//         setState("");
//       } else {
//         toast.error(data.message||"Failed to create restaurant")
//       }
//     } catch (error) {
//       console.log("error:", error);
//       toast.error('Server error.Please try again')
//     }
//   };

//   return (
//     <div className="relative min-h-screen overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0 bg-[url('/images/Background-form.jpg')] bg-cover bg-center scale-110" />

//       {/* Blur Layer */}
//       <div className="absolute inset-0 backdrop-blur-sm bg-black/40" />

//       {/* Form */}
//       <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-10">
//         <div className="w-full max-w-3xl rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl">
//           {/* Header */}
//           <div className="border-b border-white/20 px-10 py-8">
//             <h1 className="text-4xl font-bold text-white">Add Restaurant</h1>

//             <p className="mt-2 text-white/70">
//               Fill in the details to publish your restaurant.
//             </p>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleAddRestaurant} className="space-y-6 p-10">
//             {/* Restaurant Name */}
//             <div>
//               <label className="mb-2 block font-medium text-white">
//                 Restaurant Name
//               </label>

//               <input
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 type="text"
//                 placeholder="The Rustic Table"
//                 className="w-full rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-white placeholder:text-white/50 outline-none backdrop-blur-md transition focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#8B5E3C]/40"
//               />
//             </div>

//             {/* Description */}
//             <div>
//               <label className="mb-2 block font-medium text-white">
//                 Description
//               </label>

//               <textarea
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 rows={4}
//                 placeholder="Write something about your restaurant..."
//                 className="w-full rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-white placeholder:text-white/50 outline-none backdrop-blur-md resize-none focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#8B5E3C]/40"
//               />
//             </div>

//             {/* Location */}
//             <div>
//               <label className="mb-2 block font-medium text-white">
//                 Location
//               </label>

//               <div className="grid grid-cols-2 gap-4">
//                 <input
//                   value={street}
//                   onChange={(e) => setStreet(e.target.value)}
//                   type="text"
//                   placeholder="Street"
//                   className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none backdrop-blur-md"
//                 />

//                 <input
//                   value={city}
//                   onChange={(e) => setCity(e.target.value)}
//                   type="text"
//                   placeholder="City"
//                   className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none backdrop-blur-md"
//                 />

//                 <input
//                   type="text"
//                   value={state}
//                   onChange={(e) => setState(e.target.value)}
//                   placeholder="State"
//                   className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none backdrop-blur-md"
//                 />

//                 <input
//                   type="text"
//                   value={country}
//                   onChange={(e) => setCountry(e.target.value)}
//                   placeholder="Country"
//                   className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none backdrop-blur-md"
//                 />
//               </div>
//             </div>

//             {/* Timings */}
//             <div className="grid grid-cols-2 gap-5">
//               <div>
//                 <label className="mb-2 block font-medium text-white">
//                   Opening Time
//                 </label>

//                 <input
//                   value={openingTime}
//                   onChange={(e) => setOpeningTime(e.target.value)}
//                   type="time"
//                   className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none backdrop-blur-md"
//                 />
//               </div>

//               <div>
//                 <label className="mb-2 block font-medium text-white">
//                   Closing Time
//                 </label>

//                 <input
//                   value={closingTime}
//                   onChange={(e) => setClosingTime(e.target.value)}
//                   type="time"
//                   className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none backdrop-blur-md"
//                 />
//               </div>
//             </div>

//             {/* Price + Cuisine */}
//             <div className="grid grid-cols-2 gap-5">
//               <div>
//                 <label className="mb-2 block font-medium text-white">
//                  Select Price Range
//                 </label>

//                 <select
//   value={price}
//   onChange={(e) => setPriceRange(e.target.value)}
//   className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none backdrop-blur-md"
// >
//   <option value="" className="text-black">
//     Select Price Range
//   </option>

//   <option value="500-1000" className="text-black">
//     ₹500-1000
//   </option>

//   <option value="1000-3000" className="text-black">
//     ₹1000-3000
//   </option>

//   <option value="3000-6000" className="text-black">
//     ₹3000-6000
//   </option>

//   <option value="6000+" className="text-black">
//     ₹6000+
//   </option>
// </select>
//               </div>

//               <div>
//                 <label className="mb-2 block font-medium text-white">
//                   Cuisine
//                 </label>

//                 <input
//                   value={cuisine}
//                   onChange={(e) => setCuisine(e.target.value)}
//                   type="text"
//                   placeholder="Italian, Chinese..."
//                   className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none backdrop-blur-md"
//                 />
//               </div>
//               <div>
//                 <label className="mb-2 block font-medium text-white">
//                   Restaurant Image
//                 </label>

//                 <div className="rounded-xl border-2 border-dashed border-white/20 bg-white/5 p-6 transition hover:border-[#8B5E3C] hover:bg-white/10">
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={(e) => setRestaurantImage(e.target.files[0])}
//                     className="block w-full cursor-pointer text-sm text-white
//       file:mr-4 file:rounded-lg file:border-0
//       file:bg-[#7A4E2F] file:px-4 file:py-2
//       file:font-medium file:text-white
//       file:cursor-pointer hover:file:bg-[#91613E]"
//                   />

//                   <p className="mt-3 text-sm text-white/60">
//                     Upload your Restaurant image (JPG, PNG, WEBP).
//                   </p>

//                   {restaurantImage && (
//                     <p className="mt-2 text-sm text-green-400">
//                       ✓ {restaurantImage.name}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Button */}
//             <button className="w-full rounded-xl bg-[#7A4E2F] py-4 font-semibold text-white transition hover:bg-[#91613E]">
//               Create Restaurant
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;

"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import OwnerNavbar from "../Navbar/onwerNavbar";

const Page = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [street, setStreet] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [openingTime, setOpeningTime] = useState("");
  const [closingTime, setClosingTime] = useState("");
  const [price, setPriceRange] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [restaurantImage, setRestaurantImage] = useState(null);

  const handleAddRestaurant = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("openingTime", openingTime);
    formData.append("closingTime", closingTime);
    formData.append("price", price);
    formData.append("cuisine", cuisine);
    formData.append("street", street);
    formData.append("state", state);
    formData.append("city", city);
    formData.append("country", country);
    if (restaurantImage) {
      formData.append("restaurantImage", restaurantImage);
    }

    try {
      const response = await fetch("http://localhost:5000/restaurant", {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Restaurant created successfully");

        setName("");
        setDescription("");
        setCity("");
        setClosingTime("");
        setOpeningTime("");
        setCountry("");
        setCuisine("");
        setPriceRange("");
        setStreet("");
        setState("");
        setRestaurantImage(null);
      } else {
        toast.error(data.message || "Failed to create restaurant");
      }
    } catch (error) {
      console.error("error:", error);
      toast.error("Server error. Please try again");
    }
  };

  return (
    <>
      <OwnerNavbar />
      <main className="min-h-screen bg-[#FDFCFB] pt-32 pb-20 text-[#1A1A1A]">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <div className="mb-10 text-center">
            <p className="text-xs tracking-[0.25em] uppercase text-[#7A6A5C] font-semibold">
              Establishment
            </p>
            <h1 className="mt-2 text-4xl md:text-5xl font-normal font-serif tracking-tight text-[#1A1A1A]">
              Add Restaurant
            </h1>
            <p className="mt-2 text-[#666666] font-light">
              Fill in the details below to register and showcase your dining space.
            </p>
          </div>

          {/* Form Card */}
          <div className="rounded-2xl border border-[#E5E2DE] bg-white p-8 md:p-12 shadow-sm">
            <form onSubmit={handleAddRestaurant} className="space-y-8">
              {/* General Information */}
              <div className="space-y-6">
                <h2 className="text-xs tracking-[0.2em] uppercase text-[#7A6A5C] font-semibold pb-2 border-b border-[#E5E2DE]">
                  General Information
                </h2>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#7A6A5C] font-semibold mb-2">
                    Restaurant Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="e.g. The Rustic Table"
                    className="w-full rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#A39A90] outline-none transition focus:border-[#7A6A5C] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#7A6A5C] font-semibold mb-2">
                    Description
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    placeholder="Write a concise overview of the dining experience..."
                    className="w-full rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#A39A90] outline-none resize-none transition focus:border-[#7A6A5C] focus:bg-white"
                  />
                </div>
              </div>

              {/* Location Details */}
              <div className="space-y-6">
                <h2 className="text-xs tracking-[0.2em] uppercase text-[#7A6A5C] font-semibold pb-2 border-b border-[#E5E2DE]">
                  Location
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#7A6A5C] font-semibold mb-2">
                      Street Address
                    </label>
                    <input
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      type="text"
                      placeholder="123 Luxury Avenue"
                      className="w-full rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#A39A90] outline-none transition focus:border-[#7A6A5C] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#7A6A5C] font-semibold mb-2">
                      City
                    </label>
                    <input
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      type="text"
                      placeholder="City"
                      className="w-full rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#A39A90] outline-none transition focus:border-[#7A6A5C] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#7A6A5C] font-semibold mb-2">
                      State / Province
                    </label>
                    <input
                      type="text"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      placeholder="State"
                      className="w-full rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#A39A90] outline-none transition focus:border-[#7A6A5C] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#7A6A5C] font-semibold mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="Country"
                      className="w-full rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#A39A90] outline-none transition focus:border-[#7A6A5C] focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Timing & Concept */}
              <div className="space-y-6">
                <h2 className="text-xs tracking-[0.2em] uppercase text-[#7A6A5C] font-semibold pb-2 border-b border-[#E5E2DE]">
                  Operations & Concept
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#7A6A5C] font-semibold mb-2">
                      Opening Time
                    </label>
                    <input
                      value={openingTime}
                      onChange={(e) => setOpeningTime(e.target.value)}
                      type="time"
                      className="w-full rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] px-4 py-3 text-sm text-[#1A1A1A] outline-none transition focus:border-[#7A6A5C] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#7A6A5C] font-semibold mb-2">
                      Closing Time
                    </label>
                    <input
                      value={closingTime}
                      onChange={(e) => setClosingTime(e.target.value)}
                      type="time"
                      className="w-full rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] px-4 py-3 text-sm text-[#1A1A1A] outline-none transition focus:border-[#7A6A5C] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#7A6A5C] font-semibold mb-2">
                      Price Range
                    </label>
                    <select
                      value={price}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="w-full rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] px-4 py-3 text-sm text-[#1A1A1A] outline-none transition focus:border-[#7A6A5C] focus:bg-white"
                    >
                      <option value="">Select Price Range</option>
                      <option value="500-1000">₹500 - ₹1,000</option>
                      <option value="1000-3000">₹1,000 - ₹3,000</option>
                      <option value="3000-6000">₹3,000 - ₹6,000</option>
                      <option value="6000+">₹6,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#7A6A5C] font-semibold mb-2">
                      Cuisine Style
                    </label>
                    <input
                      value={cuisine}
                      onChange={(e) => setCuisine(e.target.value)}
                      type="text"
                      placeholder="Italian, Fine Dining, Modern..."
                      className="w-full rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#A39A90] outline-none transition focus:border-[#7A6A5C] focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Image Upload */}
              <div className="space-y-4">
                <h2 className="text-xs tracking-[0.2em] uppercase text-[#7A6A5C] font-semibold pb-2 border-b border-[#E5E2DE]">
                  Media
                </h2>

                <label className="block text-xs uppercase tracking-wider text-[#7A6A5C] font-semibold mb-2">
                  Restaurant Cover Image
                </label>

                <div className="rounded-2xl border-2 border-dashed border-[#E5E2DE] bg-[#FDFCFB] p-6 text-center transition hover:border-[#7A6A5C]">
                  <input
                    type="file"
                    accept="image/*"
                    id="add-file-upload"
                    onChange={(e) => setRestaurantImage(e.target.files[0])}
                    className="hidden"
                  />
                  <label
                    htmlFor="add-file-upload"
                    className="inline-block cursor-pointer rounded-full bg-[#F7F5F2] border border-[#E5E2DE] px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-[#1A1A1A] hover:bg-[#E5E2DE] transition"
                  >
                    Choose Image File
                  </label>

                  <p className="mt-3 text-xs text-[#666666] font-light">
                    Upload your restaurant image (JPG, PNG, WEBP)
                  </p>

                  {restaurantImage && (
                    <p className="mt-3 text-xs font-medium text-[#2E6F40]">
                      Selected: {restaurantImage.name}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#1A1A1A] py-4 text-xs font-medium uppercase tracking-wider text-white transition hover:bg-[#333333] shadow-sm"
                >
                  Create Restaurant
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;