"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/app/Navbar/Navbar";
import { toast } from "sonner";

const Page = () => {
  const { id } = useParams();
  const router = useRouter();
  const [restaurant, setRestaurants] = useState(null);

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
  const [existingImage, setExistingImage] = useState(""); // Current uploaded image URL
  const [imagePreview, setImagePreview] = useState(null); // Local preview URL

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/my-restaurants/${id}`,
          { credentials: "include", method: "GET" },
        );
        const data = await response.json();

        console.log("Restaurant data:", data);
console.log("Image path:", data.restaurantImage);

        if (response.ok && data) {
          setRestaurants(data);
          setName(data.name || "");
          setDescription(data.description || "");
          setStreet(data.location?.street || "");
          setCity(data.location?.city || "");
          setState(data.location?.state || "");
          setCountry(data.location?.country || "");
          setOpeningTime(data.openingTime || "");
          setClosingTime(data.closingTime || "");
          setPriceRange(data.price || "");
          setCuisine(data.cuisine || "");

          const imagePath = data.restaurantImage || data.image || "";
          if (imagePath) {
            setExistingImage(`http://localhost:5000${imagePath}`);
          }
        }
      } catch (error) {
        console.error("Failed to fetch restaurant details:", error);
      }
    };
    if (id) fetchRestaurant();
  }, [id]);

  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setRestaurantImage(file);
      setImagePreview(URL.createObjectURL(file)); 
    }
  };

  const handleUpdateRestaurant = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("street", street);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("country", country);
    formData.append("openingTime", openingTime);
    formData.append("closingTime", closingTime);
    formData.append("price", price);
    formData.append("cuisine", cuisine);

    if (restaurantImage) {
      formData.append("restaurantImage", restaurantImage);
    }

    try {
      const response = await fetch(
        `http://localhost:5000/my-restaurant/update/${id}`,
        {
          method: "PATCH",
          credentials: "include",
          body: formData,
        },
      );

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Restaurant updated successfully");
        router.push("/myRestaurants");
      } else {
        toast.error(data.message || "Failed to update restaurant");
      }
    } catch (error) {
      console.error("Error updating restaurant:", error);
      toast.error("An error occurred while updating the restaurant.");
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FDFCFB] pt-32 pb-20 text-[#1A1A1A]">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <div className="mb-10 text-center">
            <p className="text-xs tracking-[0.25em] uppercase text-[#7A6A5C] font-semibold">
              Management
            </p>
            <h1 className="mt-2 text-4xl md:text-5xl font-normal font-serif tracking-tight text-[#1A1A1A]">
              Edit Restaurant
            </h1>
            <p className="mt-2 text-[#666666] font-light">
              Update the details, operating hours, and imagery for your
              establishment.
            </p>
          </div>

          
          <div className="rounded-2xl border border-[#E5E2DE] bg-white p-8 md:p-12 shadow-sm">
            <form onSubmit={handleUpdateRestaurant} className="space-y-8">
          
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

              
              <div className="space-y-4">
                <h2 className="text-xs tracking-[0.2em] uppercase text-[#7A6A5C] font-semibold pb-2 border-b border-[#E5E2DE]">
                  Media
                </h2>

                <label className="block text-xs uppercase tracking-wider text-[#7A6A5C] font-semibold mb-2">
                  Update Cover Image
                </label>

                
                {(imagePreview || existingImage) && (
                  <div className="relative w-full h-48 rounded-xl overflow-hidden border border-[#E5E2DE] mb-4 bg-[#F7F5F2]">
                   
                    <img
                      src={imagePreview || existingImage}
                      alt="Restaurant Preview"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-black/60 text-white text-[10px] uppercase tracking-widest px-2 py-1 rounded">
                      {imagePreview ? "New Image Selected" : "Current Image"}
                    </span>
                  </div>
                )}

                <div className="rounded-2xl border-2 border-dashed border-[#E5E2DE] bg-[#FDFCFB] p-6 text-center transition hover:border-[#7A6A5C]">
                  <input
                    type="file"
                    accept="image/*"
                    id="file-upload"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="file-upload"
                    className="inline-block cursor-pointer rounded-full bg-[#F7F5F2] border border-[#E5E2DE] px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-[#1A1A1A] hover:bg-[#E5E2DE] transition"
                  >
                    Choose Image File
                  </label>

                  <p className="mt-3 text-xs text-[#666666] font-light">
                    Supports JPG, PNG, WEBP (Max 5MB)
                  </p>

                  {restaurantImage && (
                    <p className="mt-3 text-xs font-medium text-[#2E6F40]">
                      Selected: {restaurantImage.name}
                    </p>
                  )}
                </div>
              </div>

             
              <div className="pt-4 flex gap-4">
                <button
                  type="button"
                  onClick={() => router.push("/myRestaurants")}
                  className="w-1/3 rounded-xl border border-[#E5E2DE] bg-white py-3.5 text-xs font-medium uppercase tracking-wider text-[#1A1A1A] transition hover:bg-[#F7F5F2]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-2/3 rounded-xl bg-[#1A1A1A] py-3.5 text-xs font-medium uppercase tracking-wider text-white transition hover:bg-[#333333] shadow-sm"
                >
                  Save Changes
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
