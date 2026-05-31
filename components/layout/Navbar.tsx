"use client";

import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  // { href: "/portfolio", label: "Portfolio" },
  { href: "/#process", label: "Process" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => setScrolled(latest > 12));
  }, [scrollY]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--line)] bg-cream/[0.08]8 shadow-[0_12px_40px_rgba(28,43,58,0.06)] backdrop-blur-xl"
          : "bg-cream/30 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="shrink-0">
          <div className="font-display text-[1.35rem] leading-none tracking-tight text-navy">
            Seth Daup, LLC
          </div>
          <div className="mt-1 text-[0.64rem] font-medium uppercase tracking-[0.24em] text-sand">
            Gothenburg, Nebraska
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy/[0.62] transition hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <motion.a
          href="/#contact"
          animate={!scrolled ? { scale: [1, 1.035, 1] } : { scale: 1 }}
          transition={{
            duration: 1.1,
            repeat: !scrolled ? Infinity : 0,
            repeatDelay: 8,
            ease: "easeInOut",
          }}
          className="inline-flex min-w-40 items-center justify-center rounded-lg bg-navy px-4 py-2.5 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(28,43,58,0.18)] transition hover:bg-navy/[0.92] sm:px-5"
        >
          Free Consultation
        </motion.a>
      </div>
    </motion.header>
  );
}
