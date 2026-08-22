import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { packages, destinations } from "@/data/travel";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Travel Packages — Travelia Curated Journeys" },
      {
        name: "description",
        content:
          "All-inclusive curated travel packages: cave suites in Santorini, desert camps in Morocco, overwater villas in the Maldives.",
      },
      { property: "og:title", content: "Travel Packages — Travelia" },
      {
        property: "og:description",
        content: "Ready-made luxury journeys with stays, transfers and private experiences.",
      },
      { property: "og:url", content: "/packages" },
    ],
    links: [{ rel: "canonical", href: "/packages" }],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="All Inclusive"
          title="Packages"
          subtitle="Everything arranged — stays, transfers, tables and the moments in between."
          image={destinations[5]!.image}
        />
        <section className="mx-auto max-w-7xl px-5 py-24">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((p) => (
              <article key={p.title} className="surface-card group flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.destination}
                    loading="lazy"
                    width={1600}
                    height={1067}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary-foreground">
                    {p.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {p.destination} · {p.nights} nights
                  </p>
                  <h2 className="mt-3 text-2xl">{p.title}</h2>
                  <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {p.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                        {inc}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-end justify-between border-t border-border pt-5">
                    <span className="font-display text-xl text-gold">€{p.price}</span>
                    <Link to="/booking" className="btn-outline-gold px-5 py-2">
                      Book
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
