import { MapPin, Phone, Clock } from "lucide-react";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { site } from "@/lib/content";

const hours = [
  { day: "Sunday – Thursday", time: "4PM – 1AM" },
  { day: "Friday – Saturday", time: "4PM – 3AM" },
];

export function LocationHours() {
  return (
    <section id="location" className="px-5 py-20 sm:px-8 sm:py-28 md:px-14">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-moss-soft">
            Find Us
          </p>
          <h2 className="font-display mt-3 max-w-xl text-3xl font-bold leading-tight text-bone sm:text-4xl md:text-5xl">
            Come through tonight.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-14 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-surface-line sm:aspect-[16/10]">
              <iframe
                title="Walako Pub location map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`}
                loading="lazy"
                className="h-full w-full grayscale-[35%] contrast-[1.05]"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-7">
              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 shrink-0 text-gold" size={22} />
                <div>
                  <p className="text-base font-semibold text-bone">Address</p>
                  <p className="text-bone-dim">{site.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="mt-0.5 shrink-0 text-gold" size={22} />
                <div>
                  <p className="text-base font-semibold text-bone">Hours</p>
                  {hours.map((h) => (
                    <p key={h.day} className="text-bone-dim">
                      {h.day}: <span className="text-bone">{h.time}</span>
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-0.5 shrink-0 text-gold" size={22} />
                <div>
                  <p className="text-base font-semibold text-bone">Phone</p>
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-bone-dim hover:text-gold">
                    {site.phone}
                  </a>
                </div>
              </div>

              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi! I'd like to ask about Walako Pub.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex min-h-[52px] w-fit items-center gap-2.5 rounded-full bg-moss px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-moss-soft"
              >
                <WhatsAppIcon className="size-5" />
                Chat with us on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
