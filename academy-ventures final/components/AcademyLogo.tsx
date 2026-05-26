import Link from "next/link";

interface AcademyLogoProps {
  size?: "sm" | "lg";
}

export default function AcademyLogo({ size = "sm" }: AcademyLogoProps) {
  const iconSize = size === "lg" ? "h-16 w-16" : "h-10 w-10";
  const titleSize = size === "lg" ? "text-3xl" : "text-xl";

  return (
    <Link href="/" className="flex items-center gap-3 shrink-0">
      <svg
        className={`${iconSize} flex-shrink-0`}
        viewBox="0 0 120 120"
        role="img"
        aria-label="Academy Ventures logo"
      >
        <defs>
          <linearGradient id="academyRed" x1="30" y1="12" x2="88" y2="62">
            <stop offset="0%" stopColor="#ff4b52" />
            <stop offset="100%" stopColor="#be101c" />
          </linearGradient>
          <linearGradient id="academyBlue" x1="20" y1="54" x2="104" y2="108">
            <stop offset="0%" stopColor="#2b7fd7" />
            <stop offset="100%" stopColor="#182e8c" />
          </linearGradient>
        </defs>

        <circle cx="60" cy="60" r="54" fill="#03070d" />
        <path
          d="M18 55C25 25 43 14 60 14s35 11 42 41c-18-5-32-3-42 10C50 52 36 50 18 55Z"
          fill="url(#academyRed)"
        />
        <path
          d="M15 55c15 4 28 14 38 32 4 8 6 16 7 21 1-5 3-13 7-21 10-18 23-28 38-32-4 34-24 51-45 51S19 89 15 55Z"
          fill="url(#academyBlue)"
        />
        <path
          d="M22 48c16 4 30 13 42 28 12-15 26-24 42-28-15 18-28 39-42 64-14-25-27-46-42-64Z"
          fill="#020810"
        />
        <circle cx="60" cy="39" r="10" fill="#020810" />
      </svg>

      <span className="flex flex-col leading-none">
        <span className={`font-display ${titleSize} font-semibold text-silver-100 tracking-wide`}>
          Academy Ventures
        </span>
        <span className="mt-1 text-gold-500 text-[10px] font-semibold uppercase tracking-[0.26em]">
          Ventures Inc
        </span>
      </span>
    </Link>
  );
}
