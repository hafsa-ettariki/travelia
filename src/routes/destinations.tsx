import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { destinations } from "@/data/travel";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — Travelia Curated Luxury Travel" },
      {
        name: "description",
        content:
          "Browse Travelia's handpicked destinations: Santorini, Marrakech, Dubai, Paris, Bali and the Maldives.",
      },
      { property: "og:title", content: "Destinations — Travelia" },
      {
        property: "og:description",
        content: "Handpicked escapes across the globe, each with its own story.",
      },
      { property: "og:url", content: "/destinations" },
    ],
    links: [{ rel: "canonical", href: "/destinations" }],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Where to next"
          title="Destinations"
          subtitle="Six places we return to again and again — and know down to the last back street."
          image={destinations[1]!.image}
        />
        <section className="mx-auto max-w-7xl space-y-16 px-5 py-24">
          {destinations.map((d, i) => (
            <article
              key={d.slug}
              className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[direction:rtl]" : ""}`}
            >
              <div className="overflow-hidden rounded-2xl [direction:ltr]">
                <img
                  src={d.image}
                  alt={`${d.name}, ${d.country}`}
                  loading="lazy"
                  width={1600}
                  height={1067}
                  className="h-80 w-full object-cover"
                />
              </div>
              <div className="[direction:ltr]">
                <span className="text-xs uppercase tracking-[0.25em] text-gold">
                  {d.flag} {d.country} · {d.coords}
                </span>
                <h2 className="mt-4 text-4xl">{d.name}</h2>
                <p className="mt-5 leading-relaxed text-muted-foreground">{d.description}</p>
                <div className="mt-7 flex items-center gap-6">
                  <span className="font-display text-2xl text-gold">€{d.price}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    per person
                  </span>
                  <Link to="/booking" className="btn-outline-gold ml-auto">
                    Plan this trip
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
