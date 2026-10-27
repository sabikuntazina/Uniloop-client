"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX, HiPlus } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Marketplace", href: "#marketplace" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "About", href: "#about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#2A2A2A] bg-[#090909]/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C542] rounded-md px-1 py-0.5"
            aria-label="UniLoop Homepage"
          >
            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-[#171717] border border-[#2A2A2A] group-hover:border-[#F5C542]/50 transition-colors">
              <span className="text-lg font-black tracking-tighter text-[#F8F8F8]">
                U<span className="text-[#F5C542]">L</span>
              </span>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5C542] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F5C542]"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#F8F8F8]">
                Uni<span className="gradient-yellow-text font-black">Loop</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#A3A3A3] font-medium -mt-1 hidden sm:block">
                Campus Marketplace
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-md px-3.5 py-1.5 text-sm font-medium text-[#A3A3A3] hover:text-[#F8F8F8] hover:bg-[#171717] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C542]"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#marketplace"
            className="flex items-center gap-1.5 rounded-lg border border-[#2A2A2A] bg-[#111111] px-3 py-1.5 text-xs text-[#A3A3A3] hover:text-[#F8F8F8] hover:border-[#3A3A3A] transition-colors"
            title="Search campus listings"
          >
            <FiSearch className="h-3.5 w-3.5 text-[#A3A3A3]" />
            <span>Search items...</span>
            <kbd className="ml-1.5 rounded bg-[#171717] px-1.5 py-0.5 text-[10px] text-[#A3A3A3] border border-[#2A2A2A]">
              /
            </kbd>
          </Link>

          <div className="h-5 w-[1px] bg-[#2A2A2A] mx-1"></div>

          <Link
            href="#login"
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-[#F8F8F8] hover:bg-[#171717] hover:text-[#F5C542] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C542]"
          >
            Log In
          </Link>

          <Link
            href="#signup"
            className="rounded-lg border border-[#2A2A2A] bg-[#171717] px-3.5 py-2 text-sm font-medium text-[#F8F8F8] hover:border-[#3A3A3A] hover:bg-[#202020] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C542]"
          >
            Sign Up
          </Link>

          <Link
            href="#sell"
            className="gradient-yellow-bg group flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold text-[#090909] shadow-sm hover:opacity-95 hover:shadow-[0_0_20px_-3px_rgba(245,197,66,0.4)] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F5C542]"
          >
            <HiPlus className="h-4 w-4 stroke-[1.5]" />
            <span>Sell an Item</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="#sell"
            className="gradient-yellow-bg flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-semibold text-[#090909] shadow-sm hover:opacity-90 active:scale-95 transition-all"
          >
            <HiPlus className="h-3.5 w-3.5" />
            <span>Sell</span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#2A2A2A] bg-[#111111] text-[#F8F8F8] hover:bg-[#171717] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C542] transition-colors"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <HiX className="h-5 w-5 text-[#F5C542]" />
            ) : (
              <HiMenu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-[#2A2A2A] bg-[#090909] px-4 pt-3 pb-6 md:hidden animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-[#A3A3A3] hover:bg-[#171717] hover:text-[#F8F8F8] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-[#2A2A2A] space-y-2">
            <Link
              href="#sell"
              onClick={() => setMobileMenuOpen(false)}
              className="gradient-yellow-bg flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold text-[#090909] shadow-sm"
            >
              <HiPlus className="h-4 w-4" />
              <span>Sell an Item</span>
            </Link>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <Link
                href="#login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center rounded-lg border border-[#2A2A2A] bg-[#111111] py-2 text-sm font-medium text-[#F8F8F8] hover:bg-[#171717]"
              >
                Log In
              </Link>
              <Link
                href="#signup"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center rounded-lg border border-[#2A2A2A] bg-[#171717] py-2 text-sm font-medium text-[#F8F8F8] hover:bg-[#202020]"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
