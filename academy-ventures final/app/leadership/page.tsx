import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Leadership | Academy Ventures",
  description:
    "Leadership and governance positioning for Academy Ventures across healthcare operations, public sector strategy, workforce systems, and technology.",
};

const leadershipRoles = [
  {
    role: "Executive Leadership",
    focus: "Strategic direction, growth priorities, institutional partnerships, and long-term platform governance.",
  },
  {
    role: "Healthcare Operations",
    focus: "Senior care models, adult day healthcare programs, home and community-based services, and care coordination.",
  },
  {
    role: "Public Sector Strategy",
    focus: "Government relations, agency collaboration, municipal programs, and compliance-oriented implementation.",
  },
  {
    role: "Workforce Development",
    focus: "Training pathways, education partnerships, healthcare readiness programs, and talent mobilization.",
  },
  {
    role: "Technology and Analytics",
    focus: "Dashboards, administrative systems, data-informed reporting, and AI-assisted operational workflows.",
  },
  {
    role: "Community Impact",
    focus: "Veterans initiatives, senior wellness, underserved community access, and long-term social impact models.",
  },
];

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        label="Leadership"
        title="Governance for"
        titleAccent="Execution"
        description="Academy Ventures is structured around operational leadership, healthcare expertise, public-sector collaboration, workforce development, and scalable infrastructure delivery."
      />

      <section className="section-padding bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-25" />
        <div className="container-wide relative z-10">
          <AnimatedSection className="mb-14 max-w-4xl">
            <span className="label-tag">Leadership Architecture</span>
            <div className="gold-divider" />
            <h2 className="section-heading mb-6">
              A leadership model built for{" "}
              <span className="text-gold-500">regulated, multi-sector operations.</span>
            </h2>
            <p className="section-subheading">
              This page is designed as a polished leadership framework until final executive
              names, biographies, headshots, and board/advisory information are ready.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadershipRoles.map((item, index) => (
              <AnimatedSection key={item.role} delay={index * 80}>
                <div className="data-panel p-7 h-full">
                  <span className="text-gold-500/60 font-mono text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-silver-100 text-xl font-semibold mt-5 mb-4">
                    {item.role}
                  </h3>
                  <p className="text-silver-400 text-sm leading-relaxed">{item.focus}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
