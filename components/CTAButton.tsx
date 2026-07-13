import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary";

type Props = ComponentPropsWithoutRef<typeof Link> & {
  variant?: Variant;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-[0.95rem] font-semibold tracking-wide transition-all duration-300 min-h-[52px] focus-visible:outline-2 focus-visible:outline-offset-4";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-ink hover:bg-gold-soft hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(215,164,76,0.55)] active:translate-y-0",
  secondary:
    "border border-bone/35 text-bone hover:border-bone hover:bg-bone/5 hover:-translate-y-0.5 active:translate-y-0",
};

export function CTAButton({
  variant = "primary",
  className = "",
  ...props
}: Props) {
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
}
