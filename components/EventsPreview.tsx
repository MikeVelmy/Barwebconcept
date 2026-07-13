import Image from "next/image";
import { Reveal } from "./Reveal";
import { CTAButton } from "./CTAButton";
import { featuredEvent, recurringEvents } from "@/lib/content";

export function EventsPreview() {
  return (
    <section id="events" className="px-5 py-20 sm:px-8 sm:py-28 md:px-14">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-moss-soft">
            What&rsquo;s On
          </p>
          <h2 className="font-display mt-3 max-w-xl text-3xl font-bold leading-tight text-bone sm:text-4xl md:text-5xl">
            Coming up at Walako.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:mt-14 lg:grid-cols-[minmax(0,0.85fr)_1fr] lg:gap-14">
          <Reveal delay={0.05}>
            <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-surface-line">
              <Image
                src={featuredEvent.image.src}
                alt={featuredEvent.image.alt}
                fill
                loading="lazy"
                placeholder={featuredEvent.image.blurDataURL ? "blur" : "empty"}
                blurDataURL={featuredEvent.image.blurDataURL}
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="flex flex-col justify-center gap-8">
            <Reveal delay={0.1}>
              <span className="inline-flex items-center rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
                Featured &middot; {featuredEvent.dateRange}
              </span>
              <h3 className="font-display mt-4 text-2xl font-bold text-bone sm:text-3xl">
                {featuredEvent.title}
              </h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-bone-dim">
                {featuredEvent.detail}
              </p>
              <CTAButton href="#reserve" variant="primary" className="mt-6 w-fit">
                Reserve Table
              </CTAButton>
            </Reveal>

            <Reveal delay={0.16}>
              <ul className="flex flex-col gap-4 border-t border-surface-line pt-6">
                {recurringEvents.map((event) => (
                  <li key={event.name} className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
                    <span className="w-32 shrink-0 text-sm font-semibold uppercase tracking-wide text-moss-soft">
                      {event.day}
                    </span>
                    <span className="text-sm text-bone-dim">
                      <span className="font-semibold text-bone">{event.name}</span> &mdash; {event.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
