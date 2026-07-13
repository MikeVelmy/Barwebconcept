"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { navLinks, site } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-ink/90 backdrop-blur-md border-b border-surface-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="Walako Pub logo"
            width={40}
            height={40}
            className="h-9 w-9 rounded-full object-contain sm:h-10 sm:w-10"
            priority
          />
          <span className="font-display text-base font-semibold tracking-wide text-bone sm:text-lg">
            {site.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-bone-dim transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <CTAButton href="#reserve" variant="primary" className="px-5 py-2.5 text-sm">
            Reserve Table
          </CTAButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-bone md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-surface-line bg-ink px-5 pb-6 pt-2 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3.5 text-base font-medium text-bone-dim hover:bg-surface hover:text-bone"
            >
              {link.label}
            </a>
          ))}
          <CTAButton
            href="#reserve"
            variant="primary"
            onClick={() => setOpen(false)}
            className="mt-3 w-full"
          >
            Reserve Table
          </CTAButton>
        </nav>
      )}
    </header>
  );
}
