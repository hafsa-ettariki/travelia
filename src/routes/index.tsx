import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, CalendarDays, Users, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { destinations, packages } from "@/data/travel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Travelia — Curated Luxury Travel & Handpicked Journeys" },
      {
        name: "description",
        content:
          "Explore the world your way. Travelia designs curated luxury journeys to Santorini, Marrakech, the Maldives and beyond.",
      },
      { property: "og:title", content: "Travelia — Curated Luxury Travel" },
      {
        property: "og:description",
        content: "Handpicked destinations, tailored packages and private experiences worldwide.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const [slide, setSlide] = useState(0);
  const hero = destinations[slide]!;

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative flex h-screen min-h-[640px] items-center justify-center overflow-hidden">
          {destinations.map((d, i) => (
            <img
              key={d.slug}
              src={d.image}
              alt={`${d.name}, ${d.country}`}
              width={1600}
              height={1067}
              className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 ${
                i === slide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="hero-veil absolute inset-0" />

          <button
            aria-label="Previous destination"
            onClick={() => setSlide((s) => (s - 1 + destinations.length) % destinations.length)}
            className="absolute left-4 z-20 rounded-full border border-border/60 bg-background/40 p-2.5 backdrop-blur transition-colors hover:text-gold md:left-8"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            aria-label="Next destination"
            onClick={() => setSlide((s) => (s + 1) % destinations.length)}
            className="absolute right-4 z-20 rounded-full border border-border/60 bg-background/40 p-2.5 backdrop-blur transition-colors hover:text-gold md:right-8"
          >
            <ChevronRight className="size-5" />
          </button>

          <div className="dark text-foreground relative z-10 w-full max-w-5xl px-5 text-center">
            <span className="eyebrow">Curated Luxury Travel</span>
            <h1 className="mt-8 text-5xl leading-[1.02] md:text-7xl lg:text-8xl">
              Explore the World,
              <br />
              <em className="text-gold not-italic font-normal italic">Your Way.</em>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-lg text-muted-foreground">
              Discover unforgettable destinations and create your perfect journey.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-12 flex w-full max-w-3xl flex-col gap-3 rounded-3xl border border-border/60 bg-background/50 p-3 backdrop-blur-xl md:flex-row md:items-center md:rounded-full"
            >
              <label className="field-shell flex flex-1 items-center gap-3 text-left">
                <MapPin className="size-4 text-gold" />
                <span className="flex-1">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Destination
                  </span>
                  <select className="w-full bg-transparent text-sm text-foreground outline-none">
                    <option className="bg-card">Where to?</option>
                    {destinations.map((d) => (
                      <option key={d.slug} className="bg-card">
                        {d.name}, {d.country}
                      </option>
                    ))}
                  </select>
                </span>
              </label>

              <label className="field-shell flex flex-1 items-center gap-3 text-left">
                <CalendarDays className="size-4 text-gold" />
                <span className="flex-1">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Travel date
                  </span>
                  <input
                    type="date"
                    className="w-full bg-transparent text-sm text-foreground outline-none"
                  />
                </span>
              </label>

              <label className="field-shell flex flex-1 items-center gap-3 text-left">
                <Users className="size-4 text-gold" />
                <span className="flex-1">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Travelers
                  </span>
                  <select className="w-full bg-transparent text-sm text-foreground outline-none">
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} className="bg-card">
                        {n} Traveler{n > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </span>
              </label>

              <button type="submit" className="btn-gold shrink-0">
                <Search className="size-4" /> Search
              </button>
            </form>

            <div className="mt-10 flex items-center justify-center gap-2">
              {destinations.map((d, i) => (
                <button
                  key={d.slug}
                  aria-label={`Show ${d.name}`}
                  onClick={() => setSlide(i)}
                  className={`h-[2px] transition-all ${
                    i === slide ? "w-10 bg-gold" : "w-4 bg-border"
                  }`}
                />
              ))}
            </div>
            <p className="mt-4 text-xs tracking-[0.25em] uppercase text-muted-foreground">
              {hero.name} · {hero.coords}
            </p>
          </div>
        </section>

        {/* Destinations */}
        <section className="mx-auto max-w-7xl px-5 py-24">
          <div className="text-center">
            <span className="eyebrow">Popular Destinations</span>
            <h2 className="mx-auto mt-6 max-w-2xl text-4xl md:text-5xl">
              Explore the places travelers love the most
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Hand-picked escapes across the globe — each one a story waiting to be lived.
            </p>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d) => (
              <article key={d.slug} className="surface-card group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={d.image}
                    alt={`${d.name}, ${d.country}`}
                    loading="lazy"
                    width={1600}
                    height={1067}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 text-xs backdrop-blur">
                    {d.flag} {d.country}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl">{d.name}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {d.description}
                  </p>
                  <div className="mt-6 flex items-end justify-between border-t border-border pt-5">
                    <div>
                      <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        Starting from
                      </span>
                      <span className="font-display text-xl text-gold">€{d.price}</span>
                      <span className="text-xs text-muted-foreground"> / person</span>
                    </div>
                    <Link to="/booking" className="btn-outline-gold px-5 py-2">
                      Explore
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Packages strip */}
        <section className="border-y border-border/60 bg-card/40 py-24">
          <div className="mx-auto max-w-7xl px-5">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="eyebrow">Signature Packages</span>
                <h2 className="mt-6 max-w-lg text-4xl md:text-5xl">Journeys, already dreamed up</h2>
              </div>
              <Link to="/packages" className="btn-outline-gold">
                View all packages
              </Link>
            </div>

            <div className="mt-14 grid gap-7 md:grid-cols-3">
              {packages.slice(0, 3).map((p) => (
                <article key={p.title} className="surface-card group">
                  <div className="relative h-56 overflow-hidden">
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
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {p.destination} · {p.nights} nights
                    </p>
                    <h3 className="mt-3 text-2xl">{p.title}</h3>
                    <p className="mt-4 font-display text-xl text-gold">€{p.price}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-3xl px-5 py-28 text-center">
          <span className="eyebrow">Concierge</span>
          <h2 className="mt-6 text-4xl md:text-5xl">Your next chapter begins here</h2>
          <p className="mt-4 text-muted-foreground">
            Let our concierge craft a journey that's unmistakably yours.
          </p>
          <Link to="/booking" className="btn-gold mt-9">
            Start Planning
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
