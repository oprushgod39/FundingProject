import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const divisions = [
  {
    number: "01",
    title: "Healthcare Operations",
    description:
      "Integrated healthcare service models focused on senior wellness, coordinated care, community support, and long-term health outcomes.",
    href: "/divisions#healthcare",
  },
  {
    number: "02",
    title: "Senior Care Infrastructure",
    description:
      "Development and operational support for adult day healthcare centers, community wellness programs, and care coordination systems.",
    href: "/divisions#senior-care",
  },
  {
    number: "03",
    title: "Workforce Development",
    description:
      "Training pathways, healthcare education initiatives, and workforce readiness programs designed to strengthen the future healthcare workforce.",
    href: "/workforce-development",
  },
  {
    number: "04",
    title: "Government & Institutional Solutions",
    description:
      "Strategic collaborations supporting public health initiatives, healthcare accessibility, infrastructure programs, and operational consulting.",
    href: "/government-solutions",
  },
  {
    number: "05",
    title: "Community Development",
    description:
      "Projects focused on underserved populations, aging communities, veterans support systems, and accessible care ecosystems.",
    href: "/community-impact",
  },
  {
    number: "06",
    title: "Technology & Innovation",
    description:
      "Healthcare technology modernization, analytics integration, operational systems optimization, and scalable infrastructure support.",
    href: "/technology",
  },
];

export default function DivisionsSection() {
  return (
    <section id="divisions" className="section-padding bg-navy-900 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="container-wide">
        <AnimatedSection className="text-center mb-16">
          <span className="label-tag">Our Ecosystem</span>
          <div className="gold-divider mx-auto" />
          <h2 className="section-heading mb-6">Core Divisions</h2>
          <p className="section-subheading mx-auto text-center">
            A diversified portfolio of capabilities working in concert to deliver scalable,
            integrated solutions across the healthcare and community landscape.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-navy-700">
          {divisions.map((division, i) => (
            <AnimatedSection key={division.number} delay={i * 100}>
              <Link href={division.href} className="group block card-dark h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-gold-500/0 via-gold-500/50 to-gold-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="font-display text-5xl font-bold text-navy-600 group-hover:text-navy-500 transition-colors duration-300 block mb-6">
                  {division.number}
                </span>
                <h3 className="text-silver-100 font-semibold text-xl mb-4 group-hover:text-gold-400 transition-colors duration-300">
                  {division.title}
                </h3>
                <p className="text-silver-400 text-sm leading-relaxed mb-6">
                  {division.description}
                </p>
                <span className="text-gold-500 text-xs uppercase tracking-widest font-semibold flex items-center gap-2">
                  Learn More
                  <span className="group-hover:translate-x-2 transition-transform duration-300 inline-block">→</span>
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12" delay={300}>
          <Link href="/divisions" className="btn-outline">
            View All Divisions
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
