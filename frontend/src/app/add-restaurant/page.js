"use client";

import React, { useState } from "react";

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
  const [restaurantImage, setRestaurantImage] = useState("");

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
    formData.append("restaurantImage", restaurantImage);

    try {
      const response = await fetch("http://localhost:5000/restaurant", {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        alert("Reastaurant created successfully");

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
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/Background-form.jpg')] bg-cover bg-center scale-110" />

      {/* Blur Layer */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/40" />

      {/* Form */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-10">
        <div className="w-full max-w-3xl rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl">
          {/* Header */}
          <div className="border-b border-white/20 px-10 py-8">
            <h1 className="text-4xl font-bold text-white">Add Restaurant</h1>

            <p className="mt-2 text-white/70">
              Fill in the details to publish your restaurant.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleAddRestaurant} className="space-y-6 p-10">
            {/* Restaurant Name */}
            <div>
              <label className="mb-2 block font-medium text-white">
                Restaurant Name
              </label>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="The Rustic Table"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-white placeholder:text-white/50 outline-none backdrop-blur-md transition focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#8B5E3C]/40"
              />
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block font-medium text-white">
                Description
              </label>

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                placeholder="Write something about your restaurant..."
                className="w-full rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-white placeholder:text-white/50 outline-none backdrop-blur-md resize-none focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#8B5E3C]/40"
              />
            </div>

            {/* Location */}
            <div>
              <label className="mb-2 block font-medium text-white">
                Location
              </label>

              <div className="grid grid-cols-2 gap-4">
                <input
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  type="text"
                  placeholder="Street"
                  className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none backdrop-blur-md"
                />

                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                  placeholder="City"
                  className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none backdrop-blur-md"
                />

                <input
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  placeholder="State"
                  className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none backdrop-blur-md"
                />

                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Country"
                  className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none backdrop-blur-md"
                />
              </div>
            </div>

            {/* Timings */}
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="mb-2 block font-medium text-white">
                  Opening Time
                </label>

                <input
                  value={openingTime}
                  onChange={(e) => setOpeningTime(e.target.value)}
                  type="time"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none backdrop-blur-md"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-white">
                  Closing Time
                </label>

                <input
                  value={closingTime}
                  onChange={(e) => setClosingTime(e.target.value)}
                  type="time"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none backdrop-blur-md"
                />
              </div>
            </div>

            {/* Price + Cuisine */}
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="mb-2 block font-medium text-white">
                  Price Range
                </label>

                <select className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none backdrop-blur-md">
                  <option className="text-black">₹</option>
                  <option className="text-black">₹₹</option>
                  <option className="text-black">₹₹₹</option>
                  <option className="text-black">₹₹₹₹</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-medium text-white">
                  Cuisine
                </label>

                <input
                  value={cuisine}
                  onChange={(e) => setCuisine(e.target.value)}
                  type="text"
                  placeholder="Italian, Chinese..."
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none backdrop-blur-md"
                />
              </div>
              <div>
                <label className="mb-2 block font-medium text-white">
                  Restaurant Image
                </label>

                <div className="rounded-xl border-2 border-dashed border-white/20 bg-white/5 p-6 transition hover:border-[#8B5E3C] hover:bg-white/10">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setRestaurantImage(e.target.files[0])}
                    className="block w-full cursor-pointer text-sm text-white
      file:mr-4 file:rounded-lg file:border-0
      file:bg-[#7A4E2F] file:px-4 file:py-2
      file:font-medium file:text-white
      file:cursor-pointer hover:file:bg-[#91613E]"
                  />

                  <p className="mt-3 text-sm text-white/60">
                    Upload your Restaurant image (JPG, PNG, WEBP).
                  </p>

                  {restaurantImage && (
                    <p className="mt-2 text-sm text-green-400">
                      ✓ {restaurantImage.name}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Button */}
            <button className="w-full rounded-xl bg-[#7A4E2F] py-4 font-semibold text-white transition hover:bg-[#91613E]">
              Create Restaurant
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
