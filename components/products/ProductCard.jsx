"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaBook,
  FaCalculator,
  FaHeadphones,
  FaFlask,
  FaMicrochip,
  FaLightbulb,
  FaCheckCircle,
  FaRegBookmark,
  FaBookmark,
} from "react-icons/fa";
import { FiArrowUpRight, FiMapPin, FiClock } from "react-icons/fi";

export default function ProductCard({ product }) {
  const [saved, setSaved] = useState(false);

  // Map visual type to CSS illustration & icon
  const renderVisualPlaceholder = () => {
    switch (product.visualType) {
      case "calculator":
        return (
          <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-500/15 via-[#1a1712] to-[#121212] p-6">
            <div className="relative flex flex-col items-center justify-center rounded-xl border border-amber-500/20 bg-[#161616]/90 p-5 shadow-inner">
              <FaCalculator className="h-14 w-14 text-[#F5C542] drop-shadow-md" />
              <div className="mt-2 text-center">
                <span className="block text-[11px] font-mono text-amber-200/90 font-semibold uppercase tracking-wider">
                  fx-991EX ClassWiz
                </span>
                <span className="text-[10px] text-[#A3A3A3]">Solar + Dual Power</span>
              </div>
            </div>
          </div>
        );
      case "book":
        return (
          <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-500/15 via-[#111914] to-[#121212] p-6">
            <div className="relative flex flex-col items-center justify-center rounded-xl border border-emerald-500/20 bg-[#161616]/90 p-5 shadow-inner">
              <FaBook className="h-14 w-14 text-emerald-400 drop-shadow-md" />
              <div className="mt-2 text-center">
                <span className="block text-[11px] font-mono text-emerald-200/90 font-semibold uppercase tracking-wider">
                  Calculus 14th Ed
                </span>
                <span className="text-[10px] text-[#A3A3A3]">Metric Hardcover</span>
              </div>
            </div>
          </div>
        );
      case "headphones":
        return (
          <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500/15 via-[#13141f] to-[#121212] p-6">
            <div className="relative flex flex-col items-center justify-center rounded-xl border border-indigo-500/20 bg-[#161616]/90 p-5 shadow-inner">
              <FaHeadphones className="h-14 w-14 text-indigo-400 drop-shadow-md" />
              <div className="mt-2 text-center">
                <span className="block text-[11px] font-mono text-indigo-200/90 font-semibold uppercase tracking-wider">
                  Sony WH-CH520
                </span>
                <span className="text-[10px] text-[#A3A3A3]">50h Battery • USB-C</span>
              </div>
            </div>
          </div>
        );
      case "supplies":
        return (
          <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500/15 via-[#10191c] to-[#121212] p-6">
            <div className="relative flex flex-col items-center justify-center rounded-xl border border-cyan-500/20 bg-[#161616]/90 p-5 shadow-inner">
              <FaFlask className="h-14 w-14 text-cyan-400 drop-shadow-md" />
              <div className="mt-2 text-center">
                <span className="block text-[11px] font-mono text-cyan-200/90 font-semibold uppercase tracking-wider">
                  Lab Kit Combo
                </span>
                <span className="text-[10px] text-[#A3A3A3]">Coat (L) + Goggles</span>
              </div>
            </div>
          </div>
        );
      case "electronics":
        return (
          <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-violet-500/15 via-[#18121f] to-[#121212] p-6">
            <div className="relative flex flex-col items-center justify-center rounded-xl border border-violet-500/20 bg-[#161616]/90 p-5 shadow-inner">
              <FaMicrochip className="h-14 w-14 text-violet-400 drop-shadow-md" />
              <div className="mt-2 text-center">
                <span className="block text-[11px] font-mono text-violet-200/90 font-semibold uppercase tracking-wider">
                  Arduino Uno R3
                </span>
                <span className="text-[10px] text-[#A3A3A3]">30+ Sensors & Box</span>
              </div>
            </div>
          </div>
        );
      case "dorm":
      default:
        return (
          <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-500/15 via-[#1a1512] to-[#121212] p-6">
            <div className="relative flex flex-col items-center justify-center rounded-xl border border-amber-500/20 bg-[#161616]/90 p-5 shadow-inner">
              <FaLightbulb className="h-14 w-14 text-amber-300 drop-shadow-md" />
              <div className="mt-2 text-center">
                <span className="block text-[11px] font-mono text-amber-200/90 font-semibold uppercase tracking-wider">
                  LED Study Lamp
                </span>
                <span className="text-[10px] text-[#A3A3A3]">Rechargeable Dimmable</span>
              </div>
            </div>
          </div>
        );
    }
  };

  const getConditionStyle = (badge) => {
    switch (badge) {
      case "new":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      case "like-new":
        return "bg-amber-500/10 text-amber-300 border-amber-500/30";
      case "good":
        return "bg-sky-500/10 text-sky-400 border-sky-500/30";
      default:
        return "bg-[#2A2A2A] text-[#A3A3A3] border-[#3A3A3A]";
    }
  };

  return (
    <article className="group relative flex flex-col rounded-xl border border-[#2A2A2A] bg-[#171717] transition-all duration-200 hover:-translate-y-1 hover:border-[#3A3A3A] hover:shadow-[0_12px_24px_-10px_rgba(0,0,0,0.8)]">
      {/* Product Image / Illustration Canvas */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-xl border-b border-[#2A2A2A] bg-[#111111]">
        {renderVisualPlaceholder()}

        {/* Condition Badge (Top-Left) */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium backdrop-blur-md ${getConditionStyle(
              product.conditionBadge
            )}`}
          >
            {product.condition}
          </span>
        </div>

        {/* Bookmark Action (Top-Right) */}
        <button
          type="button"
          onClick={() => setSaved(!saved)}
          className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#2A2A2A] bg-[#090909]/80 text-[#A3A3A3] backdrop-blur-md hover:text-[#F5C542] hover:border-[#F5C542]/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C542]"
          aria-label={saved ? "Remove from wishlist" : "Save item to wishlist"}
        >
          {saved ? (
            <FaBookmark className="h-3.5 w-3.5 text-[#F5C542]" />
          ) : (
            <FaRegBookmark className="h-3.5 w-3.5" />
          )}
        </button>

        {/* Category Pill (Bottom-Left) */}
        <div className="absolute bottom-2.5 left-3">
          <span className="rounded-md bg-[#090909]/80 border border-[#2A2A2A] px-2 py-0.5 text-[10px] font-medium text-[#A3A3A3] backdrop-blur-sm">
            {product.category}
          </span>
        </div>
      </div>

      {/* Product Details Body */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {/* Title */}
        <h3 className="line-clamp-2 text-base font-semibold text-[#F8F8F8] group-hover:text-[#F5C542] transition-colors leading-snug">
          {product.title}
        </h3>

        {/* Price Tag with Bangladeshi Taka (৳) */}
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-xl font-bold tracking-tight text-[#F8F8F8]">
            ৳{product.price.toLocaleString("en-BD")}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-[#A3A3A3] line-through">
              ৳{product.originalPrice.toLocaleString("en-BD")}
            </span>
          )}
          {product.originalPrice && (
            <span className="ml-auto text-[11px] font-semibold text-[#F5C542]">
              {Math.round(
                ((product.originalPrice - product.price) / product.originalPrice) * 100
              )}
              % OFF
            </span>
          )}
        </div>

        {/* Seller Info & Campus Meetup Spot */}
        <div className="mt-4 pt-3 border-t border-[#2A2A2A] space-y-1.5 text-xs text-[#A3A3A3]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="font-medium text-[#F8F8F8] truncate max-w-[130px]">
                {product.seller.name}
              </span>
              {product.seller.verified && (
                <FaCheckCircle
                  className="h-3 w-3 text-[#F5C542] flex-shrink-0"
                  title="Verified Student Seller"
                />
              )}
            </div>
            <span className="text-[11px] text-[#A3A3A3] flex items-center gap-1">
              <FiClock className="h-3 w-3 text-[#A3A3A3]" />
              {product.postedAt}
            </span>
          </div>

          <div className="flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-1 text-[#A3A3A3]">
              <FiMapPin className="h-3 w-3 text-[#F5C542]" />
              <span className="truncate">{product.seller.university}</span>
            </div>
            <span className="text-[#A3A3A3]">{product.seller.department}</span>
          </div>
        </div>

        {/* Action Button: View Details */}
        <div className="mt-4 pt-2">
          <Link
            href={`#product-${product.id}`}
            className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-[#2A2A2A] bg-[#111111] py-2 text-xs font-semibold text-[#F8F8F8] hover:border-[#F5C542]/50 hover:bg-[#1a1a1a] hover:text-[#F5C542] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C542]"
          >
            <span>View Details</span>
            <FiArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
