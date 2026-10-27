import Link from "next/link";
import { categories } from "@/data/categories";
import {
  FaBookOpen,
  FaCalculator,
  FaLaptop,
  FaRulerCombined,
  FaBed,
  FaShapes,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export default function CategorySection() {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case "FaBookOpen":
        return <FaBookOpen className="h-6 w-6 text-[#F5C542]" />;
      case "FaCalculator":
        return <FaCalculator className="h-6 w-6 text-[#F5C542]" />;
      case "FaLaptopCode":
        return <FaLaptop className="h-6 w-6 text-[#F5C542]" />;
      case "FaDraftingCompass":
        return <FaRulerCombined className="h-6 w-6 text-[#F5C542]" />;
      case "FaBed":
        return <FaBed className="h-6 w-6 text-[#F5C542]" />;
      case "FaBoxes":
      default:
        return <FaShapes className="h-6 w-6 text-[#F5C542]" />;
    }
  };

  return (
    <section id="categories" className="py-16 border-t border-[#2A2A2A]/60 bg-[#090909]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F5C542] mb-1">
              <span>Campus Essentials</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[#F8F8F8] sm:text-3xl">
              Browse by Category
            </h2>
            <p className="mt-1 text-sm text-[#A3A3A3]">
              Find course-specific materials, equipment, and gear listed by fellow students.
            </p>
          </div>

          <Link
            href="#marketplace"
            className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[#F5C542] hover:text-[#FFE08A] transition-colors"
          >
            <span>View all categories</span>
            <FiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`#category-${cat.id}`}
              className="group relative flex flex-col justify-between rounded-xl border border-[#2A2A2A] bg-[#111111] p-5 hover:border-[#F5C542]/50 hover:bg-[#171717] hover:shadow-[0_8px_20px_-8px_rgba(245,197,66,0.15)] transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#2A2A2A] bg-[#171717] group-hover:border-[#F5C542]/40 group-hover:bg-[#1f1a10] transition-colors">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  {cat.badge && (
                    <span className="rounded-full border border-[#F5C542]/30 bg-[#F5C542]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#F5C542]">
                      {cat.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-semibold text-[#F8F8F8] group-hover:text-[#F5C542] transition-colors">
                  {cat.name}
                </h3>
                <p className="mt-1.5 text-xs text-[#A3A3A3] line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#2A2A2A] flex items-center justify-between text-xs text-[#A3A3A3]">
                <span>{cat.itemCount}</span>
                <span className="font-medium text-[#F8F8F8] group-hover:text-[#F5C542] group-hover:translate-x-0.5 transition-all">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
