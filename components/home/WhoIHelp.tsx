import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

const industries = [
  "Small businesses",
  "Ag operations",
  "Schools & nonprofits",
  "Growing teams without a tech department",
];

export function WhoIHelp() {
  return (
    <div className="bg-cream-mid/[0.72]">
      <AnimatedSection
        id="who-i-help"
        className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-32"
      >
        <div>
          <SectionLabel>Who I Help</SectionLabel>
          <h2 className="font-display text-5xl leading-[0.98] tracking-tight text-navy sm:text-6xl">
            Built for people who want honest help and real results.
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-navy/[0.62]">
            A lot of good businesses know something could work better, but they
            don&apos;t have extra time or a full tech team to figure it out.
            That&apos;s where I step in.
          </p>
          <ul className="mt-9 space-y-0 border-t border-navy/10">
            {industries.map((industry) => (
              <li
                key={industry}
                className="flex items-center gap-4 border-b border-navy/10 py-4 text-lg font-medium text-navy"
              >
                <span className="font-display text-3xl italic text-amber">
                  →
                </span>
                {industry}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:pt-14">
          <div className="relative rounded-[10px] bg-navy p-8 shadow-[0_30px_80px_rgba(28,43,58,0.18)] sm:p-10">
            <div className="absolute -left-4 top-8 h-20 w-1 rounded-full bg-amber" />
            <p className="font-display text-3xl italic leading-tight text-white sm:text-4xl">
              &ldquo;I&apos;m not coming in as a big agency. I grew up here. I
              understand the realities of local businesses and the importance of
              trust.&rdquo;
            </p>
          </div>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-navy/[0.62]">
            Times have changed. Technology is rapidly advancing. My goal is to
            fight rural flight by bringing big city technology to our local
            businesses. The better our businesses do, the better they can
            support the towns and communities they are part of.
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
}
