"use client";

import { Crown, Store, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RegisterAsOwner() {
  return (
    <section className="flex items-center justify-center py-20 px-6">
      <div className="relative max-w-5xl w-full overflow-hidden rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 shadow-2xl">

        {/* Glow */}
        <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-yellow-500/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl"></div>

        <div className="relative grid md:grid-cols-2 gap-10 p-10 md:p-14">

          {/* Left */}
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-yellow-400">
              <Crown size={18} />
              Become a Restaurant Owner
            </div>

            <h2 className="text-4xl font-bold text-white leading-tight">
              Grow your restaurant with{" "}
              <span className="text-yellow-400">DineFlow</span>
            </h2>

            <p className="mt-5 text-zinc-400 leading-7">
              Join hundreds of restaurant owners managing bookings, customers,
              and reservations through one powerful platform.
            </p>

            <div className="mt-8">
              <Link href="/owner/register">
              <button className="group flex items-center gap-2 rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400">
                Register as Owner
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8">

            <h3 className="text-xl font-semibold text-white mb-6">
              Why become an Owner?
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">
                <div className="rounded-xl bg-yellow-500/10 p-3">
                  <Store className="text-yellow-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    Manage Restaurants
                  </h4>
                  <p className="text-sm text-zinc-400">
                    Create and manage your restaurant listings effortlessly.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-xl bg-green-500/10 p-3">
                  <ShieldCheck className="text-green-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    Verified by Admin
                  </h4>
                  <p className="text-sm text-zinc-400">
                    Every owner account is reviewed before activation for trust
                    and security.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/10 p-5">
                <p className="text-yellow-300 text-sm">
                  ⭐ After submitting your request, our admin team will review
                  your application. Once approved, you'll unlock restaurant
                  management features.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}