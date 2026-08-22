import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { experiences, destinations } from "@/data/travel";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Private Experiences — Travelia" },
      {
        name: "description",
        content:
          "Private sailing in Santorini, desert nights near Marrakech, sandbank dinners in the Maldives and more curated experiences.",
      },
      { property: "og:title", content: "Private Experiences — Travelia" },
      {
        property: "og:description",
        content: "Small, singular moments that make a journey unforgettable.",
      },
      { property: "og:url", content: "/experiences" },
    ],
    links: [{ rel: "canonical", href: "/experiences" }],
  }),
  component: ExperiencesPage,
});

function ExperiencesPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Beyond the itinerary"
          title="Experiences"
          subtitle="The small, singular moments people still talk about years later."
          image={destinations[4]!.image}
        />
        <section className="mx-auto max-w-7xl px-5 py-24">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((e) => (
              <article key={e.title} className="surface-card group relative h-96 overflow-hidden">
                <img
                  src={e.image}
                  alt={e.place}
                  loading="lazy"
                  width={1600}
                  height={1067}
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="hero-veil absolute inset-0" />
                <div className="dark text-foreground absolute inset-x-0 bottom-0 p-6">
                  <span className="text-xs uppercase tracking-[0.25em] text-gold">{e.place}</span>
                  <h2 className="mt-2 text-2xl">{e.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
                    <span className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="size-3.5 text-gold" /> {e.duration}
                    </span>
                    <span className="font-display text-lg text-gold">€{e.price}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/booking" className="btn-gold">
              Add these to a journey
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
