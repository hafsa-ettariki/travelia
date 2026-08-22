import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { destinations, packages } from "@/data/travel";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book a Journey — Travelia" },
      {
        name: "description",
        content:
          "Start planning your curated journey with Travelia: choose a destination, dates and travelers and our concierge takes it from there.",
      },
      { property: "og:title", content: "Book a Journey — Travelia" },
      {
        property: "og:description",
        content: "Choose a destination and dates — our concierge designs the rest.",
      },
      { property: "og:url", content: "/booking" },
    ],
    links: [{ rel: "canonical", href: "/booking" }],
  }),
  component: BookingPage,
});

const inputClass =
  "mt-2 w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-gold";

function BookingPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Start planning"
          title="Book Your Journey"
          subtitle="A few details is all we need to start drawing your itinerary."
          image={destinations[2]!.image}
        />

        <section className="mx-auto max-w-3xl px-5 py-24">
          {sent ? (
            <div className="surface-card p-12 text-center">
              <Check className="mx-auto size-10 text-gold" />
              <h2 className="mt-6 text-3xl">Request received</h2>
              <p className="mt-4 text-muted-foreground">
                A travel designer will be in touch within one working day with a first outline of
                your journey.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="surface-card p-8 md:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Full name
                  <input required className={inputClass} placeholder="Your name" />
                </label>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                  <input required type="email" className={inputClass} placeholder="you@email.com" />
                </label>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Destination
                  <select className={inputClass}>
                    {destinations.map((d) => (
                      <option key={d.slug} className="bg-card">
                        {d.name}, {d.country}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Package
                  <select className={inputClass}>
                    <option className="bg-card">Tailor-made</option>
                    {packages.map((p) => (
                      <option key={p.title} className="bg-card">
                        {p.title}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Travel date
                  <input type="date" className={inputClass} />
                </label>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Travelers
                  <select className={inputClass}>
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} className="bg-card">
                        {n} Traveler{n > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="mt-5 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Anything we should know?
                <textarea
                  rows={4}
                  className={inputClass}
                  placeholder="Celebrations, pace, dietary needs…"
                />
              </label>
              <button type="submit" className="btn-gold mt-8 w-full">
                Request my journey
              </button>
            </form>
          )}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
