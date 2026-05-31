import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  {
    num: "1",
    title: "Understand Your Business",
    description:
      "We start with your goals, bottlenecks, and opportunities so the solution fits your business instead of forcing you into generic software.",
  },
  {
    num: "2",
    title: "Build the Right Solution",
    description:
      "Then, I design and build the website, dashboard, automation, or system that solves the problem in a practical way.",
  },
  {
    num: "3",
    title: "Implement and Improve",
    description:
      "Finally, I help you launch, train your team, and refine the setup so it keeps delivering value over time.",
  },
];

export function Process() {
  return (
    <div className="bg-cream-mid">
      <AnimatedSection
        id="process"
        className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32"
      >
        <SectionLabel>Process</SectionLabel>
        <h2 className="max-w-3xl font-display text-5xl leading-[0.98] tracking-tight text-navy sm:text-6xl">
          A simple way to work together.
        </h2>
        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          {steps.map((step) => (
            <article key={step.num} className="relative">
              <div className="font-display text-[7rem] leading-none text-navy/[0.25] sm:text-[8rem]">
                {step.num}
              </div>
              <h3 className="-mt-8 inline-block border-b-2 border-amber pb-3 font-display text-3xl leading-none text-navy">
                {step.title}
              </h3>
              <p className="mt-6 max-w-sm text-base leading-7 text-navy/[0.62]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
