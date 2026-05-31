"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "section" | "div";
  id?: string;
};

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  as = "section",
  id,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const Component = motion[as];

  return (
    <Component
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </Component>
  );
}
