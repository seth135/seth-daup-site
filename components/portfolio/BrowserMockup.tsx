"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type BrowserMockupProps = {
  tone: "amber" | "navy" | "sage" | "rust" | "sky" | "olive";
  title: string;
};

const tones = {
  amber: "linear-gradient(135deg, #c8742a 0%, #e8924a 48%, #ede8de 100%)",
  navy: "linear-gradient(135deg, #1c2b3a 0%, #42566a 54%, #b5a898 100%)",
  sage: "linear-gradient(135deg, #6f7f67 0%, #9fac8f 52%, #ede8de 100%)",
  rust: "linear-gradient(135deg, #8a4c2d 0%, #c8742a 56%, #ede8de 100%)",
  sky: "linear-gradient(135deg, #4f7187 0%, #95aebe 56%, #ede8de 100%)",
  olive: "linear-gradient(135deg, #59614b 0%, #9f9a75 54%, #ede8de 100%)",
};

export function BrowserMockup({ tone, title }: BrowserMockupProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [22, -22]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="rounded-[10px] border border-navy/10 bg-paper p-3 shadow-[0_24px_70px_rgba(28,43,58,0.12)]"
    >
      <div className="flex items-center gap-2 border-b border-navy/10 px-2 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#d96b59]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#d5ad4d]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#6d9b73]" />
        <div className="ml-3 h-6 flex-1 rounded-md bg-cream-mid" />
      </div>
      <div
        className="geo-pattern mt-3 aspect-[16/10] overflow-hidden rounded-lg p-6"
        style={{ background: tones[tone] }}
      >
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="h-3 w-24 rounded-full bg-white/[0.45]" />
            <div className="mt-4 h-12 w-2/3 rounded-lg bg-white/[0.24]" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="h-16 rounded-lg bg-white/[0.24]" />
            <div className="h-16 rounded-lg bg-white/[0.18]" />
            <div className="h-16 rounded-lg bg-white/[0.24]" />
          </div>
          <div className="flex items-end justify-between">
            <div className="h-24 w-32 rounded-t-lg bg-white/20" />
            <div className="text-right font-display text-3xl italic leading-none text-white/[0.72]">
              {title}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
