import Link from "next/link";
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiMail,
  FiShield,
} from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Marketplace", href: "#marketplace" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "About UniLoop", href: "#about" },
    { name: "Safety Guidelines", href: "#safety" },
  ];

  const categories = [
    { name: "Books & Textbooks", href: "#categories" },
    { name: "Calculators", href: "#categories" },
    { name: "Electronics & Audio", href: "#categories" },
    { name: "Academic Supplies", href: "#categories" },
    { name: "Dorm Essentials", href: "#categories" },
    { name: "Other Items", href: "#categories" },
  ];

  return (
    <footer className="border-t border-[#2A2A2A] bg-[#090909] text-[#A3A3A3] pt-16 pb-12 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo & Value Prop */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#171717] border border-[#2A2A2A] group-hover:border-[#F5C542]/50 transition-colors">
                <span className="text-base font-black text-[#F8F8F8]">
                  U<span className="text-[#F5C542]">L</span>
                </span>
              </div>
              <span className="text-xl font-bold tracking-tight text-[#F8F8F8]">
                Uni<span className="gradient-yellow-text font-black">Loop</span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-[#A3A3A3] max-w-sm">
              The peer-to-peer campus marketplace where university students buy and sell textbooks, calculators, academic supplies, and student essentials with ease and trust.
            </p>

            {/* University Trust Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2A2A2A] bg-[#111111] px-3 py-1 text-xs text-[#F8F8F8]">
              <FaGraduationCap className="text-[#F5C542] h-3.5 w-3.5" />
              <span>Verified university email required to trade</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#social-github"
                aria-label="UniLoop GitHub"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#2A2A2A] bg-[#111111] text-[#A3A3A3] hover:text-[#F8F8F8] hover:border-[#F5C542]/40 transition-colors"
              >
                <FiGithub className="h-4 w-4" />
              </a>
              <a
                href="#social-twitter"
                aria-label="UniLoop Twitter / X"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#2A2A2A] bg-[#111111] text-[#A3A3A3] hover:text-[#F8F8F8] hover:border-[#F5C542]/40 transition-colors"
              >
                <FiTwitter className="h-4 w-4" />
              </a>
              <a
                href="#social-linkedin"
                aria-label="UniLoop LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#2A2A2A] bg-[#111111] text-[#A3A3A3] hover:text-[#F8F8F8] hover:border-[#F5C542]/40 transition-colors"
              >
                <FiLinkedin className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                aria-label="Contact UniLoop Support"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#2A2A2A] bg-[#111111] text-[#A3A3A3] hover:text-[#F8F8F8] hover:border-[#F5C542]/40 transition-colors"
              >
                <FiMail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F8F8F8]">
              Platform
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#F8F8F8] hover:underline underline-offset-4 decoration-[#F5C542]/60 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F8F8F8]">
              Categories
            </h3>
            <ul className="space-y-2.5 text-sm">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <Link
                    href={cat.href}
                    className="hover:text-[#F8F8F8] hover:underline underline-offset-4 decoration-[#F5C542]/60 transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Campus Support & Safe Meetups */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F8F8F8]">
              Campus Safety & Help
            </h3>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="rounded-lg border border-[#2A2A2A] bg-[#111111] p-3 space-y-1.5">
                <div className="flex items-center gap-1.5 font-medium text-[#F8F8F8]">
                  <FiShield className="text-[#F5C542] h-3.5 w-3.5" />
                  <span>Campus Safe Zones</span>
                </div>
                <p className="text-[#A3A3A3]">
                  Always trade in public spaces like university libraries, cafeterias, or student centers.
                </p>
              </div>

              <div className="space-y-1 text-xs">
                <p className="text-[#A3A3A3]">Support & Inquiries:</p>
                <p className="font-mono text-[#F8F8F8]">support@uniloop.campus</p>
                <p className="text-[11px] text-[#A3A3A3]">Sunday – Thursday: 9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A3A3A3]">
          <p>© {currentYear} UniLoop. All rights reserved. Made for university students.</p>
          <div className="flex items-center gap-6">
            <Link href="#privacy" className="hover:text-[#F8F8F8] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-[#F8F8F8] transition-colors">
              Terms of Service
            </Link>
            <Link href="#community" className="hover:text-[#F8F8F8] transition-colors">
              Community Honor Code
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
