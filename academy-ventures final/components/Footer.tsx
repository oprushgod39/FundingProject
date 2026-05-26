import Link from "next/link";
import AcademyLogo from "./AcademyLogo";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Divisions", href: "/divisions" },
    { label: "Leadership", href: "/leadership" },
    { label: "Careers", href: "/careers" },
  ],
  Solutions: [
    { label: "Government Solutions", href: "/government-solutions" },
    { label: "Workforce Development", href: "/workforce-development" },
    { label: "Technology", href: "/technology" },
    { label: "Strategic Consulting", href: "/divisions#consulting" },
  ],
  Community: [
    { label: "Community Impact", href: "/community-impact" },
    { label: "Veterans Initiatives", href: "/community-impact#veterans" },
    { label: "Senior Care", href: "/divisions#senior-care" },
    { label: "Healthcare Infrastructure", href: "/divisions#healthcare" },
  ],
  Connect: [
    { label: "Partnerships", href: "/partnerships" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Investor Relations", href: "/investor-relations" },
    { label: "Media & Press", href: "/media" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-700">
      {/* Main Footer */}
      <div className="section-padding container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <AcademyLogo size="lg" />
            </div>
            <p className="text-silver-400 text-sm leading-relaxed mb-8 max-w-sm">
              Building scalable systems for healthcare, workforce, and community advancement across the United States.
            </p>
            <div className="gold-divider" />
            <p className="text-silver-500 text-xs uppercase tracking-widest">
              Infrastructure for Better Care
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-silver-100 text-xs font-semibold uppercase tracking-[0.2em] mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-silver-400 hover:text-gold-400 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-700 px-6 md:px-12 lg:px-20 xl:px-28 py-6">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-silver-500 text-xs">
            © {new Date().getFullYear()} Academy Ventures. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-silver-500 hover:text-silver-300 text-xs transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-silver-500 hover:text-silver-300 text-xs transition-colors duration-200">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
