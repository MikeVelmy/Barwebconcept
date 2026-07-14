const sparks = [
  { top: "-6%", left: "8%", size: 7, delay: "0s" },
  { top: "10%", left: "94%", size: 5, delay: "0.15s" },
  { top: "78%", left: "2%", size: 5, delay: "0.3s" },
  { top: "85%", left: "88%", size: 7, delay: "0.45s" },
  { top: "35%", left: "50%", size: 4, delay: "0.6s" },
];

function Star({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <path
        d="M6 0 7 5 12 6 7 7 6 12 5 7 0 6 5 5Z"
        fill="var(--color-gold-soft)"
      />
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
          style={{ top: s.top, left: s.left, animationDelay: s.delay }}
        >
          <Star size={s.size} />
        </span>
      ))}
    </span>
  );
}
