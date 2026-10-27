import Link from "next/link";
import { FiArrowRight, FiPlus, FiCheck } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

export default function CallToAction() {
  const perks = [
    "Free student account registration",
    "Zero commission on textbook sales",
    "Direct cash or digital payment on handover",
    "Verified campus student community",
  ];

  return (
    <section className="py-20 bg-[#090909] border-t border-[#2A2A2A]/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#2A2A2A] bg-[#111111] px-6 py-14 sm:px-12 sm:py-18 lg:px-16 shadow-2xl">
          {/* Subtle Ambient Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-[#F5C542]/10 blur-[120px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-[#FFE08A]/5 blur-[120px]"
          />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            {/* Campus Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2A2A2A] bg-[#171717] px-3.5 py-1.5 text-xs text-[#F8F8F8] mb-6">
              <FaGraduationCap className="h-4 w-4 text-[#F5C542]" />
              <span className="font-medium">
                Join over 3,000+ university peers already saving
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl font-extrabold tracking-tight text-[#F8F8F8] sm:text-4xl md:text-5xl leading-tight">
              Ready to clear your shelf <br />
              <span className="gradient-yellow-text">or gear up for the semester?</span>
            </h2>

            {/* Supporting Text */}
            <p className="mt-4 text-sm sm:text-base text-[#A3A3A3] max-w-xl mx-auto leading-relaxed">
              List your course textbooks and equipment in under two minutes, or find what you need from classmates right on your campus.
            </p>

            {/* Perks list */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#A3A3A3]">
              {perks.map((perk) => (
                <div key={perk} className="flex items-center gap-1.5">
                  <FiCheck className="h-3.5 w-3.5 text-[#F5C542]" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="#signup"
                className="gradient-yellow-bg flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-[#090909] shadow-md hover:shadow-[0_0_25px_-5px_rgba(245,197,66,0.4)] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C542]"
              >
                <span>Get Started Now</span>
                <FiArrowRight className="h-4 w-4 stroke-[2.5]" />
              </Link>

              <Link
                href="#sell"
                className="flex items-center gap-2 rounded-xl border border-[#2A2A2A] bg-[#171717] px-6 py-3.5 text-sm font-semibold text-[#F8F8F8] hover:border-[#3A3A3A] hover:bg-[#202020] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C542]"
              >
                <FiPlus className="h-4 w-4 text-[#F5C542]" />
                <span>List Your First Item</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
