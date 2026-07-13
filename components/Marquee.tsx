const items = [
  "Open 7 Nights",
  "Live DJ Fri & Sat",
  "Shisha Lounge",
  "Suya on the Grill",
  "Private Events",
  "Accra's Party HQ",
];

export function Marquee() {
  const track = [...items, ...items];

  return (
    <div
      id="trust"
      className="relative overflow-hidden border-y border-surface-line bg-surface py-4"
    >
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {track.map((item, i) => (
          <span
            key={i}
            className="font-display flex items-center gap-10 text-sm font-medium uppercase tracking-[0.2em] text-bone-dim"
          >
            {item}
            <span className="text-gold">&#10022;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
