type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div
      className={`mb-5 flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-amber ${className}`}
    >
      <span className="h-px w-8 bg-amber" />
      {children}
    </div>
  );
}
