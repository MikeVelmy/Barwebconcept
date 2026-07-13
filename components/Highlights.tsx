import Image from "next/image";
import { Reveal } from "./Reveal";
import { highlights } from "@/lib/content";

export function Highlights() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 md:px-14">
      <Reveal>
        <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-moss-soft">
          Why Walako
        </p>
        <h2 className="font-display mt-3 max-w-xl text-3xl font-bold leading-tight text-bone sm:text-4xl md:text-5xl">
          Three reasons the night starts here.
        </h2>
      </Reveal>

      <div className="mt-14 flex flex-col gap-16 sm:mt-16 sm:gap-20 md:gap-28">
        {highlights.map((item, i) => (
          <div
            key={item.title}
            className={`flex flex-col items-center gap-8 md:gap-14 ${
              i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <Reveal className="w-full md:w-1/2" delay={0.05}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  loading="lazy"
                  placeholder={item.image.blurDataURL ? "blur" : "empty"}
                  blurDataURL={item.image.blurDataURL}
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Reveal>
            <Reveal className="w-full md:w-1/2" delay={0.15}>
              <span className="font-display text-6xl font-bold text-surface-line sm:text-7xl">
                0{i + 1}
              </span>
              <h3 className="font-display mt-2 text-2xl font-bold text-bone sm:text-3xl">
                {item.title}
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-bone-dim">
                {item.body}
              </p>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
