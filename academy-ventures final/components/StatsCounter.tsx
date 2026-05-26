"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 15, suffix: "+", label: "States of Operation" },
  { value: 50, suffix: "+", label: "Strategic Partners" },
  { value: 10000, suffix: "+", label: "Lives Impacted" },
  { value: 25, suffix: "+", label: "Years of Expertise" },
];

function Counter({ value, suffix, label }: StatItem) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl md:text-6xl font-bold text-gold-500 mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-silver-400 text-sm uppercase tracking-widest font-medium">{label}</div>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="bg-navy-800 border-y border-navy-600 py-20">
      <div className="container-wide section-padding py-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <Counter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
