"use client";

import { motion } from "framer-motion";
import { PillTag } from "@/components/ui/PillTag";
import { BrowserMockup } from "@/components/portfolio/BrowserMockup";

type ProjectCardProps = {
  category: string;
  title: string;
  description: string;
  stack: string[];
  problem: string;
  result: string;
  tone: "amber" | "navy" | "sage" | "rust" | "sky" | "olive";
  flip?: boolean;
};

export function ProjectCard({
  category,
  title,
  description,
  stack,
  problem,
  result,
  tone,
  flip = false,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`grid gap-10 rounded-[10px] border border-[var(--line)] bg-paper p-5 shadow-[var(--shadow-soft)] md:p-7 lg:grid-cols-2 lg:items-center lg:gap-14 ${
        flip ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <BrowserMockup tone={tone} title={title.split(" ")[0]} />
      <div className="p-2 md:p-4">
        <div className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-amber">
          {category}
        </div>
        <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-tight text-navy">
          {title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-navy/[0.62]">{description}</p>
        <div className="mt-7 flex flex-wrap gap-2">
          {stack.map((item) => (
            <PillTag key={item}>{item}</PillTag>
          ))}
        </div>
        <div className="mt-8 grid gap-4 border-t border-navy/10 pt-7 sm:grid-cols-2">
          <div>
            <div className="font-display text-2xl italic text-amber">Problem</div>
            <p className="mt-2 text-sm leading-6 text-navy/[0.62]">{problem}</p>
          </div>
          <div>
            <div className="font-display text-2xl italic text-amber">Result</div>
            <p className="mt-2 text-sm leading-6 text-navy/[0.62]">{result}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
