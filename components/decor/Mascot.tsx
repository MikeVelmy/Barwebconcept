export function Mascot({ className = "size-14" }: { className?: string }) {
  return (
    <span
      className={`inline-block animate-mascot-bob ${className}`}
      style={{ transformOrigin: "50% 100%" }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
        <circle cx="32" cy="14" r="6" stroke="var(--color-gold-soft)" strokeWidth="2" />
        <path d="M26 12.5h5" stroke="var(--color-ink)" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M32 20v18" stroke="var(--color-gold-soft)" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 26 20 34" stroke="var(--color-gold-soft)" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 38 22 54" stroke="var(--color-gold-soft)" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 38 42 50" stroke="var(--color-gold-soft)" strokeWidth="2" strokeLinecap="round" />
        <g className="animate-mascot-wave" style={{ transformOrigin: "32px 24px" }}>
          <path d="M32 24 44 12" stroke="var(--color-gold-soft)" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    </span>
  );
}
