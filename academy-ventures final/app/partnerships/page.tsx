import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Partnerships | Academy Ventures",
  description:
    "Academy Ventures welcomes collaboration with government agencies, healthcare organizations, investors, educational institutions, and community organizations.",
};

const partnerCategories = [
  {
    title: "Government Agencies",
    description: "State and federal agencies seeking operationally capable partners for healthcare, workforce, and community infrastructure programs.",
    type: "Public Sector",
  },
  {
    title: "Healthcare Organizations",
    description: "Health systems, networks, and providers looking to expand their community-based care capabilities or operational reach.",
    type: "Healthcare",
  },
  {
    title: "Investors",
    description: "Institutional and strategic investors aligned with healthcare infrastructure, senior care, and community development opportunities.",
    type: "Financial",
  },
  {
    title: "Educational Institutions",
    description: "Universities, community colleges, and vocational schools interested in healthcare workforce development collaborations.",
    type: "Academic",
  },
  {
    title: "Community Organizations",
    description: "Nonprofits, foundations, and community-based organizations working toward improved healthcare access and community resilience.",
    type: "Community",
  },
  {
    title: "Infrastructure Developers",
    description: "Real estate and infrastructure firms with interest in developing affordable senior housing, healthcare facilities, and community centers.",
    type: "Development",
  },
];

const platformRequirements = [
  "Government partnership pages",
  "Capability statement section",
  "Investor-grade layout",
  "Mobile cinematic optimization",
  "ADA and SEO architecture",
  "Fast-loading visual system",
];

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        label="Partnerships"
        title="Strategic Partnerships for"
        titleAccent="Institutional Scale"
        description="Academy Ventures welcomes collaboration opportunities with government agencies, health systems, investors, educational institutions, and infrastructure partners building durable healthcare and workforce systems."
      />

      <section className="section-padding bg-navy-950 relative overflow-hidden">
        <div
          className="absolute inset-y-0 right-0 w-1/2 opacity-25 cinematic-mask"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 grid-overlay opacity-25" />
        <div className="container-wide relative z-10">
          <AnimatedSection className="max-w-4xl">
            <span className="label-tag">Enterprise Positioning</span>
            <div className="gold-divider" />
            <h2 className="font-display text-4xl md:text-6xl text-silver-100 leading-tight mb-8">
              Built for partners who need{" "}
              <span className="text-gold-500">operational credibility,</span> not brochureware.
            </h2>
            <p className="text-silver-400 text-lg leading-relaxed">
              The partnership experience is modeled around prime contractor discipline,
              federal consulting clarity, and healthcare enterprise trust. The goal is not
              to look like a local agency or staffing firm; it is to signal a serious
              organization capable of coordinating care infrastructure, public-sector
              programs, workforce systems, and strategic operations.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Partnership Philosophy */}
      <section className="section-padding bg-navy-900">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection direction="left">
              <span className="label-tag">Our Approach</span>
              <div className="gold-divider" />
              <h2 className="font-display text-4xl md:text-5xl text-silver-100 leading-tight mb-8">
                Partnerships Built on{" "}
                <span className="text-gold-500">Shared Purpose</span>
              </h2>
              <p className="text-silver-400 leading-relaxed mb-6">
                We don&apos;t approach partnerships transactionally. Every collaboration is
                evaluated through the lens of mission alignment, operational compatibility,
                and long-term community impact.
              </p>
              <p className="text-silver-400 leading-relaxed mb-6">
                Academy Ventures brings to every partnership: operational infrastructure,
                regulatory knowledge, established community relationships, and a proven track
                record of scaling healthcare and community programs across multiple states.
              </p>
              <p className="text-silver-400 leading-relaxed">
                Whether you&apos;re a government agency, a healthcare system, an investor, or
                a community organization — we approach every relationship as a long-term
                strategic alignment.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="space-y-4">
                {[
                  { title: "Mission Alignment First", desc: "We evaluate every opportunity through the lens of community impact." },
                  { title: "Long-Term Orientation", desc: "We build for durability, not just for the immediate transaction." },
                  { title: "Operational Depth", desc: "We show up with infrastructure, systems, and expertise — not just ideas." },
                  { title: "Transparent Communication", desc: "Clear reporting, open dialogue, and consistent accountability." },
                  { title: "Scalability by Design", desc: "Every partnership is structured to grow as needs evolve." },
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-4 p-5 border border-navy-600 hover:border-gold-500/40 transition-colors duration-300 group">
                    <span className="text-gold-500/40 font-mono text-sm flex-shrink-0 group-hover:text-gold-500 transition-colors duration-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4 className="text-silver-200 font-semibold text-sm mb-1 group-hover:text-gold-400 transition-colors duration-300">{item.title}</h4>
                      <p className="text-silver-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="section-padding bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="container-wide relative z-10">
          <AnimatedSection className="mb-16">
            <span className="label-tag">Who We Partner With</span>
            <div className="gold-divider" />
            <h2 className="font-display text-4xl md:text-5xl text-silver-100 leading-tight">
              Partnership{" "}
              <span className="text-gold-500">Opportunities</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerCategories.map((partner, i) => (
              <AnimatedSection key={partner.title} delay={i * 100}>
                <div className="group p-8 border border-navy-700 hover:border-gold-500/40 transition-all duration-300 h-full relative">
                  <div className="absolute top-0 left-0 w-0 h-px bg-gold-500 group-hover:w-full transition-all duration-700" />
                  <span className="text-gold-500 text-xs font-semibold uppercase tracking-[0.2em] block mb-3">
                    {partner.type}
                  </span>
                  <h3 className="text-silver-100 font-semibold text-lg mb-4 group-hover:text-gold-400 transition-colors duration-300">
                    {partner.title}
                  </h3>
                  <p className="text-silver-400 text-sm leading-relaxed">{partner.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="investors" className="section-padding bg-navy-900">
        <div className="container-wide text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl text-silver-100 mb-6">
              Start a{" "}
              <span className="text-gold-500">Conversation</span>
            </h2>
            <p className="text-silver-400 mb-8 max-w-xl mx-auto">
              Our partnerships team is ready to explore how Academy Ventures can align with
              your mission and amplify your impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact#partnership" className="btn-primary">Partnership Inquiry</Link>
              <Link href="/investor-relations" className="btn-outline">Investor Relations</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-navy-950">
        <div className="container-wide">
          <AnimatedSection className="mb-12 text-center">
            <span className="label-tag">Required Features</span>
            <div className="gold-divider mx-auto" />
            <h2 className="font-display text-4xl md:text-5xl text-silver-100 leading-tight">
              Website Platform Requirements
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {platformRequirements.map((item, index) => (
              <AnimatedSection key={item} delay={index * 80}>
                <div className="data-panel p-6 h-full">
                  <span className="text-gold-500/60 font-mono text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-silver-100 font-semibold mt-5">{item}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
