interface PageHeroProps {
  label: string;
  title: string;
  titleAccent?: string;
  description: string;
}

export default function PageHero({ label, title, titleAccent, description }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-24 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-600/50 to-transparent" />
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-navy-900/50 to-transparent pointer-events-none" />

      <div className="container-wide section-padding py-0 relative z-10">
        <span className="label-tag">{label}</span>
        <div className="gold-divider" />
        <h1 className="section-heading mb-6">
          {title}{" "}
          {titleAccent && <span className="text-gold-500">{titleAccent}</span>}
        </h1>
        <p className="section-subheading">{description}</p>
      </div>
    </section>
  );
}
