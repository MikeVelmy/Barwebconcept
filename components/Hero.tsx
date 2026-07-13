import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { Reveal } from "./Reveal";
import { heroImage, site } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-ink">
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        priority
        sizes="100vw"
        placeholder={heroImage.blurDataURL ? "blur" : "empty"}
        blurDataURL={heroImage.blurDataURL}
        className="object-cover object-[center_25%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />

      <div className="relative z-10 w-full px-5 pb-16 pt-32 sm:px-8 sm:pb-20 md:px-14 md:pb-24 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6">
          <Reveal mode="mount">
            <span className="inline-flex items-center gap-2 rounded-full border border-bone/20 bg-ink/40 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-bone-dim backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-moss-soft shadow-[0_0_8px_2px_rgba(99,199,147,0.6)]" />
              Open now &middot; Bubiashie, Accra
            </span>
          </Reveal>

          <Reveal mode="mount" delay={0.08}>
            <h1 className="font-display max-w-3xl text-[2.6rem] leading-[1.04] font-bold tracking-tight text-bone sm:text-6xl md:text-7xl">
              Accra&rsquo;s home for <span className="text-gold">late nights</span>.
            </h1>
          </Reveal>

          <Reveal mode="mount" delay={0.16}>
            <p className="max-w-md text-base leading-relaxed text-bone-dim sm:max-w-lg sm:text-lg">
              Shisha, suya on the coals, and a dance floor that doesn&rsquo;t quit. Walako Pub is where Accra
              shows up to let go.
            </p>
          </Reveal>

          <Reveal mode="mount" delay={0.24} className="w-full">
            <div className="flex w-full flex-col gap-3 pt-2 min-[420px]:flex-row sm:w-auto">
              <CTAButton href="#reserve" variant="primary">
                Reserve Table
              </CTAButton>
              <CTAButton href="#menu" variant="secondary">
                Explore Menu
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </div>

      <a
        href="#trust"
        aria-label="Scroll to explore"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce text-bone-dim sm:block"
      >
        <ChevronDown size={26} />
      </a>
    </section>
  );
}
