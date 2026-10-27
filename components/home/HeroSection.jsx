import Link from "next/link";
import {
  FiArrowRight,
  FiPlus,
  FiShield,
} from "react-icons/fi";
import {
  FaCalculator,
  FaBook,
  FaHeadphones,
} from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Subtle Yellow Gradient Glow in Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[450px] w-[700px] rounded-full bg-[#F5C542]/10 blur-[130px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-32 h-[350px] w-[350px] rounded-full bg-[#FFE08A]/5 blur-[120px] -z-10"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Headline, Value Prop & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Trust / Value Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2A2A2A] bg-[#111111] px-3.5 py-1.5 text-xs text-[#F8F8F8] shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#F5C542] animate-pulse"></span>
              <span className="text-[#F8F8F8] font-medium">
                Made for students. Built for smarter campus living.
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-[#F8F8F8] sm:text-5xl lg:text-6xl leading-[1.1]">
              Your Campus. <br />
              <span className="gradient-yellow-text">Your Marketplace.</span>
            </h1>

            {/* Supporting Subtext */}
            <p className="max-w-xl text-base text-[#A3A3A3] sm:text-lg leading-relaxed">
              Buy smarter, sell what you no longer need, and connect with students across your university community. Avoid overpriced retail, skip shipping costs, and exchange safely on campus.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#marketplace"
                className="gradient-yellow-bg flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-[#090909] shadow-md hover:shadow-[0_0_30px_-5px_rgba(245,197,66,0.5)] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C542]"
              >
                <span>Explore Marketplace</span>
                <FiArrowRight className="h-4 w-4 stroke-[2.5]" />
              </Link>

              <Link
                href="#sell"
                className="flex items-center gap-2 rounded-xl border border-[#2A2A2A] bg-[#171717] px-6 py-3.5 text-sm font-semibold text-[#F8F8F8] hover:border-[#F5C542]/50 hover:bg-[#202020] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C542]"
              >
                <FiPlus className="h-4 w-4 text-[#F5C542]" />
                <span>Start Selling</span>
              </Link>
            </div>

            {/* Campus Proof Points */}
            <div className="pt-6 border-t border-[#2A2A2A]/80 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[#F8F8F8]">৳0</p>
                <p className="text-xs text-[#A3A3A3] mt-0.5">Shipping Fees</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[#F8F8F8]">100%</p>
                <p className="text-xs text-[#A3A3A3] mt-0.5">Verified Students</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[#F8F8F8]">
                  <span className="gradient-yellow-text">50%+</span>
                </p>
                <p className="text-xs text-[#A3A3A3] mt-0.5">Average Savings</p>
              </div>
            </div>
          </div>

          {/* Right Column: Custom CSS Composition of Product Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              {/* Background ambient card frame */}
              <div className="relative rounded-2xl border border-[#2A2A2A] bg-[#111111]/90 p-5 shadow-2xl backdrop-blur-xl">
                {/* Showcase Top Bar */}
                <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block"></span>
                    <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block"></span>
                  </div>
                  <span className="text-[11px] font-mono text-[#A3A3A3] flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    Campus Live Feed
                  </span>
                </div>

                {/* Main Hero Card: Casio Calculator */}
                <div className="rounded-xl border border-[#2A2A2A] bg-[#171717] p-4 transition-all hover:border-[#F5C542]/40">
                  <div className="flex items-start gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-[#121212]">
                      <FaCalculator className="h-8 w-8 text-[#F5C542]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="rounded bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 text-[10px] font-medium text-amber-300">
                          Like New
                        </span>
                        <span className="text-[11px] text-[#A3A3A3]">BUET Campus</span>
                      </div>
                      <h4 className="mt-1 text-sm font-semibold text-[#F8F8F8] truncate">
                        Casio fx-991EX ClassWiz
                      </h4>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="text-base font-bold text-[#F8F8F8]">৳1,850</span>
                        <span className="text-xs text-[#A3A3A3] line-through">৳2,600</span>
                        <span className="text-[10px] text-[#F5C542] font-semibold">29% OFF</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stacked Secondary Cards */}
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {/* Card 2: Textbook */}
                  <div className="rounded-xl border border-[#2A2A2A] bg-[#171717] p-3 hover:border-emerald-500/40 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <FaBook className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-[10px] text-[#A3A3A3] truncate">Textbook</span>
                        <span className="block text-xs font-semibold text-[#F8F8F8] truncate">
                          Calculus 14th
                        </span>
                      </div>
                    </div>
                    <div className="flex items-baseline justify-between pt-1 border-t border-[#2A2A2A]">
                      <span className="text-xs font-bold text-[#F8F8F8]">৳450</span>
                      <span className="text-[10px] text-emerald-400">Dhaka Univ</span>
                    </div>
                  </div>

                  {/* Card 3: Electronics */}
                  <div className="rounded-xl border border-[#2A2A2A] bg-[#171717] p-3 hover:border-indigo-500/40 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        <FaHeadphones className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-[10px] text-[#A3A3A3] truncate">Headphones</span>
                        <span className="block text-xs font-semibold text-[#F8F8F8] truncate">
                          Sony Wireless
                        </span>
                      </div>
                    </div>
                    <div className="flex items-baseline justify-between pt-1 border-t border-[#2A2A2A]">
                      <span className="text-xs font-bold text-[#F8F8F8]">৳3,200</span>
                      <span className="text-[10px] text-indigo-400">NSU Hub</span>
                    </div>
                  </div>
                </div>

                {/* Floating Safe Exchange Banner Badge */}
                <div className="mt-4 flex items-center justify-between rounded-lg border border-[#2A2A2A] bg-[#090909] px-3 py-2 text-xs">
                  <div className="flex items-center gap-2 text-[#F8F8F8]">
                    <FiShield className="h-4 w-4 text-[#F5C542]" />
                    <span className="font-medium">Direct In-Person Handover</span>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-medium">Safe & Instant</span>
                </div>
              </div>

              {/* Decorative Subtle Background Corner Elements */}
              <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl border border-[#2A2A2A]/50 bg-[#171717]/40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
