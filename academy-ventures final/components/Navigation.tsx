"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AcademyLogo from "./AcademyLogo";

const navLinks = [
  { label: "About", href: "/about" },
  {
    label: "Divisions",
    href: "/divisions",
    children: [
      { label: "Healthcare Operations", href: "/divisions#healthcare", eyebrow: "Care systems" },
      { label: "Senior Care Infrastructure", href: "/divisions#senior-care", eyebrow: "Facilities & services" },
      { label: "Workforce Development", href: "/workforce-development", eyebrow: "Training pathways" },
      { label: "Technology & Innovation", href: "/technology", eyebrow: "Analytics layer" },
    ],
  },
  { label: "Government Solutions", href: "/government-solutions" },
  { label: "Community Impact", href: "/community-impact" },
  {
    label: "Partnerships",
    href: "/partnerships",
    children: [
      { label: "Strategic Partnerships", href: "/partnerships", eyebrow: "Partner model" },
      { label: "Case Studies", href: "/case-studies", eyebrow: "Operating examples" },
      { label: "Investor Relations", href: "/investor-relations", eyebrow: "Growth platform" },
      { label: "Media & Press", href: "/media", eyebrow: "Communications" },
    ],
  },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-950/95 backdrop-blur-md border-b border-navy-700/50"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20 xl:px-24">
        <div className="grid grid-cols-[1fr_auto] xl:grid-cols-[280px_minmax(0,1fr)_180px] items-center gap-6 xl:gap-8 h-20">
          <AcademyLogo />

          {/* Desktop Nav */}
          <nav className="hidden xl:grid grid-cols-5 items-center h-full">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative flex h-full items-center justify-center"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`block w-full text-center text-sm font-medium uppercase tracking-widest leading-relaxed transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-gold-500"
                      : "text-silver-300 hover:text-silver-100"
                  }`}
                >
                  {link.label}
                </Link>
                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-5 w-[560px] bg-navy-950/95 border border-navy-600 shadow-2xl shadow-black/40 backdrop-blur-xl p-6">
                    <div className="mb-5 border-b border-navy-700 pb-4">
                      <p className="text-gold-500 text-[10px] font-semibold uppercase tracking-[0.28em] mb-2">
                        Integrated Operating Ecosystem
                      </p>
                      <p className="text-silver-400 text-xs leading-relaxed max-w-md">
                        Healthcare infrastructure, public-sector programs, workforce systems,
                        and technology-enabled operations under one strategic platform.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block p-4 border border-navy-700 hover:border-gold-500/50 hover:bg-navy-800/70 transition-colors duration-150"
                        >
                          <span className="block text-gold-500/80 text-[10px] uppercase tracking-[0.2em] mb-2">
                            {child.eyebrow}
                          </span>
                          <span className="block text-sm text-silver-200">{child.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden xl:flex items-center justify-end">
            <Link href="/contact" className="btn-primary text-xs py-3 px-6 w-full justify-center">
              Contact Us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="xl:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className={`block w-6 h-px bg-silver-100 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-px bg-silver-100 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-silver-100 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="xl:hidden bg-navy-900 border-t border-navy-700 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <nav className="px-6 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <div className="flex items-center justify-between border-b border-navy-700">
                  <Link
                    href={link.href}
                    className="text-silver-300 hover:text-gold-400 font-medium text-sm uppercase tracking-widest py-3 flex-1"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <button
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === link.label ? null : link.label)
                      }
                      aria-label={`${mobileExpanded === link.label ? "Collapse" : "Expand"} ${link.label}`}
                      className="p-3 text-silver-400 hover:text-gold-400 transition-colors duration-200"
                    >
                      <span className={`inline-block transition-transform duration-200 text-xs ${mobileExpanded === link.label ? "rotate-180" : ""}`}>
                        ▾
                      </span>
                    </button>
                  )}
                </div>
                {link.children && mobileExpanded === link.label && (
                  <div className="pl-4 py-2 bg-navy-800/50 border-b border-navy-700">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center gap-3 py-2.5 text-silver-400 hover:text-gold-400 transition-colors duration-200"
                      >
                        <span className="w-1 h-1 bg-gold-500/50 rounded-full flex-shrink-0" />
                        <span className="text-sm">{child.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact" className="btn-primary text-center mt-4 text-xs py-3">
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
