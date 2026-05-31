"use client";

import { motion } from "framer-motion";
// import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

const cases = [
  {
    tag: "AgTech Startup",
    title: "Ranch Water Monitoring System",
    problem:
      "Ranchers were spending too much time checking livestock water systems manually.",
    solution:
      "Built an IoT-enabled dashboard so water tanks and herd data could be viewed remotely.",
    result:
      "Saved roughly 30 hours of weekly labor and reduced energy use by 20%.",
  },
  {
    tag: "Enterprise Software",
    title: "Compliance Reporting at Scale",
    problem:
      "Financial institutions needed better reporting to meet customer and compliance demands.",
    solution:
      "Developed entitlement reporting functionality inside an enterprise product at NCR.",
    result:
      "Accelerated roadmap delivery by a year, impacting roughly 200,000 business customers.",
  },
  {
    tag: "AI & Venture Operations",
    title: "AI Tools for Founder Support",
    problem:
      "Early-stage teams need faster operations, sharper messaging, and investor readiness.",
    solution:
      "Built AI-assisted memo workflows and supported startups through Nebraska Angels and The Combine.",
    result:
      "Brought both technical and business perspective to founder growth strategy.",
  },
];

export function SelectedWork() {
  return (
    <AnimatedSection
      id="work"
      className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <SectionLabel>Selected Work</SectionLabel>
          <h2 className="max-w-3xl font-display text-5xl leading-[0.98] tracking-tight text-navy sm:text-6xl">
            A few examples of what I&apos;ve built...
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-navy/[0.62]">
            Problems involving technology, operations, and business growth.
          </p>
        </div>
        {/* <Link
          href="/portfolio"
          className="w-fit rounded-lg border border-navy/[0.18] bg-paper px-5 py-3 text-sm font-bold text-navy shadow-[0_14px_36px_rgba(28,43,58,0.07)] transition hover:-translate-y-0.5 hover:border-amber/[0.35]"
        >
          View full portfolio
        </Link> */}
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {cases.map((item) => (
          <motion.article
            key={item.title}
            whileHover={{
              y: -4,
              boxShadow: "0 28px 75px rgba(28,43,58,0.14)",
              transition: { type: "spring", stiffness: 260, damping: 22 },
            }}
            className="rounded-lg border border-[var(--line)] bg-paper p-7 shadow-[var(--shadow-soft)]"
          >
            <div className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-amber">
              {item.tag}
            </div>
            <h3 className="mt-4 font-display text-3xl leading-none text-navy">
              {item.title}
            </h3>
            <div className="mt-7 space-y-5">
              <div>
                <div className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-sand">
                  Problem
                </div>
                <p className="mt-2 text-sm leading-6 text-navy/[0.68]">
                  {item.problem}
                </p>
              </div>
              <div>
                <div className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-sand">
                  Solution
                </div>
                <p className="mt-2 text-sm leading-6 text-navy/[0.68]">
                  {item.solution}
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-amber bg-navy p-5">
                <div className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-amber-warm">
                  Result
                </div>
                <p className="mt-2 text-sm leading-6 text-white/[0.76]">
                  {item.result}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}
