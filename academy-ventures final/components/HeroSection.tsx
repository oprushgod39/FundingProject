"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const pillars = [
  {
    label: "Senior Care & Health",
    description: "Adult day healthcare, HCBS, care coordination, and transportation systems.",
    number: "01",
  },
  {
    label: "Government Programs",
    description: "Agency collaboration, Medicaid waiver operations, and public health infrastructure.",
    number: "02",
  },
  {
    label: "Workforce Development",
    description: "Training pipelines, healthcare education, and workforce readiness programs.",
    number: "03",
  },
  {
    label: "Technology & Operations",
    description: "Analytics, AI-assisted workflows, and data-driven operational infrastructure.",
    number: "04",
  },
];

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-navy-950">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2400&q=80"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-950/75 to-navy-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-transparent to-navy-950/40" />
      <div className="absolute inset-0 scanline-overlay opacity-15" />
      <div className="absolute inset-0 grid-overlay opacity-60" />

      {/* Left accent line */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-gold-500/25 to-transparent" />

      {/* Glow */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full bg-gold-500/4 blur-3xl pointer-events-none" />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container-wide section-padding py-0 pt-28 pb-12 w-full">
          <div className="max-w-4xl">

            {/* Eyebrow */}
            <div
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "none" : "translateY(16px)",
                transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
              }}
              className="mb-7"
            >
              <span className="label-tag">Strategic Development Organization</span>
              <div className="flex items-center gap-3 mt-1">
                <div className="w-10 h-px bg-gold-500" />
                <span className="text-silver-500 text-[11px] uppercase tracking-[0.28em]">
                  United States · Multi-State Operations
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1
              className="font-display text-[clamp(2.8rem,6vw,4.5rem)] text-silver-100 leading-[1.04] mb-7"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "none" : "translateY(24px)",
                transition: "opacity 0.9s ease 0.25s, transform 0.9s ease 0.25s",
              }}
            >
              We build the systems behind
              <br />
              <span className="text-gold-500">healthcare, workforce,</span>
              <br />
              and community infrastructure.
            </h1>

            {/* Subheadline */}
            <p
              className="text-silver-400 text-lg leading-relaxed max-w-xl mb-10"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "none" : "translateY(16px)",
                transition: "opacity 0.8s ease 0.45s, transform 0.8s ease 0.45s",
              }}
            >
              Academy Ventures is a diversified strategic platform operating across
              senior care, workforce readiness, government programs, and
              technology-enabled community systems.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-3"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "none" : "translateY(16px)",
                transition: "opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s",
              }}
            >
              <Link href="/divisions" className="btn-primary">
                Explore Our Divisions
              </Link>
              <Link
                href="/government-solutions"
                className="btn-outline"
              >
                Government & Institutional
              </Link>
              <Link href="/contact" className="btn-stealth">
                Get in Touch
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom pillar strip ── */}
      <div
        className="relative z-10 border-t border-navy-700/70 bg-navy-950/85 backdrop-blur-sm"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.8s ease 1s",
        }}
      >
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-navy-700/70">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="group px-6 md:px-8 py-6 hover:bg-navy-800/40 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-gold-500/50 font-mono text-[10px] group-hover:text-gold-500 transition-colors duration-300">
                    {pillar.number}
                  </span>
                  <div className="flex-1 h-px bg-navy-600 group-hover:bg-gold-500/30 transition-colors duration-300" />
                </div>
                <p className="text-silver-200 text-sm font-semibold mb-2 group-hover:text-gold-400 transition-colors duration-300">
                  {pillar.label}
                </p>
                <p className="text-silver-500 text-xs leading-relaxed hidden md:block">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
