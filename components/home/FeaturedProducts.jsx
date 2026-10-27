"use client";

import { useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/products/ProductCard";
import { demoProducts } from "@/data/demoProducts";
import { FiArrowRight, FiFilter } from "react-icons/fi";

export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Calculators", "Books & Textbooks", "Electronics", "Academic Supplies", "Dorm Essentials"];

  const filteredProducts =
    activeCategory === "All"
      ? demoProducts
      : demoProducts.filter((item) => item.category === activeCategory);

  return (
    <section id="marketplace" className="py-16 bg-[#090909]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F5C542] mb-1">
              <span>Fresh Student Listings</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[#F8F8F8] sm:text-3xl">
              Featured Campus Items
            </h2>
            <p className="mt-1 text-sm text-[#A3A3A3]">
              Verified listings from students across nearby campuses, ready for same-day in-person pickup.
            </p>
          </div>

          <Link
            href="#all-products"
            className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[#F5C542] hover:text-[#FFE08A] transition-colors"
          >
            <span>Browse all items</span>
            <FiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          <div className="flex items-center gap-1.5 text-xs text-[#A3A3A3] mr-1 hidden sm:flex">
            <FiFilter className="h-3.5 w-3.5" />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C542] ${
                activeCategory === cat
                  ? "gradient-yellow-bg text-[#090909] font-bold shadow-sm"
                  : "border border-[#2A2A2A] bg-[#111111] text-[#A3A3A3] hover:text-[#F8F8F8] hover:border-[#3A3A3A]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 rounded-xl border border-[#2A2A2A] bg-[#111111] p-6 text-center">
          <h3 className="text-sm font-semibold text-[#F8F8F8]">
            Can&apos;t find what your course requires?
          </h3>
          <p className="mt-1 text-xs text-[#A3A3A3]">
            Post a campus request or notify senior students who might have it in their dorm.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <Link
              href="#request-item"
              className="rounded-lg border border-[#2A2A2A] bg-[#171717] px-4 py-2 text-xs font-semibold text-[#F8F8F8] hover:border-[#F5C542]/40 transition-colors"
            >
              Post an Item Request
            </Link>
            <Link
              href="#sell"
              className="gradient-yellow-bg rounded-lg px-4 py-2 text-xs font-semibold text-[#090909] hover:opacity-95 transition-opacity"
            >
              List an Item for Sale
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
