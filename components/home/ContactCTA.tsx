"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ContactCTA() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/maqaogvy", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      setStatus("Thanks — your message was sent.");
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  }

  return (
    <div id="contact" className="overflow-hidden bg-navy">
      <AnimatedSection
        as="div"
        className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_0.92fr] lg:gap-20 lg:py-32"
      >
        <div>
          <SectionLabel className="text-amber-warm">Contact</SectionLabel>
          <h2 className="max-w-3xl font-display text-5xl leading-[0.98] tracking-tight text-white sm:text-6xl">
            Let&apos;s talk!
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/[0.62]">
            If something in your business feels harder than it should be,
            I&apos;d be glad to talk it through with you. Sometimes a few small
            changes make a big difference.
          </p>
          <ul className="mt-10 space-y-4 text-sm text-white/[0.58]">
            <li>
              <span className="font-bold text-white/[0.08]6">Business:</span>{" "}
              Seth Daup, LLC
            </li>
            <li>
              <span className="font-bold text-white/[0.08]6">Location:</span>{" "}
              Gothenburg, Nebraska
            </li>
            <li>
              <span className="font-bold text-white/[0.08]6">Email:</span>{" "}
              seth@sethdaup.com
            </li>
            <li>
              <span className="font-bold text-white/[0.08]6">Serving:</span>{" "}
              Central Nebraska & beyond
            </li>
          </ul>
        </div>

        <div className="rounded-[10px] border border-white/10 bg-white/[0.06] p-6 shadow-[0_34px_90px_rgba(0,0,0,0.18)] sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white/[0.46]">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-white/[0.12] bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/[0.36] outline-none focus:border-amber"
              />
            </div>

            <div>
              <label className="mb-2 block text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white/[0.46]">
                Business or Organization
              </label>
              <input
                type="text"
                name="business"
                placeholder="Who you work with"
                className="w-full rounded-lg border border-white/[0.12] bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/[0.36] outline-none focus:border-amber"
              />
            </div>

            <div>
              <label className="mb-2 block text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white/[0.46]">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border border-white/[0.12] bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/[0.36] outline-none focus:border-amber"
              />
            </div>

            <div>
              <label className="mb-2 block text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white/[0.46]">
                Message
              </label>
              <textarea
                name="message"
                required
                placeholder="Tell me about your challenge: a website, process, reporting, or anything that isn't working well."
                className="min-h-32 w-full rounded-lg border border-white/[0.12] bg-white/[0.06] px-4 py-3 text-sm leading-6 text-white placeholder:text-white/[0.36] outline-none focus:border-amber"
              />
            </div>

            <input
              type="hidden"
              name="_subject"
              value="New website inquiry from SethDaup.com"
            />

            <button
              type="submit"
              className="block w-full rounded-lg bg-amber px-5 py-3.5 text-center text-sm font-bold text-white shadow-[0_18px_40px_rgba(200,116,42,0.2)] transition hover:-translate-y-0.5 hover:bg-amber-warm"
            >
              Send a Message
            </button>

            {status && (
              <p className="text-sm font-semibold text-white/80">{status}</p>
            )}
          </form>
        </div>
      </AnimatedSection>
    </div>
  );
}
