import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-cream-mid">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-display text-2xl text-navy">Seth Daup, LLC</div>
          <p className="mt-2 max-w-md text-sm leading-6 text-navy/[0.58]">
            Practical tech help for businesses that keep Nebraska running.
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-5 text-sm text-navy/[0.58] sm:gap-8">
          <p>© 2026 Seth Daup, LLC. All rights reserved.</p>
          <Link
            href="/privacy"
            className="font-medium transition hover:text-navy"
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
