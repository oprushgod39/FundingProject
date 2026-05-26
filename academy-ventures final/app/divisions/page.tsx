import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Divisions | Academy Ventures",
  description:
    "Explore Academy Ventures' core divisions spanning healthcare operations, senior care infrastructure, workforce development, government solutions, community development, and technology.",
};

const divisions = [
  {
    id: "healthcare",
    number: "01",
    title: "Healthcare Operations",
    tagline: "Integrated Care Delivery at Scale",
    description:
      "Our healthcare operations division focuses on building and managing integrated care delivery systems that improve outcomes for seniors and community members. We design models that emphasize continuity, coordination, and quality of care.",
    services: [
      "Adult Day Healthcare Programs",
      "Community-Based Care Coordination",
      "Senior Wellness Initiatives",
      "Care Navigation Services",
      "Medication Coordination",
      "Rehabilitation Support",
    ],
    href: "/contact",
  },
  {
    id: "senior-care",
    number: "02",
    title: "Senior Care Infrastructure",
    tagline: "Building for an Aging America",
    description:
      "As the U.S. population ages, the demand for scalable senior care infrastructure grows exponentially. We develop and operate adult day healthcare centers, affordable senior housing programs, and community wellness systems.",
    services: [
      "Adult Day Healthcare Center Development",
      "Affordable Senior Housing Support",
      "Senior Wellness Programs",
      "Transportation & Mobility Services",
      "Homecare System Development",
      "Community Support Networks",
    ],
    href: "/contact",
  },
  {
    id: "workforce",
    number: "03",
    title: "Workforce Development",
    tagline: "Training the Next Generation of Healthcare Professionals",
    description:
      "Our workforce development division addresses the critical shortage of healthcare professionals through structured training pathways, education collaborations, and professional development programs.",
    services: [
      "Healthcare Administration Training",
      "Medical Support Education",
      "Healthcare Analytics Programs",
      "Medical Technology Pathways",
      "Community Healthcare Operations",
      "Leadership & Operational Training",
    ],
    href: "/workforce-development",
  },
  {
    id: "government",
    number: "04",
    title: "Government & Institutional Solutions",
    tagline: "Public-Private Partnership Excellence",
    description:
      "We partner with public agencies, municipalities, and institutions to design and implement scalable healthcare and workforce programs aligned with public health objectives and compliance requirements.",
    services: [
      "Public Health Initiative Support",
      "Medicaid Waiver Program Alignment",
      "Government Program Implementation",
      "Compliance-Oriented Operations",
      "Multi-State Coordination",
      "Administrative Infrastructure",
    ],
    href: "/government-solutions",
  },
  {
    id: "community",
    number: "05",
    title: "Community Development",
    tagline: "Building Ecosystems of Support",
    description:
      "Our community development work focuses on the populations that need the most support — aging adults, veterans, underserved communities, and those facing healthcare access barriers.",
    services: [
      "Veterans Wellness Programs",
      "Underserved Population Support",
      "Community Health Outreach",
      "Affordable Housing Initiatives",
      "Rural Healthcare Access",
      "Community Partnership Models",
    ],
    href: "/community-impact",
  },
  {
    id: "technology",
    number: "06",
    title: "Technology & Innovation",
    tagline: "Modern Infrastructure for Modern Healthcare",
    description:
      "We integrate operational technology, analytics, and AI-assisted workflows to modernize healthcare delivery, improve decision-making, and create scalable operational infrastructure.",
    services: [
      "Healthcare Analytics Platforms",
      "Operational Dashboard Systems",
      "AI-Assisted Workflows",
      "Administrative Integration",
      "Workforce Coordination Tools",
      "Technology Modernization",
    ],
    href: "/technology",
  },
];

export default function DivisionsPage() {
  return (
    <>
      <PageHero
        label="Our Ecosystem"
        title="Core Divisions &"
        titleAccent="Capabilities"
        description="A diversified portfolio of integrated capabilities, each working in concert to deliver scalable, mission-aligned solutions across the healthcare and community landscape."
      />

      {/* Divisions */}
      <section className="bg-navy-950">
        {divisions.map((division, i) => (
          <div
            key={division.id}
            id={division.id}
            className={`section-padding ${i % 2 === 0 ? "bg-navy-950" : "bg-navy-900"} relative overflow-hidden border-b border-navy-700`}
          >
            <div className="absolute inset-0 grid-overlay opacity-20" />
            <div className="container-wide relative z-10">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                <AnimatedSection direction={i % 2 === 0 ? "left" : "right"}>
                  <span className="font-display text-8xl font-bold text-navy-700 block mb-4">
                    {division.number}
                  </span>
                  <span className="label-tag">{division.tagline}</span>
                  <h2 className="font-display text-4xl md:text-5xl text-silver-100 leading-tight mb-6">
                    {division.title}
                  </h2>
                  <p className="text-silver-400 leading-relaxed mb-8">
                    {division.description}
                  </p>
                  <Link href={division.href} className="btn-primary">
                    Learn More
                  </Link>
                </AnimatedSection>

                <AnimatedSection direction={i % 2 === 0 ? "right" : "left"} delay={200}>
                  <div className="border border-navy-600 p-8">
                    <h3 className="text-silver-300 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
                      Key Services
                    </h3>
                    <div className="space-y-3">
                      {division.services.map((service) => (
                        <div key={service} className="flex items-center gap-3 py-2 border-b border-navy-700 last:border-0">
                          <span className="w-1.5 h-1.5 bg-gold-500 flex-shrink-0" />
                          <span className="text-silver-400 text-sm">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-900">
        <div className="container-wide text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl text-silver-100 mb-6">
              Interested in a Specific{" "}
              <span className="text-gold-500">Division?</span>
            </h2>
            <p className="text-silver-400 mb-8 max-w-xl mx-auto">
              Our team is ready to discuss how Academy Ventures can support your specific
              healthcare, workforce, or community development objectives.
            </p>
            <Link href="/contact" className="btn-primary">Contact Our Team</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
