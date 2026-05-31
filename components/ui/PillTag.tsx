type PillTagProps = {
  children: React.ReactNode;
  dark?: boolean;
};

export function PillTag({ children, dark = false }: PillTagProps) {
  return (
    <span
      className={
        dark
          ? "rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-xs font-medium text-white/[0.72]"
          : "rounded-full border border-[var(--line)] bg-cream-mid/[0.08]0 px-3 py-1 text-xs font-medium text-navy/[0.68]"
      }
    >
      {children}
    </span>
  );
}
