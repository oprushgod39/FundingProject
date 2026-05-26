import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Case Studies | Academy Ventures",
  description:
    "Representative Academy Ventures case study concepts across senior care, workforce, public sector healthcare access, and community infrastructure.",
};

const caseStudies = [
  {
    sector: "Healthcare Infrastructure",
    title: "Adult Day Healthcare Expansion Model",
    challenge: "Communities need coordinated senior care options that reduce isolation, support caregivers, and improve access to daily health services.",
    approach: "Develop an operating model that combines center-based services, care navigation, transportation coordination, and administrative infrastructure.",
    outcome: "A repeatable expansion framework for adult day healthcare programs in underserved and aging communities.",
  },
  {
    sector: "Workforce Systems",
    title: "Healthcare Training Pipeline",
    challenge: "Healthcare organizations face workforce shortages across administrative, care support, transportation, and community-health roles.",
    approach: "Create education-to-employment pathways with institutional partners, readiness standards, and employer-aligned training programs.",
    outcome: "A scalable pipeline that supports regional healthcare workforce readiness and long-term employment mobility.",
  },
  {
    sector: "Public Sector",
    title: "Community Healthcare Access Program",
    challenge: "Public agencies and community partners need practical operating support for populations with complex healthcare and mobility needs.",
    approach: "Coordinate community outreach, case navigation, transportation support, and compliance-oriented administrative workflows.",
    outcome: "A stronger access layer for seniors, veterans, vulnerable populations, and underserved communities.",
  },
  {
    sector: "Strategic Infrastructure",
    title: "Senior Housing and Care Coordination",
    challenge: "Aging populations require housing, wellness, transportation, and care-navigation support that works as one connected system.",
    approach: "Align senior housing support with healthcare access, community services, and workforce-enabled operating models.",
    outcome: "A more durable community infrastructure model for senior wellness and long-term quality of life.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        label="Case Studies"
        title="Representative Operating"
        titleAccent="Models"
        description="Selected concept studies showing how Academy Ventures can structure healthcare infrastructure, workforce systems, public-sector collaboration, and community impact initiatives."
      />

      <section className="section-padding bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-25" />
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {caseStudies.map((study, index) => (
              <AnimatedSection key={study.title} delay={index * 90}>
                <article className="data-panel p-8 h-full group hover:border-gold-500/40 transition-colors duration-300">
                  <div className="flex items-center justify-between gap-4 mb-8">
                    <span className="text-gold-500 text-xs uppercase tracking-[0.22em] font-semibold">
                      {study.sector}
                    </span>
                    <span className="text-silver-500 font-mono text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="font-display text-3xl text-silver-100 leading-tight mb-6 group-hover:text-gold-400 transition-colors duration-300">
                    {study.title}
                  </h2>
                  {[
                    ["Challenge", study.challenge],
                    ["Approach", study.approach],
                    ["Model Outcome", study.outcome],
                  ].map(([label, text]) => (
                    <div key={label} className="border-t border-navy-700 py-5">
                      <h3 className="text-silver-300 text-xs uppercase tracking-[0.2em] mb-3">
                        {label}
                      </h3>
                      <p className="text-silver-400 text-sm leading-relaxed">{text}</p>
                    </div>
                  ))}
                </article>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-14 text-center">
            <Link href="/contact#partnership" className="btn-primary">
              Discuss a Similar Initiative
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
