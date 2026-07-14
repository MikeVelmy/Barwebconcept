import Image from "next/image";
import { Reveal } from "./Reveal";
import { CTAButton } from "./CTAButton";
import { upcomingEvents, recurringEvents } from "@/lib/content";

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

        <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-14 sm:grid-cols-2">
          {upcomingEvents.map((event, i) => (
            <Reveal key={event.title} delay={i * 0.08}>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-surface-line">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={event.image.src}
                    alt={event.image.alt}
                    fill
                    loading="lazy"
                    placeholder={event.image.blurDataURL ? "blur" : "empty"}
                    blurDataURL={event.image.blurDataURL}
                    sizes="(min-width: 640px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="inline-flex w-fit items-center rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
                    {event.dateRange}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-bone">{event.title}</h3>
                  <p className="text-base leading-relaxed text-bone-dim">{event.detail}</p>
                  <CTAButton href="#reserve" variant="primary" className="mt-2 w-fit">
                    Reserve Table
                  </CTAButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <ul className="mt-12 flex flex-col gap-4 border-t border-surface-line pt-6 sm:mt-14">
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
    </section>
  );
}
