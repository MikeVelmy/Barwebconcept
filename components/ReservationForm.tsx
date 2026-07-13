"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";

const inputClass =
  "w-full rounded-xl border border-surface-line bg-ink-soft px-4 py-3.5 text-base text-bone placeholder:text-bone-dim/50 focus:border-gold focus:outline-none";
const labelClass = "mb-1.5 block text-sm font-medium text-bone-dim";

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="reserve" className="bg-surface/40 px-5 py-20 sm:px-8 sm:py-28 md:px-14">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <p className="font-display text-center text-xs font-semibold uppercase tracking-[0.22em] text-moss-soft">
            Book a Table
          </p>
          <h2 className="font-display mt-3 text-center text-3xl font-bold leading-tight text-bone sm:text-4xl md:text-5xl">
            Reserve your night.
          </h2>
          <p className="mt-4 text-center text-base text-bone-dim">
            Tables and private events &mdash; tell us the plan and we&rsquo;ll hold your spot.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          {submitted ? (
            <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-moss-soft/30 bg-moss/10 px-6 py-12 text-center">
              <CheckCircle2 className="text-moss-soft" size={40} />
              <p className="font-display text-xl font-semibold text-bone">Request sent.</p>
              <p className="max-w-sm text-bone-dim">
                We&rsquo;ll confirm your table by phone or WhatsApp shortly. See you tonight.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Full name
                </label>
                <input id="name" name="name" type="text" required className={inputClass} placeholder="Ama Mensah" />
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className={inputClass}
                  placeholder="024 000 0000"
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="date" className={labelClass}>
                    Date
                  </label>
                  <input id="date" name="date" type="date" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="time" className={labelClass}>
                    Time
                  </label>
                  <input id="time" name="time" type="time" required className={inputClass} />
                </div>
              </div>

              <div>
                <label htmlFor="guests" className={labelClass}>
                  Number of guests
                </label>
                <input
                  id="guests"
                  name="guests"
                  type="number"
                  min={1}
                  max={40}
                  required
                  className={inputClass}
                  placeholder="4"
                />
              </div>

              <div>
                <label htmlFor="notes" className={labelClass}>
                  Notes <span className="text-bone-dim/60">(optional)</span>
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  className={inputClass}
                  placeholder="Birthday table, shisha for 6, near the DJ..."
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex min-h-[52px] items-center justify-center rounded-full bg-gold px-7 py-4 text-base font-semibold text-ink transition-all hover:bg-gold-soft hover:-translate-y-0.5"
              >
                Reserve Table
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
