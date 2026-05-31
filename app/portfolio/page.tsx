import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

const projects = [
  {
    category: "AgTech IoT",
    title: "Cattle Kettle",
    description:
      "A ranch water tank monitoring platform built to help producers see tank status, herd information, and operational alerts remotely.",
    stack: ["Next.js", "Firebase", "Particle.io", "GCP"],
    problem: "Manual water checks were eating time and fuel across large ranch operations.",
    result: "A connected dashboard designed to save weekly labor and improve day-to-day ranch visibility.",
    tone: "olive" as const,
  },
  {
    category: "Venture Operations",
    title: "AI Memo Generator",
    description:
      "An internal tool for Nebraska Angels that speeds up early-stage deal memo creation with AI-assisted research and structured outputs.",
    stack: ["Python", "RAG", "OpenAI"],
    problem: "Investment memo workflows were repetitive, research-heavy, and hard to standardize.",
    result: "A faster diligence support workflow for turning founder information into useful investor context.",
    tone: "navy" as const,
  },
  {
    category: "Enterprise AI",
    title: "Internal Knowledge Bot",
    description:
      "An AI chatbot architecture trained on internal documents for Mutual of Omaha teams that needed quicker access to institutional knowledge.",
    stack: ["Python", "RAG architecture", "Document AI"],
    problem: "Useful internal knowledge was scattered across documents and difficult to query naturally.",
    result: "A document-grounded assistant pattern for faster answers and clearer internal support.",
    tone: "sage" as const,
  },
  {
    category: "Enterprise Software",
    title: "Entitlement Reporting",
    description:
      "A compliance reporting feature at NCR Corporation built inside an enterprise product serving financial institutions and business customers.",
    stack: ["Enterprise SaaS", "Reporting", "Compliance"],
    problem: "Customers needed stronger entitlement visibility for compliance and operational reporting.",
    result: "Roadmap delivery accelerated by a year, with impact across roughly 200,000 business customers.",
    tone: "sky" as const,
  },
  {
    category: "Local Business Web",
    title: "Client Website Example",
    description:
      "A placeholder for a future Nebraska business site: mobile-first, plainspoken, credible, and built to turn visits into conversations.",
    stack: ["Next.js", "Responsive design", "SEO"],
    problem: "Many local businesses need a modern web presence without agency complexity or generic templates.",
    result: "A polished, practical website foundation ready for real client screenshots and outcomes.",
    tone: "amber" as const,
  },
  {
    category: "Operations & Data",
    title: "Operations Dashboard",
    description:
      "A business performance dashboard concept for tracking operations, understanding trends, and giving owners a clearer weekly view.",
    stack: ["Data visualization", "Reporting", "Dashboards"],
    problem: "Important performance signals were buried across spreadsheets, tools, and manual updates.",
    result: "A focused reporting surface designed for faster decisions and fewer recurring admin headaches.",
    tone: "rust" as const,
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <AnimatedSection className="mx-auto max-w-7xl px-5 pb-18 pt-10 sm:px-8 lg:pb-24">
          <SectionLabel>Portfolio</SectionLabel>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <h1 className="font-display text-[clamp(4rem,10vw,8.5rem)] leading-[0.86] tracking-[-0.04em] text-navy">
              Things I&apos;ve built
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-navy/[0.62]">
              A magazine-style look at the range of work behind Seth Daup, LLC:
              agtech, enterprise software, AI tools, venture operations, and
              practical websites for local businesses.
            </p>
          </div>
        </AnimatedSection>

        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 pb-24 sm:px-8 lg:gap-10 lg:pb-32">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              flip={index % 2 === 1}
            />
          ))}
        </div>

        <AnimatedSection className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:pb-32">
          <div className="rounded-[10px] bg-navy p-8 shadow-[0_34px_90px_rgba(28,43,58,0.18)] sm:p-12 lg:flex lg:items-center lg:justify-between">
            <div>
              <div className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-amber-warm">
                Build something useful
              </div>
              <h2 className="mt-4 font-display text-5xl leading-none text-white">
                Have something you want to build?
              </h2>
            </div>
            <Link
              href="/#contact"
              className="mt-8 inline-block rounded-lg bg-amber px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-amber-warm lg:mt-0"
            >
              Start a Conversation
            </Link>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
