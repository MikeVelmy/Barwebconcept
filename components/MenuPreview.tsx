import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { menuCategories, site } from "@/lib/content";

export function MenuPreview() {
  return (
    <section id="menu" className="bg-surface/40 px-5 py-20 sm:px-8 sm:py-28 md:px-14">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-moss-soft">
            On the Menu
          </p>
          <h2 className="font-display mt-3 max-w-xl text-3xl font-bold leading-tight text-bone sm:text-4xl md:text-5xl">
            A taste of what&rsquo;s pouring.
          </h2>
          <p className="mt-4 max-w-xl text-base text-bone-dim">
            A curated preview &mdash; the full menu is longer, and the grill never stops.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-12 sm:mt-14 md:grid-cols-2">
          {menuCategories.map((category, i) => (
            <Reveal key={category.name} delay={(i % 2) * 0.08}>
              <h3 className="font-display border-b border-surface-line pb-3 text-lg font-semibold uppercase tracking-wide text-gold-soft">
                {category.name}
              </h3>
              <ul className="mt-4 flex flex-col gap-4">
                {category.items.map((item) => (
                  <li key={item.name} className="flex items-baseline justify-between gap-4">
                    <div>
                      <p className="text-base font-semibold text-bone">{item.name}</p>
                      <p className="text-sm text-bone-dim">{item.desc}</p>
                    </div>
                    <span className="font-display shrink-0 text-base font-semibold text-bone">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <a
            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi! Can I see the full Walako Pub menu?")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex min-h-[48px] items-center gap-2.5 rounded-full border border-moss-soft/40 px-5 py-3 text-sm font-semibold text-moss-soft transition-colors hover:bg-moss-soft/10"
          >
            <WhatsAppIcon className="size-4" />
            Ask about the full menu on WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
