export default function SethDaupLLCWebsite() {
  const services = [
    {
      title: "Websites & Online Presence",
      description:
        "Clean, modern websites that help local businesses look credible, explain what they do, and turn visitors into customers.",
      bullets: ["Business websites", "Landing pages", "Basic SEO setup", "Content updates"],
    },
    {
      title: "Automation & AI",
      description:
        "Practical automations and AI tools that reduce repetitive work, speed up admin tasks, and free up time for higher-value work.",
      bullets: ["Paperwork automation", "Make.com workflows", "AI integrations", "Internal assistants"],
    },
    {
      title: "Dashboards & Data",
      description:
        "Simple reporting systems that help you track operations, understand performance, and make better business decisions.",
      bullets: ["Business dashboards", "Data cleanup", "Reporting systems", "Analytics setup"],
    },
    {
      title: "Custom Software & Systems",
      description:
        "Tailored internal tools, databases, and connected systems built around how your business actually works.",
      bullets: ["Custom software", "Database design", "Internal tools", "IoT integrations"],
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
      problem: "Ranchers were spending too much time checking livestock water systems manually.",
      solution:
        "Built an IoT-enabled monitoring and management platform so water tanks and herd information could be viewed remotely.",
      result:
        "Created a practical system designed to save time, reduce repetitive labor, and improve day-to-day ranch efficiency.",
    },
    {
      title: "Enterprise Software Internship",
      problem: "Financial institutions needed better reporting to meet customer and compliance demands.",
      solution:
        "Developed entitlement reporting functionality inside an enterprise product environment.",
      result:
        "Helped accelerate roadmap delivery and contributed to a feature set affecting roughly 200,000 business customers.",
    },
    {
      title: "Investor & Startup Support",
      problem: "Early-stage companies often need better operations, sharper messaging, and stronger investor readiness.",
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
        "We start with your goals, bottlenecks, and opportunities so the solution fits your business instead of forcing you into generic software.",
    },
    {
      step: "02",
      title: "Build the Right Solution",
      description:
        "I design and build the website, dashboard, automation, or system that solves the problem in a practical way.",
    },
    {
      step: "03",
      title: "Implement and Improve",
      description:
        "I help you launch, train your team, and refine the setup so it keeps delivering value over time.",
    },
  ];

  const navItems = ["Services", "About", "Work", "Process", "Contact"];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.14),transparent_22%),linear-gradient(to_bottom,#020617,#0f172a_45%,#020617)]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-sm font-medium tracking-[0.2em] text-emerald-300 uppercase">Seth Daup, LLC</div>
            <div className="text-xs text-slate-400">Gothenburg, Nebraska</div>
          </div>
          <nav className="hidden gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-slate-300 transition hover:text-white">
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
              Practical tech and AI for Central Nebraska businesses
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              Helping Central Nebraska businesses grow with smarter systems.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              I build websites, dashboards, automations, and custom tools that save time, improve operations, and help local businesses move forward with confidence.
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
                "Local, practical, and easy to work with",
                "Technical and business experience in one person",
                "Helpful for businesses without internal tech teams",
                "Grounded in rural, ag, and community realities",
              ].map((point) => (
                <div key={point} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
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
                  <div className="text-sm font-medium text-slate-200">Business Growth Snapshot</div>
                  <div className="text-xs text-slate-400">Example of the kind of clarity better systems can create</div>
                </div>
                <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                  Dashboard Example
                </div>
              </div>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-slate-900/80 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Time Saved</div>
                    <div className="mt-2 text-3xl font-semibold text-white">32 hrs</div>
                    <div className="mt-1 text-sm text-emerald-300">per week</div>
                  </div>
                  <div className="rounded-2xl bg-slate-900/80 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Lead Response</div>
                    <div className="mt-2 text-3xl font-semibold text-white">2.4x</div>
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
                      <div key={i} className="flex-1 rounded-t-2xl bg-gradient-to-t from-emerald-500 to-sky-400/90" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    ["Website", "Modernized"],
                    ["Admin", "Automated"],
                    ["Data", "Organized"],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-2xl bg-slate-900/80 p-4 text-center">
                      <div className="text-xs uppercase tracking-[0.2em] text-slate-500">{k}</div>
                      <div className="mt-2 text-sm font-medium text-white">{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-300">Services</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">What I can help your business do</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              My work sits at the intersection of business strategy, software, and practical implementation. That means I can help you identify the opportunity and build the solution.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 shadow-xl shadow-black/10 backdrop-blur">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-slate-300">{service.description}</p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="rounded-xl border border-white/8 bg-slate-900/60 px-4 py-3 text-sm text-slate-300">
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
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-300">Who I help</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">Built for businesses that need practical momentum</h2>
                <p className="mt-4 text-lg leading-8 text-slate-300">
                  This is especially useful for organizations that know something needs to improve, but do not have the time or internal technical capacity to build it themselves.
                </p>
                <div className="mt-8 grid gap-4">
                  {industries.map((industry) => (
                    <div key={industry} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-slate-200">
                      {industry}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-300">Why work with me</p>
                <div className="mt-4 grid gap-5 sm:grid-cols-2">
                  {proofPoints.map((item) => (
                    <div key={item.stat} className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6">
                      <div className="text-3xl font-semibold text-white">{item.stat}</div>
                      <div className="mt-2 text-sm leading-6 text-slate-300">{item.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-6 text-slate-300">
                  Founder of an agtech startup. Experience across software development, venture capital, angel investing, consulting, leadership, and community-centered work. Based in Gothenburg and focused on helping Central Nebraska organizations grow in ways that are realistic, useful, and sustainable.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8">
              <img
                src="/chatGPT_headshot.png"
                alt="Seth Daup"
                className="h-full w-full rounded-[1.5rem] object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-300">
                About Seth
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">From Gothenburg to building, learning, and coming back to help</h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-300">
                <p>
                  I grew up in Gothenburg, Nebraska, then spent four years in college building skills across business, software, leadership, and entrepreneurship. During that time, I founded an agtech startup, worked in venture capital and angel investing, supported founders, and gained hands-on software development experience.
                </p>
                <p>
                  After graduating in May 2025, I spent time traveling and getting perspective. Now I am back in Gothenburg and focused on using what I have learned to help businesses and organizations in Central Nebraska operate better, communicate more clearly, and grow with the right tools.
                </p>
                <p>
                  My advantage is that I can speak both business and technology. I understand strategy, but I also know how to build. That makes it easier to turn ideas into websites, systems, automations, and practical solutions that actually get used.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-300">Selected work</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Relevant experience you can trust</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Even before taking on local consulting clients, I have already worked on real problems involving operations, software, startup growth, and decision-making.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <div key={study.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7">
                <div className="text-sm font-medium uppercase tracking-[0.2em] text-sky-300">Case Study</div>
                <h3 className="mt-3 text-xl font-semibold text-white">{study.title}</h3>
                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
                  <p><span className="font-semibold text-white">Problem:</span> {study.problem}</p>
                  <p><span className="font-semibold text-white">Solution:</span> {study.solution}</p>
                  <p><span className="font-semibold text-white">Result:</span> {study.result}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-300">Process</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">A simple way to move from idea to implementation</h2>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {process.map((item) => (
                <div key={item.step} className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-7">
                  <div className="text-sm font-semibold tracking-[0.3em] text-slate-500">{item.step}</div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
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
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-300">Contact</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Let’s improve your business</h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                  If you have a process that feels slow, a website that needs improvement, or an idea you want to turn into a real system, let’s talk through it.
                </p>




                              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6 backdrop-blur">
                <form
                  action="https://formspree.io/f/maqaogvy"
                  method="POST"
                  className="grid gap-4"
                >
                  <div>
                    <label className="mb-2 block text-sm text-slate-300">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none"
                    />
                  </div>
                
                  <div>
                    <label className="mb-2 block text-sm text-slate-300">Business or Organization</label>
                    <input
                      type="text"
                      name="business"
                      placeholder="Business name"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none"
                    />
                  </div>
                
                  <div>
                    <label className="mb-2 block text-sm text-slate-300">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none"
                    />
                  </div>
                
                  <div>
                    <label className="mb-2 block text-sm text-slate-300">What do you need help with?</label>
                    <textarea
                      name="message"
                      required
                      placeholder="Tell me about your business, website, process, or project."
                      className="min-h-[140px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none"
                    />
                  </div>
                
                  <input type="hidden" name="_subject" value="New website inquiry from SethDaup.com" />
                
                  <button
                    type="submit"
                    className="mt-2 rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:scale-[1.01]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <div className="font-medium text-slate-200">Seth Daup, LLC</div>
            <div>Helping Central Nebraska businesses grow with practical tech and AI.</div>
          </div>
          <div className="flex flex-wrap gap-5">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
