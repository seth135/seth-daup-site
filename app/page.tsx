export default function SethDaupLLCWebsite() {
  const services = [
    {
      title: "Websites & Online Presence",
      description:
        "Clean, modern websites that help local businesses look credible, explain what they do, and turn visitors into customers.",
      bullets: [
        "Business websites",
        "Landing pages",
        "Basic SEO setup",
        "Content updates",
      ],
    },
    {
      title: "Automation & AI",
      description:
        "Practical automations and AI tools that reduce repetitive work, speed up admin tasks, and free up time for higher-value work.",
      bullets: [
        "Paperwork automation",
        "Make.com workflows",
        "AI integrations",
        "Internal assistants",
      ],
    },
    {
      title: "Dashboards & Data",
      description:
        "Simple reporting systems that help you track operations, understand performance, and make better business decisions.",
      bullets: [
        "Business dashboards",
        "Data cleanup",
        "Reporting systems",
        "Analytics setup",
      ],
    },
    {
      title: "Custom Software & Systems",
      description:
        "Tailored internal tools, databases, and connected systems built around how your business actually works.",
      bullets: [
        "Custom software",
        "Database design",
        "Internal tools",
        "IoT integrations",
      ],
    },
  ];

  const industries = [
    "Small businesses",
    "Ag operations & ranches",
    "Schools & nonprofits",
    "Growing teams without a tech department",
  ];

  const proofPoints = [
    {
      stat: "4+ years",
      label: "of business, software, and startup experience",
    },
    {
      stat: "$150k+",
      label: "in grants and competition awards earned",
    },
    {
      stat: "30+ hrs/week",
      label: "potential labor saved through agtech automation",
    },
    {
      stat: "200k",
      label: "business customers impacted by enterprise software work",
    },
  ];

  const caseStudies = [
    {
      title: "AgTech Startup Founder",
      problem:
        "Ranchers were spending too much time checking livestock water systems manually.",
      solution:
        "Built an IoT-enabled monitoring and management platform so water tanks and herd information could be viewed remotely.",
      result:
        "Created a practical system designed to save time, reduce repetitive labor, and improve day-to-day ranch efficiency.",
    },
    {
      title: "Enterprise Software Internship",
      problem:
        "Financial institutions needed better reporting to meet customer and compliance demands.",
      solution:
        "Developed entitlement reporting functionality inside an enterprise product environment.",
      result:
        "Helped accelerate roadmap delivery and contributed to a feature set affecting roughly 200,000 business customers.",
    },
    {
      title: "Investor & Startup Support",
      problem:
        "Early-stage companies often need better operations, sharper messaging, and stronger investor readiness.",
      solution:
        "Worked across venture, angel investing, and startup support to streamline processes, create AI tools, and improve founder support.",
      result:
        "Brought both technical and business perspective to growth strategy, diligence, and operational improvement.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Understand Your Business",
      description:
        "First, I take time to understand what is going on in your business, what feels frustrating, and what you would like to improve.",
    },
    {
      step: "02",
      title: "Build the Right Solution",
      description:
        "Then I help put together the right solution, whether that is a website, a better process, a dashboard, an automation, or another custom setup.",
    },
    {
      step: "03",
      title: "Implement and Improve",
      description:
        "After that, I help you get it in place, make sure it is useful, and keep improving it if needed.",
    },
  ];

  const navItems = ["Services", "About", "Work", "Process", "Contact"];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.14),transparent_22%),linear-gradient(to_bottom,#020617,#0f172a_45%,#020617)]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-sm font-medium tracking-[0.2em] text-emerald-300 uppercase">
              Seth Daup, LLC
            </div>
            <div className="text-xs text-slate-400">Gothenburg, Nebraska</div>
          </div>
          <nav className="hidden gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200 transition hover:bg-emerald-400/20"
          >
            Free Consultation
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-16 px-6 pb-20 pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28 lg:pt-24">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 shadow-2xl shadow-emerald-500/10">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Based in Gothenburg, serving businesses across Central Nebraska
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              Helping Central Nebraska businesses grow with practical help and
              the right tools.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              I help local businesses and organizations solve problems, save
              time, and grow with practical websites, systems, and hands-on
              support.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                Book a Free Consultation
              </a>
              <a
                href="#services"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Services
              </a>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Local, down-to-earth, and easy to work with",
                "Business-minded help with real technical know-how",
                "A good fit for businesses that just need someone dependable to help",
                "Grounded in rural life, ag, and small-town relationships",
              ].map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-emerald-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 p-5 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-slate-200">
                    Business Growth Snapshot
                  </div>
                  <div className="text-xs text-slate-400">
                    Example of the kind of clarity better systems can create
                  </div>
                </div>
                <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                  Dashboard Example
                </div>
              </div>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-slate-900/80 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Time Saved
                    </div>
                    <div className="mt-2 text-3xl font-semibold text-white">
                      32 hrs
                    </div>
                    <div className="mt-1 text-sm text-emerald-300">
                      per week
                    </div>
                  </div>
                  <div className="rounded-2xl bg-slate-900/80 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Lead Response
                    </div>
                    <div className="mt-2 text-3xl font-semibold text-white">
                      2.4x
                    </div>
                    <div className="mt-1 text-sm text-sky-300">faster</div>
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-900/80 p-4">
                  <div className="mb-4 flex items-center justify-between text-sm text-slate-300">
                    <span>Workflow visibility</span>
                    <span>Operations trend</span>
                  </div>
                  <div className="flex h-40 items-end gap-3">
                    {[35, 42, 40, 56, 61, 69, 77].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-2xl bg-gradient-to-t from-emerald-500 to-sky-400/90"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    ["Website", "Modernized"],
                    ["Admin", "Automated"],
                    ["Data", "Organized"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="rounded-2xl bg-slate-900/80 p-4 text-center"
                    >
                      <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                        {k}
                      </div>
                      <div className="mt-2 text-sm font-medium text-white">
                        {v}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-300">
              Services
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ways I can help
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              I try to keep things simple. If something in your business feels
              clunky, outdated, hard to manage, or ready for the next step, I
              can help you improve it in a practical way.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 shadow-xl shadow-black/10 backdrop-blur"
              >
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-slate-300">{service.description}</p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-xl border border-white/8 bg-slate-900/60 px-4 py-3 text-sm text-slate-300"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-300">
                  Who I help
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                  Built for people who want honest help and practical progress
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-300">
                  A lot of good businesses know something could work better, but
                  they do not have extra time or a full team to figure it out.
                  That is where I can step in, help make sense of things, and
                  build something useful.
                </p>
                <div className="mt-8 grid gap-4">
                  {industries.map((industry) => (
                    <div
                      key={industry}
                      className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-slate-200"
                    >
                      {industry}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-300">
                  Why people may want to work with me
                </p>
                <div className="mt-4 grid gap-5 sm:grid-cols-2">
                  {proofPoints.map((item) => (
                    <div
                      key={item.stat}
                      className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6"
                    >
                      <div className="text-3xl font-semibold text-white">
                        {item.stat}
                      </div>
                      <div className="mt-2 text-sm leading-6 text-slate-300">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-6 text-slate-300">
                  I am not coming in as a big agency or trying to sell
                  complicated solutions. I grew up here. I understand the pace
                  of small towns, the realities of local business, and the
                  importance of trust. My goal is to be helpful, do solid work,
                  and build tools or systems that genuinely make life easier.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8">
              <div className="flex h-full min-h-[320px] flex-col justify-between rounded-[1.5rem] border border-dashed border-white/10 bg-white/[0.03] p-8">
                <div>
                  <div className="text-sm uppercase tracking-[0.25em] text-slate-400">
                    Professional photo
                  </div>
                  <div className="mt-4 text-2xl font-medium text-white">
                    Headshot Placeholder
                  </div>
                </div>
                <p className="max-w-sm text-sm leading-7 text-slate-400">
                  Replace this block with a professional but approachable photo.
                  Outdoors, downtown, or in a workspace could all fit the brand.
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-300">
                About Seth
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                I grew up here, and I care about helping this region thrive
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-300">
                <p>
                  I am from Gothenburg, Nebraska, and over the last several
                  years I have had the chance to learn a lot through college,
                  leadership organizations, internships, and building a business
                  of my own. Along the way, I picked up experience in business
                  strategy, software, entrepreneurship, investing, and problem
                  solving.
                </p>
                <p>
                  After graduating in May 2025, I spent some time traveling and
                  reflecting on what I wanted to do next. Now I am back in
                  Gothenburg, and for this season I want to invest my time and
                  energy into helping businesses and organizations in Central
                  Nebraska however I can.
                </p>
                <p>
                  What makes me useful is that I can understand the people side,
                  the business side, and the technical side. I do not just want
                  to hand over advice. I want to help create something practical
                  that actually works for the people using it.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-300">
              Selected work
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A few examples of the kind of work I have done
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Before starting this local consulting work, I already had the
              chance to work on real problems involving day-to-day operations,
              technology, communication, and growth.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <div
                key={study.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7"
              >
                <div className="text-sm font-medium uppercase tracking-[0.2em] text-sky-300">
                  Case Study
                </div>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {study.title}
                </h3>
                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
                  <p>
                    <span className="font-semibold text-white">Problem:</span>{" "}
                    {study.problem}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Solution:</span>{" "}
                    {study.solution}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Result:</span>{" "}
                    {study.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="process"
          className="border-y border-white/10 bg-white/[0.03]"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-300">
                Process
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                A simple way to work together
              </h2>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {process.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-7"
                >
                  <div className="text-sm font-semibold tracking-[0.3em] text-slate-500">
                    {item.step}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-400/10 via-sky-400/10 to-transparent">
            <div className="grid gap-10 p-8 lg:grid-cols-[1fr_0.9fr] lg:p-12">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-300">
                  Contact
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Let’s talk about what could work better
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                  If something in your business feels harder than it should be,
                  I would be glad to talk it through with you. Sometimes a few
                  small changes can make a big difference.
                </p>
                <div className="mt-8 space-y-3 text-slate-300">
                  <div>
                    <span className="font-medium text-white">Business:</span>{" "}
                    Seth Daup, LLC
                  </div>
                  <div>
                    <span className="font-medium text-white">Location:</span>{" "}
                    Gothenburg, Nebraska
                  </div>
                  <div>
                    <span className="font-medium text-white">Email:</span>{" "}
                    seth@sethdaup.com
                  </div>
                  <div>
                    <span className="font-medium text-white">
                      Availability:
                    </span>{" "}
                    Working with businesses and organizations across Central
                    Nebraska
                  </div>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6 backdrop-blur">
                <div className="grid gap-4">
                  <div>
                    <label className="mb-2 block text-sm text-slate-300">
                      Name
                    </label>
                    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-500">
                      Your name
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-slate-300">
                      Business or Organization
                    </label>
                    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-500">
                      Who you work with
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-slate-300">
                      What do you need help with?
                    </label>
                    <div className="min-h-[120px] rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-500">
                      Tell me about your website, process, reporting, marketing,
                      or operational challenge.
                    </div>
                  </div>
                  <a
                    href="mailto:seth@sethdaup.com?subject=Consultation%20Request"
                    className="mt-2 rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:scale-[1.01]"
                  >
                    Schedule a Free Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <div className="font-medium text-slate-200">Seth Daup, LLC</div>
            <div>
              Helping Central Nebraska businesses with practical, trustworthy
              support and useful tools.
            </div>
          </div>
          <div className="flex flex-wrap gap-5">
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#work" className="hover:text-white">
              Work
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
