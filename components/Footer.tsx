import Image from "next/image";
import { navLinks, site } from "@/lib/content";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { InstagramIcon } from "./InstagramIcon";

export function Footer() {
  return (
    <footer className="border-t border-surface-line px-5 py-12 sm:px-8 md:px-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Walako Pub logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-contain"
          />
          <div>
            <p className="font-display text-lg font-semibold text-bone">{site.name}</p>
            <p className="text-sm text-bone-dim">{site.address}</p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-3">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-bone-dim hover:text-gold">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-surface-line text-bone-dim hover:border-moss-soft hover:text-moss-soft"
          >
            <WhatsAppIcon className="size-5" />
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-surface-line text-bone-dim hover:border-gold hover:text-gold"
          >
            <InstagramIcon className="size-[19px]" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-surface-line pt-6 text-center text-xs text-bone-dim/70 sm:text-left">
        &copy; {new Date().getFullYear()} {site.name}. Drink responsibly. Must be 18+ to enter.
      </div>
    </footer>
  );
}
