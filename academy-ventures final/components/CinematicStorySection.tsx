import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const storyFrames = [
  {
    kicker: "Healthcare Infrastructure",
    title: "Facilities, care networks, and operating models built around access.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=80",
  },
  {
    kicker: "Public Sector Readiness",
    title: "Structured for agency collaboration, compliance discipline, and scalable delivery.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80",
  },
  {
    kicker: "Workforce Systems",
    title: "Training pathways that connect education, employment, and healthcare demand.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=80",
  },
];

export default function CinematicStorySection() {
  return (
    <section className="bg-navy-950 relative overflow-hidden">
      {storyFrames.map((frame, index) => (
        <div key={frame.kicker} className="relative min-h-[78vh] flex items-end overflow-hidden">
          <div className="absolute inset-0 opacity-45">
            <Image
              src={frame.image}
              alt={frame.kicker}
              fill
              className="object-cover scale-105"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/82 to-navy-950/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
          <div className="absolute inset-0 scanline-overlay opacity-15" />
          <div className="container-wide section-padding relative z-10">
            <AnimatedSection className="max-w-3xl">
              <span className="label-tag">{frame.kicker}</span>
              <div className="gold-divider" />
              <h2 className="font-display text-4xl md:text-6xl text-silver-100 leading-tight mb-8">
                {frame.title}
              </h2>
              <div className="flex items-center gap-4 text-silver-500 text-xs uppercase tracking-[0.25em]">
                <span className="text-gold-500 font-mono">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>Strategic platform narrative</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      ))}
    </section>
  );
}
