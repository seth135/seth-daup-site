"use client";

import { motion } from "framer-motion";
import { StatCard } from "@/components/ui/StatCard";

const stats = [
  {
    value: 4,
    suffix: "+",
    unit: "years",
    label: "of business, software & startup experience",
  },
  {
    value: 150,
    prefix: "$",
    suffix: "k+",
    unit: "awarded",
    label: "in grants and competition winnings",
  },
  {
    value: 30,
    suffix: "+",
    unit: "hrs/week",
    label: "saved through agtech automation",
  },
  {
    value: 200,
    suffix: "k",
    unit: "customers",
    label: "impacted by enterprise software work",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-36">
      <div className="absolute left-1/2 top-16 h-72 w-[38rem] -translate-x-1/2 rounded-full bg-amber/[0.08] blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16 lg:pb-28">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
          className="relative"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mb-6 flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-amber"
          >
            <span className="h-px w-9 bg-amber" />
            Based in Gothenburg
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-4xl font-display text-[clamp(3.25rem,8vw,7.6rem)] leading-[0.88] tracking-[-0.035em] text-navy"
          >
            Practical tech for businesses that keep{" "}
            <em className="text-amber">Nebraska running</em>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mt-8 max-w-2xl text-lg leading-8 text-navy/[0.64] sm:text-xl"
          >
            Websites, automation, dashboards, and custom systems for local
            businesses, ag operations, schools, and organizations that need
            technology without the jargon.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="rounded-lg bg-navy px-6 py-3.5 text-sm font-bold text-white shadow-[0_18px_38px_rgba(28,43,58,0.18)] transition hover:-translate-y-0.5 hover:bg-navy/[0.92]"
            >
              Book a Free Consultation
            </a>
            <a
              href="#services"
              className="rounded-lg border border-navy/[0.22] bg-white/[0.45] px-6 py-3.5 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:border-navy/[0.36] hover:bg-white"
            >
              See What I Do
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, rotate: 0.4 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -left-6 -top-6 h-24 w-24 border-l border-t border-amber/[0.35]" />
          <div className="hatched rounded-[10px] bg-navy p-7 shadow-[0_34px_90px_rgba(28,43,58,0.24)] sm:p-9">
            <div className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-white/[0.42]">
              A few things worth knowing
            </div>
            <div className="mt-9 grid grid-cols-2 gap-x-8 gap-y-9">
              {stats.map((stat, index) => (
                <StatCard key={stat.label} {...stat} delay={index * 0.08} />
              ))}
            </div>
            <div className="mt-9 border-t border-white/10 pt-7 font-display text-xl italic leading-7 text-white/[0.58]">
              &ldquo;The future is only limited by the present if we allow it to
              be.&rdquo;
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
