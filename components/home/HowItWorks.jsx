import { FiSearch, FiMessageSquare, FiShield } from "react-icons/fi";
import { FaHandshake, FaShieldAlt } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Browse Products",
      description:
        "Filter by university, course code, department, or product condition. Find exactly what you need at student-friendly prices.",
      icon: <FiSearch className="h-6 w-6 text-[#F5C542]" />,
    },
    {
      step: "02",
      title: "Connect with the Seller",
      description:
        "Message verified fellow students directly. Confirm product condition, negotiate reasonable offers, and pick an on-campus meeting spot.",
      icon: <FiMessageSquare className="h-6 w-6 text-[#F5C542]" />,
    },
    {
      step: "03",
      title: "Meet Safely & Exchange",
      description:
        "Inspect the textbook, calculator, or equipment in person at the campus library, cafeteria, or gate before completing the handover.",
      icon: <FaHandshake className="h-6 w-6 text-[#F5C542]" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 border-t border-[#2A2A2A]/60 bg-[#0c0c0c]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#F5C542] mb-2">
            <span>Simple, Safe & Transparent</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[#F8F8F8] sm:text-3xl md:text-4xl">
            How UniLoop Works
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#A3A3A3]">
            No middleman fees, no shipping delays. Direct student-to-student transactions within your campus ecosystem.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="relative flex flex-col rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6 lg:p-8 hover:border-[#F5C542]/40 transition-all duration-200"
            >
              {/* Step Number & Icon Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#2A2A2A] bg-[#171717]">
                  {item.icon}
                </div>
                <span className="font-mono text-2xl font-black text-[#2A2A2A]">
                  {item.step}
                </span>
              </div>

              {/* Step Info */}
              <h3 className="text-lg font-semibold text-[#F8F8F8] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#A3A3A3] leading-relaxed flex-1">
                {item.description}
              </p>

              {/* Progress Connector (for md+ screens) */}
              {index < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-[#2A2A2A]"
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Trust Assurance Strip */}
        <div className="mt-12 rounded-xl border border-[#2A2A2A] bg-[#171717]/60 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5C542]/10 text-[#F5C542]">
              <FaShieldAlt className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#F8F8F8]">
                Student Safety is Priority #1
              </p>
              <p className="text-[11px] text-[#A3A3A3]">
                Accounts require university email verification (.edu / .ac.bd / institutional domain).
              </p>
            </div>
          </div>
          <div className="text-xs text-[#F5C542] font-medium underline underline-offset-4 cursor-pointer">
            Read Campus Safety Guide
          </div>
        </div>
      </div>
    </section>
  );
}
