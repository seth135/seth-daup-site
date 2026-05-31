"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PillTag } from "@/components/ui/PillTag";
import { SectionLabel } from "@/components/ui/SectionLabel";

const services = [
  {
    icon: "web",
    title: "Websites & Online Presence",
    description:
      "Clean, modern websites that make a business look credible, explain the offer clearly, and turn visitors into real conversations.",
    tags: [
      "Business websites",
      "Landing pages",
      "SEO setup",
      "Content updates",
    ],
  },
  {
    icon: "automation",
    title: "Automation & AI",
    description:
      "Practical workflows and AI tools that reduce repetitive admin, speed up paperwork, and give time back to the people doing the work.",
    tags: ["Paperwork automation", "Make.com", "AI integrations", "Assistants"],
  },
  {
    icon: "data",
    title: "Dashboards & Data",
    description:
      "Simple reporting systems that help you understand what is happening across operations, performance, and day-to-day decisions.",
    tags: ["Dashboards", "Data cleanup", "Reporting", "Analytics setup"],
  },
  {
    icon: "systems",
    title: "Custom Software & Systems",
    description:
      "Internal tools, databases, and connected systems built around how your business actually works instead of forcing a generic process.",
    tags: [
      "Custom software",
      "Databases",
      "Internal tools",
      "IoT integrations",
    ],
  },
  {
    icon: "funding",
    title: "Funding & Pitch Support",
    description:
      "Grant writing, pitch decks, and competition prep from someone who has personally won more than $150,000 in grants and awards.",
    tags: ["Grant writing", "Pitch decks", "Competition prep"],
    center: true,
  },
];

function ServiceIcon({ type }: { type: string }) {
  const common = {
    width: 34,
    height: 34,
    viewBox: "0 0 34 34",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.55,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (type === "automation") {
    return (
      <svg {...common}>
        <path d="M10 8h9.5a4.5 4.5 0 0 1 0 9H14a4.5 4.5 0 0 0 0 9h10" />
        <path d="m7.5 5.8 2.7 2.2-2.7 2.3" />
        <path d="m26.5 23.7-2.7 2.3 2.7 2.2" />
        <circle cx="20" cy="12.5" r="1.8" />
        <circle cx="14" cy="21.5" r="1.8" />
      </svg>
    );
  }

  if (type === "data") {
    return (
      <svg {...common}>
        <path d="M7 27h20" />
        <path d="M10 22v-7" />
        <path d="M17 22V9" />
        <path d="M24 22V12" />
        <path d="m9.5 12.5 5-4 5 2.3 5-5" />
      </svg>
    );
  }

  if (type === "systems") {
    return (
      <svg {...common}>
        <path d="M8 11.5 17 6l9 5.5v11L17 28l-9-5.5v-11Z" />
        <path d="M17 17 8.6 11.8" />
        <path d="M17 17v10.4" />
        <path d="m17 17 8.4-5.2" />
        <path d="M12.5 8.6 21.5 14" />
      </svg>
    );
  }

  if (type === "funding") {
    return (
      <svg {...common}>
        <path d="M8 25.5h18" />
        <path d="M11 25V10.5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2V25" />
        <path d="M13.5 13h7" />
        <path d="M13.5 17h5" />
        <path d="M16 25v-4h2v4" />
        <path d="m22.5 7.5 3-2.5" />
        <path d="m24.5 11 4-.5" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="17" cy="17" r="11.5" />
      <path d="M5.5 17h23" />
      <path d="M17 5.5c3.5 3.5 5.3 7.3 5.3 11.5S20.5 25 17 28.5" />
      <path d="M17 5.5c-3.5 3.5-5.3 7.3-5.3 11.5S13.5 25 17 28.5" />
    </svg>
  );
}

export function Services() {
  return (
    <AnimatedSection
      id="services"
      className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32"
    >
      <SectionLabel>Services</SectionLabel>
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
        <h2 className="lg:translate-x-8 font-display leading-[0.95] tracking-tight text-navy">
          {" "}
          <em className="text-amber text-6xl sm:text-7xl">
            Don&apos;t make tech
          </em>
          <br />
          <span className="text-4xl sm:text-6xl">feel bigger than</span>
          <br />
          <em className="text-amber text-6xl sm:text-6xl">the problem.</em>
        </h2>
        <p className="max-w-2xl text-lg leading-8 text-navy/[0.62]">
          If something in your business feels clunky, outdated, or harder than
          it should be, you&apos;re not wrong, but it doesn&apos;t have to stay
          that way.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
        className="mt-14 grid gap-5 md:grid-cols-2"
      >
        {services.map((service) => (
          <motion.article
            key={service.title}
            variants={{
              hidden: { opacity: 0, y: 28 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.58, ease: "easeOut" }}
            whileHover={{
              y: -4,
              boxShadow: "0 28px 75px rgba(28,43,58,0.14)",
              transition: { type: "spring", stiffness: 260, damping: 22 },
            }}
            className={`rounded-lg border border-[var(--line)] bg-paper p-7 shadow-[var(--shadow-soft)] sm:p-8 ${
              service.center ? "md:col-span-2 md:mx-auto md:w-1/2" : ""
            }`}
          >
            <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-lg border border-amber/[0.18] bg-amber/[0.08] text-amber">
              <ServiceIcon type={service.icon} />
            </div>
            <h3 className="font-display text-3xl leading-none text-navy">
              {service.title}
            </h3>
            <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-navy/[0.62]">
              {service.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <PillTag key={tag}>{tag}</PillTag>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </AnimatedSection>
  );
}
