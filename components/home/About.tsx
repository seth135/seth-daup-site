import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

const credentials = [
  "UNL Raikes School",
  "Finance + Math + CS + Management",
  "Co-founded AgTech Startup",
  "Software Engineer, Fortune 500",
  "Mutual of Omaha, AI tools",
  "$150k+ in grants & awards",
];

export function About() {
  return (
    <AnimatedSection
      id="about"
      className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:py-32"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] shadow-[var(--shadow-soft)]">
        <Image
          src="/mountain_pic.jpeg"
          alt="Seth Daup"
          fill
          sizes="(min-width: 1024px) 36vw, 100vw"
          className="object-cover"
        />
      </div>

      <div>
        <SectionLabel>About Seth</SectionLabel>
        <h2 className="max-w-3xl font-display text-5xl leading-[0.98] tracking-tight text-navy sm:text-6xl">
          I grew up here, learned a lot elsewhere, and now I&apos;m back.
        </h2>
        <div className="mt-8 space-y-6 text-lg leading-8 text-navy/[0.64]">
          <p>
            I&apos;m from Gothenburg, Nebraska. Over the last several years I
            studied finance, math, computer science, and management at UNL
            through the Raikes School while building real experience across
            software, business strategy, entrepreneurship, and investing.
          </p>
          <p>
            I co-founded Cattle Kettle, an AgTech IoT startup for ranch water
            monitoring, worked as a software engineer at NCR Corporation, built
            an AI tool for Mutual of Omaha, invested in startups through Huskers
            Venture Fund, and consulting with growing businesses along the way.
          </p>
          <p>
            After graduating, I traveled through Australia, Indonesia, and New
            Zealand. I believe in what small towns can be, and I want to put
            what I&apos;ve learned to work here.
          </p>
        </div>
        <div className="mt-9 grid gap-3 sm:grid-cols-2">
          {credentials.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-[var(--line)] bg-cream-mid px-4 py-3 text-sm font-medium text-navy/[0.68]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
