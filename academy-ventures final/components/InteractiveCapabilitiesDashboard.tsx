"use client";

import { useState } from "react";
import Link from "next/link";

const capabilities = [
  {
    name: "Healthcare Operations",
    label: "Care Delivery",
    headline: "Integrated operating models for senior care and community health access.",
    description:
      "Center-based services, home and community-based support, care navigation, transportation coordination, pharmacy alignment, and administrative workflows.",
    metrics: ["Senior care systems", "Care coordination", "Mobility support"],
    graph: [
      { label: "Access", value: 92 },
      { label: "Coordination", value: 84 },
      { label: "Mobility", value: 76 },
      { label: "Admin", value: 68 },
    ],
    link: "/divisions#healthcare",
  },
  {
    name: "Government Solutions",
    label: "Public Sector",
    headline: "Program infrastructure for agencies, municipalities, and institutions.",
    description:
      "Compliance-oriented implementation support for public health, senior accessibility, Medicaid waiver-aligned programs, and vulnerable population initiatives.",
    metrics: ["Agency collaboration", "Program launch", "Operational scaling"],
    graph: [
      { label: "Agency", value: 86 },
      { label: "Launch", value: 78 },
      { label: "Scale", value: 82 },
      { label: "Compliance", value: 90 },
    ],
    link: "/government-solutions",
  },
  {
    name: "Workforce Development",
    label: "Readiness",
    headline: "Training pathways that connect healthcare demand with qualified talent.",
    description:
      "Employer-aligned education models, healthcare administration pathways, medical support training, leadership development, and continuing education collaborations.",
    metrics: ["Training pipelines", "Employer alignment", "Career mobility"],
    graph: [
      { label: "Training", value: 88 },
      { label: "Placement", value: 72 },
      { label: "Readiness", value: 80 },
      { label: "Leadership", value: 62 },
    ],
    link: "/workforce-development",
  },
  {
    name: "Community Impact",
    label: "Access",
    headline: "Systems designed for seniors, veterans, and underserved communities.",
    description:
      "Community partnerships, outreach programs, veterans accessibility, aging population support, and long-term social impact models.",
    metrics: ["Veterans support", "Senior wellness", "Underserved access"],
    graph: [
      { label: "Veterans", value: 76 },
      { label: "Seniors", value: 90 },
      { label: "Outreach", value: 82 },
      { label: "Access", value: 86 },
    ],
    link: "/community-impact",
  },
  {
    name: "Technology Integration",
    label: "Modernization",
    headline: "Analytics, dashboards, and AI-assisted workflows for better operations.",
    description:
      "Data-informed reporting, workforce coordination platforms, administrative systems integration, communication tools, and operational visibility.",
    metrics: ["Analytics layer", "AI workflows", "Reporting systems"],
    graph: [
      { label: "Analytics", value: 86 },
      { label: "Workflow", value: 74 },
      { label: "Reporting", value: 92 },
      { label: "Systems", value: 80 },
    ],
    link: "/technology",
  },
];

export default function InteractiveCapabilitiesDashboard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = capabilities[activeIndex];

  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="absolute inset-0 scanline-overlay opacity-10" />
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-[0.85fr_1.15fr] gap-14 items-start">
          <div>
            <span className="label-tag">Interactive Capabilities</span>
            <div className="gold-divider" />
            <h2 className="section-heading mb-8">
              Explore the Academy Ventures{" "}
              <span className="text-gold-500">operating platform.</span>
            </h2>
            <p className="text-silver-400 leading-relaxed mb-8">
              Select a capability to see how healthcare infrastructure, public-sector
              collaboration, workforce systems, community impact, and technology connect
              inside one strategic platform.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-3">
              {capabilities.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group text-left border p-5 transition-all duration-300 ${
                    activeIndex === index
                      ? "border-gold-500 bg-navy-950"
                      : "border-navy-600 bg-navy-950/40 hover:border-gold-500/50"
                  }`}
                >
                  <span className="block text-gold-500/80 text-[10px] uppercase tracking-[0.24em] mb-2">
                    {item.label}
                  </span>
                  <span className="block text-silver-100 font-semibold group-hover:text-gold-400 transition-colors">
                    {item.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="data-panel min-h-[620px] p-8 md:p-10 relative overflow-hidden">
            <div className="absolute inset-0 grid-overlay opacity-30" />
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-navy-700 pb-6 mb-10">
                <div>
                  <span className="text-gold-500 text-xs uppercase tracking-[0.24em] font-semibold">
                    {active.label}
                  </span>
                  <h3 className="font-display text-4xl md:text-5xl text-silver-100 leading-tight mt-3">
                    {active.name}
                  </h3>
                </div>
                <span className="text-silver-500 font-mono text-sm">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(capabilities.length).padStart(2, "0")}
                </span>
              </div>

              <h4 className="font-display text-3xl md:text-4xl text-silver-100 leading-tight mb-6">
                {active.headline}
              </h4>
              <p className="text-silver-400 text-lg leading-relaxed mb-10 max-w-3xl">
                {active.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                {active.metrics.map((metric) => (
                  <div key={metric} className="border border-navy-600 bg-navy-900/70 p-5">
                    <span className="text-silver-300 text-xs uppercase tracking-[0.18em]">
                      {metric}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border border-navy-600 bg-navy-950/70 p-6 mb-10">
                <div className="flex items-center justify-between gap-4 mb-7">
                  <span className="text-silver-400 text-[10px] uppercase tracking-[0.24em]">
                    Capability Profile
                  </span>
                  <span className="text-gold-500 text-[10px] uppercase tracking-[0.24em]">
                    Dynamic Index
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-4 h-52 items-end border-b border-navy-700 pb-4">
                  {active.graph.map((item) => (
                    <div key={item.label} className="h-full flex flex-col justify-end">
                      <div className="text-silver-500 text-xs font-mono mb-2 text-center">
                        {item.value}
                      </div>
                      <div className="h-full flex items-end bg-navy-900/70 border border-navy-700">
                        <div
                          className="w-full bg-gradient-to-t from-gold-600 to-gold-300"
                          style={{ height: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-4 gap-4 pt-4">
                  {active.graph.map((item) => (
                    <div
                      key={item.label}
                      className="text-center text-silver-400 text-[10px] uppercase tracking-[0.16em]"
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>

              <Link href={active.link} className="btn-primary">
                Explore {active.name}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
