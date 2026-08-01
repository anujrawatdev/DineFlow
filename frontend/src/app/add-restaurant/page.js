"use client";

import React, { useState ,useEffect } from "react";
import { toast } from "sonner";
import Navbar from "../Navbar/Navbar";
import { useRouter } from "next/navigation";
import RoleGuard from "@/components/RoleGuard";

const Page = () => {
  const router = useRouter();
  

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [street, setStreet] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("India");

  const [openingTime, setOpeningTime] = useState("");
  const [closingTime, setClosingTime] = useState("");

  const [price, setPriceRange] = useState("");
  const [cuisine, setCuisine] = useState("");

  const [restaurantImage, setRestaurantImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const [loading, setLoading] = useState(false);


  const timings = [
    "6:00 AM",
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
    "11:00 PM",
  ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setRestaurantImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleAddRestaurant = async (e) => {
    e.preventDefault();

    if (
      !name ||
      !description ||
      !city ||
      !openingTime ||
      !closingTime ||
      !price ||
      !cuisine
    ) {
      toast.error("Please fill all required fields");
      return;
    }
    
      if (name.trim().length < 3) {
    toast.error("Restaurant name must be at least 3 characters");
    return;
  }

  if (description.trim().length < 20) {
    toast.error("Description must be at least 20 characters");
    return;
  }

  if (!city.trim()) {
    toast.error("City is required");
    return;
  }

  if (!openingTime || !closingTime) {
    toast.error("Please select opening and closing time");
    return;
  }

  if (openingTime === closingTime) {
    toast.error("Opening and closing time cannot be same");
    return;
  }

  if (!price) {
    toast.error("Please select a price range");
    return;
  }

  if (!cuisine.trim()) {
    toast.error("Cuisine style is required");
    return;
  }

  if (!restaurantImage) {
    toast.error("Please upload restaurant image");
    return;
  }

    setLoading(true);

    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);

    formData.append("openingTime", openingTime);
    formData.append("closingTime", closingTime);

    formData.append("price", price);
    formData.append("cuisine", cuisine);

    formData.append("street", street);
    formData.append("city", city);
    formData.append("state", state);
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
      console.log("PROFILE DATA:", data);

      if (response.ok) {
        toast.success("Restaurant created successfully");

        router.push("/myRestaurants");
      } else {
        toast.error(data.message || "Failed to create restaurant");
      }
    } catch (error) {
      console.log(error);

      toast.error("Server error. Please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <RoleGuard role="owner">
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FDFCFB] pt-32 pb-20 text-[#1A1A1A]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-10 text-center">
            <p className="text-xs tracking-[0.25em] uppercase text-[#7A6A5C] font-semibold">
              Establishment
            </p>

            <h1 className="mt-2 text-4xl md:text-5xl font-normal font-serif tracking-tight text-[#1A1A1A]">
              Add Restaurant
            </h1>

            <p className="mt-2 text-[#666666] font-light">
              Fill in the details below to register and showcase your dining
              space.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5E2DE] bg-white p-8 md:p-12 shadow-sm">
            <form onSubmit={handleAddRestaurant} className="space-y-8">
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
                    className="w-full rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] px-4 py-3 text-sm outline-none transition focus:border-[#7A6A5C] focus:bg-white"
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
                    maxLength={300}
                    placeholder="Write a concise overview of the dining experience..."
                    className="w-full rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] px-4 py-3 text-sm outline-none resize-none transition focus:border-[#7A6A5C] focus:bg-white"
                  />
                </div>
              </div>

              {/* Location */}

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
                      className="w-full rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] px-4 py-3 text-sm outline-none transition focus:border-[#7A6A5C] focus:bg-white"
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
                      className="w-full rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] px-4 py-3 text-sm outline-none transition focus:border-[#7A6A5C] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#7A6A5C] font-semibold mb-2">
                      State
                    </label>

                    <input
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      type="text"
                      placeholder="State"
                      className="w-full rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] px-4 py-3 text-sm outline-none transition focus:border-[#7A6A5C] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#7A6A5C] font-semibold mb-2">
                      Country
                    </label>

                    <input
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      type="text"
                      className="w-full rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] px-4 py-3 text-sm outline-none transition focus:border-[#7A6A5C] focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Operations */}

              <div className="space-y-6">
                <h2 className="text-xs tracking-[0.2em] uppercase text-[#7A6A5C] font-semibold pb-2 border-b border-[#E5E2DE]">
                  Operations & Concept
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#7A6A5C] font-semibold mb-2">
                      Opening Time
                    </label>

                    <select
                      value={openingTime}
                      onChange={(e) => setOpeningTime(e.target.value)}
                      className="w-full rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] px-4 py-3 text-sm outline-none focus:border-[#7A6A5C]"
                    >
                      <option value="">Select Opening Time</option>

                      {timings.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#7A6A5C] font-semibold mb-2">
                      Closing Time
                    </label>

                    <select
                      value={closingTime}
                      onChange={(e) => setClosingTime(e.target.value)}
                      className="w-full rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] px-4 py-3 text-sm outline-none focus:border-[#7A6A5C]"
                    >
                      <option value="">Select Closing Time</option>

                      {timings.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#7A6A5C] font-semibold mb-2">
                      Price Range
                    </label>

                    <select
                      value={price}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="w-full rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] px-4 py-3 text-sm outline-none focus:border-[#7A6A5C]"
                    >
                      <option value="">Select Price Range</option>

                      <option value="500-1000">₹500 - ₹1,000</option>

                      <option value="1000-3000">₹1,000 - ₹3,000</option>

                      <option value="3000-6000">₹3,000 - ₹6,000</option>

                      <option value="6000+">₹6,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking_wider text-[#7A6A5C] font-semibold mb-2">
                      Cuisine Style
                    </label>

                    <input
                      value={cuisine}
                      onChange={(e) => setCuisine(e.target.value)}
                      type="text"
                      placeholder="Italian, Fine Dining, Modern..."
                      className="w-full rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] px-4 py-3 text-sm outline-none transition focus:border-[#7A6A5C] focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Media */}

              <div className="space-y-4">
                <h2 className="text-xs tracking-[0.2em] uppercase text-[#7A6A5C] font-semibold pb-2 border-b border-[#E5E2DE]">
                  Media
                </h2>

                <div className="rounded-2xl border-2 border-dashed border-[#E5E2DE] bg-[#FDFCFB] p-6 text-center">
                  <input
                    type="file"
                    accept="image/*"
                    id="restaurant-image"
                    onChange={handleImageChange}
                    className="hidden"
                  />

                  <label
                    htmlFor="restaurant-image"
                    className="cursor-pointer inline-block rounded-full bg-[#F7F5F2] border border-[#E5E2DE] px-5 py-2.5 text-xs font-medium uppercase tracking-wider hover:bg-[#E5E2DE]"
                  >
                    Choose Image File
                  </label>

                  {restaurantImage && (
                    <p className="mt-3 text-xs text-[#2E6F40] font-medium">
                      {restaurantImage.name}
                    </p>
                  )}

                  {preview && (
                    <img
                      src={preview}
                      alt="Preview"
                      className="mt-5 h-48 w-full object-cover rounded-xl"
                    />
                  )}
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-[#1A1A1A] py-4 text-xs font-medium uppercase tracking-wider text-white hover:bg-[#333333] transition disabled:opacity-60"
                >
                  {loading ? "Creating Restaurant..." : "Create Restaurant"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
    </RoleGuard>
  );
};

export default Page;
