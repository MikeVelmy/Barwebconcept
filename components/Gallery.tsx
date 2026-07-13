"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Reveal } from "./Reveal";
import { galleryImages } from "@/lib/content";

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length)),
    []
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % galleryImages.length)),
    []
  );

  useEffect(() => {
    if (activeIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close, prev, next]);

  return (
    <section id="gallery" className="bg-surface/40 px-5 py-20 sm:px-8 sm:py-28 md:px-14">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-moss-soft">
            Inside Walako
          </p>
          <h2 className="font-display mt-3 max-w-xl text-3xl font-bold leading-tight text-bone sm:text-4xl md:text-5xl">
            The nights, in photos.
          </h2>
        </Reveal>

        <div className="mt-12 columns-1 gap-4 sm:mt-14 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {galleryImages.map((image, i) => (
            <Reveal key={image.src} delay={(i % 3) * 0.08} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className="group relative block w-full overflow-hidden rounded-xl"
                aria-label={`Open photo: ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  placeholder={image.blurDataURL ? "blur" : "empty"}
                  blurDataURL={image.blurDataURL}
                  sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 100vw"
                  className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="m-3 flex items-center gap-1.5 rounded-full bg-ink/70 px-3 py-1.5 text-xs font-medium text-bone backdrop-blur-sm">
                    <Expand size={13} /> View
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full text-bone hover:bg-bone/10 sm:right-8 sm:top-8"
          >
            <X size={26} />
          </button>

          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 flex h-12 w-12 items-center justify-center rounded-full text-bone hover:bg-bone/10 sm:left-6"
          >
            <ChevronLeft size={28} />
          </button>

          <div
            className="relative max-h-[85vh] w-full max-w-3xl"
            style={{ aspectRatio: `${galleryImages[activeIndex].width} / ${galleryImages[activeIndex].height}` }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
              fill
              sizes="90vw"
              className="rounded-xl object-contain"
            />
          </div>

          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 flex h-12 w-12 items-center justify-center rounded-full text-bone hover:bg-bone/10 sm:right-6"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
}
