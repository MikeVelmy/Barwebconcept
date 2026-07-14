export function BeerMug({ className = "size-6" }: { className?: string }) {
  return (
    <span className={`relative inline-block ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="h-full w-full animate-mug-pour"
        style={{ transformOrigin: "20% 100%" }}
      >
        <path
          d="M8 12h14v12a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3V12Z"
          stroke="var(--color-gold-soft)"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M22 15h2.5a2.5 2.5 0 0 1 0 5H22"
          stroke="var(--color-gold-soft)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M8 12c0-2 1.5-3 3-2s2.5 1 4 0 2.5-2 4-1 3 1 3 3"
          stroke="var(--color-bone)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="absolute -top-1 left-2 h-1 w-1 rounded-full bg-bone/80 animate-mug-bubble" />
      <span
        className="absolute -top-1.5 left-4 h-[3px] w-[3px] rounded-full bg-bone/70 animate-mug-bubble"
        style={{ animationDelay: "0.5s" }}
      />
      <span
        className="absolute -top-1 left-5 h-1 w-1 rounded-full bg-bone/80 animate-mug-bubble"
        style={{ animationDelay: "1s" }}
      />
    </span>
  );
}
