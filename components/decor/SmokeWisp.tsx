export function SmokeWisp({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none relative select-none ${className}`} aria-hidden="true">
      <div
        className="absolute -inset-3 rounded-full blur-md"
        style={{
          background:
            "radial-gradient(closest-side, rgba(14,12,10,0.65), rgba(14,12,10,0) 75%)",
        }}
      />
      <svg width="60" height="84" viewBox="0 0 52 72" fill="none" className="relative">
        <path
          d="M26 68C26 68 14 56 20 46C26 36 34 40 32 30C30 22 22 20 24 12"
          stroke="var(--color-bone)"
          strokeWidth="2.4"
          strokeLinecap="round"
          className="animate-smoke-a"
          style={{ transformOrigin: "50% 100%", opacity: 0, animationFillMode: "both" }}
        />
        <path
          d="M26 68C26 68 34 58 29 49C24 41 18 43 19 35"
          stroke="var(--color-gold-soft)"
          strokeWidth="2"
          strokeLinecap="round"
          className="animate-smoke-b"
          style={{ transformOrigin: "50% 100%", opacity: 0, animationFillMode: "both" }}
        />
        <path
          d="M26 68C26 68 18 60 23 52"
          stroke="var(--color-bone)"
          strokeWidth="1.8"
          strokeLinecap="round"
          className="animate-smoke-c"
          style={{ transformOrigin: "50% 100%", opacity: 0, animationFillMode: "both" }}
        />
      </svg>
    </div>
  );
}
