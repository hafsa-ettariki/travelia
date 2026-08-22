import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { destinations } from "@/data/travel";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Travelia — Curated Luxury Travel Since 2009" },
      {
        name: "description",
        content:
          "Travelia is a small studio of travel designers building slow, considered journeys for people who want to feel a place, not tick it off.",
      },
      { property: "og:title", content: "About Travelia" },
      {
        property: "og:description",
        content: "A small studio of travel designers crafting curated luxury journeys.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const stats = [
  { value: "15", label: "Years designing journeys" },
  { value: "48", label: "Countries covered" },
  { value: "9.6k", label: "Travelers hosted" },
  { value: "4.9", label: "Average rating" },
];

const values = [
  {
    title: "Slow by design",
    text: "Fewer stops, longer stays. We build itineraries with room to breathe, wander and return to a favourite table.",
  },
  {
    title: "People, not brochures",
    text: "Every stay, guide and driver is someone we've met. If we wouldn't send our family, we don't send you.",
  },
  {
    title: "Quietly luxurious",
    text: "Luxury as ease: the right room, the right hour, someone waiting when the flight lands late.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Our story"
          title="About Travelia"
          subtitle="A small studio of travel designers, obsessive about the details you never see."
          image={destinations[3]!.image}
        />

        <section className="mx-auto grid max-w-6xl gap-14 px-5 py-24 md:grid-cols-2">
          <div>
            <span className="eyebrow">Since 2009</span>
            <h2 className="mt-6 text-4xl">We plan the way we travel ourselves</h2>
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Travelia began with two friends, a battered notebook and a stubborn belief that the
              best trips are not the busiest ones. Fifteen years later the notebook is a network of
              hosts, captains, chefs and guides across four continents.
            </p>
            <p>
              We still work the same way: a conversation first, then a journey drawn around it — the
              pace, the appetite for adventure, the mornings you want to keep empty.
            </p>
          </div>
        </section>

        <section className="border-y border-border/60 bg-card/40 py-16">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-5 text-center md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl text-gold">{s.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid gap-7 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="surface-card p-8">
                <h3 className="text-2xl">{v.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/contact" className="btn-gold">
              Talk to a designer
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
