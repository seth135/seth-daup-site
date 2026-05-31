"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type StatCardProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  unit: string;
  label: string;
  delay?: number;
};

export function StatCard({
  value,
  prefix = "",
  suffix = "",
  unit,
  label,
  delay = 0,
}: StatCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, {
      duration: 1.2,
      ease: "easeOut",
      delay,
    });
    return controls.stop;
  }, [count, delay, isInView, value]);

  return (
    <div ref={ref} className="border-t border-white/[0.14] pt-5">
      <div className="font-display text-4xl leading-none text-white">
        {prefix}
        <motion.span>{rounded}</motion.span>
        {suffix}
      </div>
      <div className="mt-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-amber-warm">
        {unit}
      </div>
      <p className="mt-2 text-sm leading-5 text-white/[0.56]">{label}</p>
    </div>
  );
}
