"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { MapPin, Clock, Star, Edit3, Trash2, Eye } from "lucide-react";

const MyRestaurantsCard = ({ restaurant }) => {
  const router = useRouter();


  const getImageUrl = (imagePath) => {
  if (!imagePath) return null;

  if (imagePath.startsWith("http")) {
    return imagePath;
  }

  return `${process.env.NEXT_PUBLIC_API_URL}${imagePath}`;
};

  const handleDelete = async (id) => {
    const loadingToast = toast.loading("Deleting restaurant...");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/my-restaurants/delete/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      const data = await response.json();

      if (response.ok) {
        toast.success("Restaurant deleted successfully", {
          id: loadingToast,
        });
        router.refresh();
      } else {
        toast.error(data.message || "Failed to delete restaurant", {
          id: loadingToast,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error. Please try again.", {
        id: loadingToast,
      });
    }
  };

  return (
    <div className="group rounded-2xl border border-[#E5E2DE] bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col w-full max-w-[360px]">
     <div className="relative h-48 w-full bg-[#F7F5F2] overflow-hidden">
  <img
    src={getImageUrl(restaurant.restaurantImage)}
    alt={restaurant?.name || "Restaurant"}
    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
  />

  <span className="absolute top-3 left-3 bg-[#1A1A1A]/80 backdrop-blur-md text-white text-[11px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-md">
    Open
  </span>

  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#1A1A1A] px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1 shadow-sm border border-[#E5E2DE]/50">
    <Star size={12} className="fill-[#1A1A1A] text-[#1A1A1A]" />
    <span>4.8</span>
  </div>
</div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start gap-2 mb-2">
            <h2 className="text-xl font-serif font-normal text-[#1A1A1A] tracking-tight line-clamp-1">
              {restaurant.name}
            </h2>
            <span className="text-sm font-semibold text-[#1A1A1A] whitespace-nowrap">
              ₹{restaurant.price}
            </span>
          </div>

          <div className="flex items-start gap-1.5 text-xs text-[#7A6A5C] font-light mt-1">
            <MapPin size={14} className="shrink-0 text-[#7A6A5C] mt-0.5" />
            <p className="line-clamp-2">
              {[
                restaurant?.location?.street,
                restaurant?.location?.city,
                restaurant?.location?.state,
              ]
                .filter(Boolean)
                .join(", ")}
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#7A6A5C] font-light mt-2.5">
            <Clock size={14} className="shrink-0 text-[#7A6A5C]" />
            <span>
              {restaurant.openingTime || "10:00 AM"} -{" "}
              {restaurant.closingTime || "10:00 PM"}
            </span>
          </div>
        </div>

        <div className="pt-5 mt-5 border-t border-[#E5E2DE] flex items-center justify-between gap-2">
          <Link
            href={`/restaurants/${restaurant._id}`}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-[#1A1A1A] bg-[#F7F5F2] hover:bg-[#E5E2DE] transition"
          >
            <Eye size={14} />
            View
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                router.push(`/myRestaurants/edit/${restaurant._id}`)
              }
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-[#1A1A1A] border border-[#E5E2DE] hover:bg-[#E5E2DE] transition"
            >
              <Edit3 size={14} />
              Edit
            </button>

            <button
              onClick={() => {
                if (
                  confirm("Are you sure you want to delete this restaurant?")
                ) {
                  handleDelete(restaurant._id);
                }
              }}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-red-600 bg-red-50/50 border border-red-300/60 hover:bg-red-300/50 transition"
            >
              <Trash2 size={14} />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRestaurantsCard;