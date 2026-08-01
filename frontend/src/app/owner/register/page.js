"use client";

import React, { useState } from "react";
import { Phone, FileText, BadgeCheck, Briefcase } from "lucide-react";
import {toast} from 'sonner';
export default function RegisterAsOwnerForm() {
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState("");
  const [reason, setReason] = useState("");
  const [businessLicense, setBusinessLicense] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/owner-request`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone,
          experience,
          reason,
          businessLicense,
        }),
      });

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        toast.success("Owner request submitted successfully!");

        setPhone("");
        setExperience("");
        setReason("");
        setBusinessLicense("");
      } else {
        toast.error(data.message || "Failed to submit request.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <main className="min-h-screen bg-[#FDFCFB] flex items-center justify-center px-6 py-16 text-[#1A1A1A]">
      <div className="w-full max-w-2xl">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E2DE] bg-[#F7F5F2] px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-[#7A6A5C] mb-4">
            <BadgeCheck size={15} className="text-green-400" />
            DineFlow Partner Program
          </div>

          <h1 className="text-4xl md:text-5xl font-normal font-serif tracking-tight text-[#1A1A1A]">
            Become a Restaurant Owner
          </h1>

          <p className="mt-3 text-sm text-[#666666] font-light max-w-lg mx-auto">
            Submit your partnership request. Upon admin approval, unlock your Owner Dashboard to manage your restaurants and reservations.
          </p>
        </div>

        
        <div className="rounded-2xl border border-[#E5E2DE] bg-white p-8 md:p-10 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#7A6A5C] font-semibold mb-2">
                Phone Number
              </label>
              <div className="flex items-center rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] px-4 focus-within:border-[#7A6A5C] focus-within:bg-white transition">
                <Phone className="text-[#7A6A5C]" size={18} />
                <input
                  type="tel"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="9876543210"
                  className="w-full bg-transparent px-3 py-3.5 text-sm text-[#1A1A1A] placeholder-[#A39A90] outline-none"
                  required
                />
              </div>
            </div>

           
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#7A6A5C] font-semibold mb-2">
                Restaurant / Hospitality Experience
              </label>
              <div className="flex rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] px-4 py-3 focus-within:border-[#7A6A5C] focus-within:bg-white transition">
                <Briefcase className="mt-1 text-[#7A6A5C]" size={18} />
                <textarea
                  rows={3}
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  placeholder="Share details regarding your operational experience..."
                  className="w-full resize-none bg-transparent px-3 text-sm text-[#1A1A1A] placeholder-[#A39A90] outline-none"
                  required
                />
              </div>
            </div>

            
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#7A6A5C] font-semibold mb-2">
                Statement of Purpose
              </label>
              <div className="flex rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] px-4 py-3 focus-within:border-[#7A6A5C] focus-within:bg-white transition">
                <FileText className="mt-1 text-[#7A6A5C]" size={18} />
                <textarea
                  rows={4}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Explain why you wish to showcase your venue on DineFlow..."
                  className="w-full resize-none bg-transparent px-3 text-sm text-[#1A1A1A] placeholder-[#A39A90] outline-none"
                  required
                />
              </div>
            </div>

            
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#7A6A5C] font-semibold mb-2">
                Business License / FSSAI Number (Optional)
              </label>
              <div className="flex items-center rounded-xl border border-[#E5E2DE] bg-[#FDFCFB] px-4 focus-within:border-[#7A6A5C] focus-within:bg-white transition">
                <BadgeCheck className="text-[#7A6A5C]" size={18} />
                <input
                  type="text"
                  value={businessLicense}
                  onChange={(e) => setBusinessLicense(e.target.value)}
                  placeholder="License identification number"
                  className="w-full bg-transparent px-3 py-3.5 text-sm text-[#1A1A1A] placeholder-[#A39A90] outline-none"
                />
              </div>
            </div>

            
            <button
              type="submit"
              className="mt-4 w-full rounded-xl bg-[#1A1A1A] py-4 text-xs font-medium uppercase tracking-wider text-white transition hover:bg-[#333333] shadow-sm"
            >
              Submit Application
            </button>

          
            <div className="rounded-xl border border-[#E5E2DE] bg-[#F7F5F2] p-4 text-xs text-[#666666] font-light leading-relaxed">
              <span className="font-semibold text-[#1A1A1A]">Note:</span> Applications are subject to review by the DineFlow team. Once confirmed, your account privileges will update automatically to access owner features.
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}