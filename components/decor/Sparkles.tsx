const sparks = [
  { top: "-16%", left: "4%", size: 11, delay: "0s" },
  { top: "-20%", left: "46%", size: 8, delay: "0.15s" },
  { top: "-14%", left: "88%", size: 11, delay: "0.3s" },
  { top: "62%", left: "-4%", size: 8, delay: "0.45s" },
  { top: "62%", left: "98%", size: 8, delay: "0.6s" },
];

function Star({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <path d="M6 0 7 5 12 6 7 7 6 12 5 7 0 6 5 5Z" fill="var(--color-ink)" />
    </svg>
  );
}

export function Sparkles() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
    >
      {sparks.map((s, i) => (
        <span
          key={i}
          className="absolute animate-sparkle"
          style={{
            top: s.top,
            left: s.left,
            animationDelay: s.delay,
            animationFillMode: "both",
            opacity: 0,
            transform: "scale(0)",
          }}
        >
          <Star size={s.size} />
        </span>
      ))}
    </span>
  );
}
