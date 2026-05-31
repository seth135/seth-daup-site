import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

const sections = [
  {
    title: "Information We Collect",
    body: (
      <>
        <p>When you submit a contact form on this website, we may collect information such as:</p>
        <ul>
          <li>Your name</li>
          <li>Email address</li>
          <li>Business or organization name</li>
          <li>Information you choose to include in your message</li>
        </ul>
        <p>We only collect information that you voluntarily provide.</p>
      </>
    ),
  },
  {
    title: "How We Use Your Information",
    body: (
      <>
        <p>Information submitted through this website may be used to:</p>
        <ul>
          <li>Respond to inquiries</li>
          <li>Communicate about potential services or projects</li>
          <li>Provide information you have requested</li>
          <li>Improve our services and website</li>
        </ul>
        <p>
          We do not sell, rent, or share your personal information with third
          parties for marketing purposes.
        </p>
      </>
    ),
  },
  {
    title: "Analytics",
    body: (
      <>
        <p>
          This website may use analytics tools to better understand how visitors
          interact with the site. These tools may collect anonymous information
          such as pages visited, browser type, device information, and general
          geographic location.
        </p>
        <p>Analytics data is used solely to improve the website and user experience.</p>
      </>
    ),
  },
  {
    title: "Third-Party Services",
    body: (
      <p>
        This website may use third-party services, including website hosting
        providers, analytics providers, and form-processing services. These
        providers may process information on our behalf as necessary to operate
        the website.
      </p>
    ),
  },
  {
    title: "Data Security",
    body: (
      <p>
        We take reasonable measures to protect information submitted through
        this website. However, no method of internet transmission or electronic
        storage is completely secure, and we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    title: "External Links",
    body: (
      <p>
        This website may contain links to third-party websites. We are not
        responsible for the privacy practices or content of those websites.
      </p>
    ),
  },
  {
    title: "Your Rights",
    body: (
      <p>
        You may request access to, correction of, or deletion of personal
        information you have submitted by contacting us directly.
      </p>
    ),
  },
  {
    title: "Contact",
    body: (
      <p>
        If you have questions about this Privacy Policy or how your information
        is handled, please contact:
        <br />
        <br />
        <strong>Seth Daup, LLC</strong>
        <br />
        Gothenburg, Nebraska
        <br />
        Email:{" "}
        <a href="mailto:seth@sethdaup.com" className="font-medium text-amber hover:text-amber-warm">
          seth@sethdaup.com
        </a>
      </p>
    ),
  },
  {
    title: "Changes to This Policy",
    body: (
      <p>
        This Privacy Policy may be updated from time to time. Any updates will
        be posted on this page with a revised effective date.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <AnimatedSection className="mx-auto max-w-4xl px-5 pb-24 pt-10 sm:px-8 lg:pb-32">
          <SectionLabel>Legal</SectionLabel>
          <h1 className="font-display text-[clamp(4rem,10vw,7.5rem)] leading-[0.88] tracking-[-0.04em] text-navy">
            Privacy Policy
          </h1>
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-sand">
            Last Updated: May 2026
          </p>
          <div className="mt-12 rounded-[10px] border border-[var(--line)] bg-paper p-6 shadow-[var(--shadow-soft)] sm:p-10">
            <p className="text-lg leading-8 text-navy/[0.68]">
              Seth Daup (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
              &ldquo;us&rdquo;) respects your privacy and is committed to
              protecting any information you provide through this website.
            </p>

            <div className="mt-10 space-y-10">
              {sections.map((section) => (
                <section
                  key={section.title}
                  className="border-t border-navy/10 pt-8"
                >
                  <h2 className="font-display text-3xl leading-none text-navy">
                    {section.title}
                  </h2>
                  <div className="privacy-copy mt-4 text-base leading-7 text-navy/[0.66]">
                    {section.body}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
