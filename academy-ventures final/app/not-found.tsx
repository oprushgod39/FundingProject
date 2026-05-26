import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Academy Ventures",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[280px] font-bold text-navy-800/25 pointer-events-none select-none">
        404
      </div>
      <div className="relative z-10 text-center section-padding">
        <span className="label-tag block">Navigation Error</span>
        <div className="w-16 h-px bg-gold-500 mb-8 mx-auto" />
        <h1 className="font-display text-5xl md:text-6xl text-silver-100 leading-tight mb-6">
          Page <span className="text-gold-500">Not Found</span>
        </h1>
        <p className="text-silver-400 text-lg leading-relaxed max-w-xl mx-auto mb-10">
          The page you are looking for may have been moved, renamed, or is temporarily unavailable.
          Return to the homepage or explore our platform below.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">Return Home</Link>
          <Link href="/contact" className="btn-outline">Contact Us</Link>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[
            { label: "About", href: "/about" },
            { label: "Divisions", href: "/divisions" },
            { label: "Government Solutions", href: "/government-solutions" },
            { label: "Partnerships", href: "/partnerships" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border border-navy-600 hover:border-gold-500/50 bg-navy-900/50 px-4 py-3 text-silver-400 hover:text-gold-400 text-xs uppercase tracking-widest transition-colors duration-200 text-center"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
