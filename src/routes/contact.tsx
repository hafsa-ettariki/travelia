import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { destinations } from "@/data/travel";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Travelia — Speak to a Travel Designer" },
      {
        name: "description",
        content:
          "Get in touch with the Travelia concierge team to plan a curated luxury journey anywhere in the world.",
      },
      { property: "og:title", content: "Contact Travelia" },
      {
        property: "og:description",
        content: "Speak to a travel designer about your next journey.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const inputClass =
  "mt-2 w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-gold";

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Concierge"
          title="Contact"
          subtitle="Tell us where your mind keeps wandering and we'll take it from there."
          image={destinations[0]!.image}
        />

        <section className="mx-auto grid max-w-6xl gap-14 px-5 py-24 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl">Let's begin</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                We reply to every enquiry within one working day, usually with a few questions and a
                first sketch of what your journey could look like.
              </p>
            </div>
            <ul className="space-y-5 text-sm">
              <li className="flex items-center gap-4">
                <Mail className="size-4 text-gold" /> hello@travelia.com
              </li>
              <li className="flex items-center gap-4">
                <Phone className="size-4 text-gold" /> +34 910 000 000
              </li>
              <li className="flex items-center gap-4">
                <MapPin className="size-4 text-gold" /> Calle Serrano 21, Madrid
              </li>
            </ul>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="surface-card p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Name
                <input required className={inputClass} placeholder="Your name" />
              </label>
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Email
                <input required type="email" className={inputClass} placeholder="you@email.com" />
              </label>
            </div>
            <label className="mt-5 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Destination of interest
              <select className={inputClass}>
                <option className="bg-card">Not sure yet</option>
                {destinations.map((d) => (
                  <option key={d.slug} className="bg-card">
                    {d.name}, {d.country}
                  </option>
                ))}
              </select>
            </label>
            <label className="mt-5 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Message
              <textarea rows={5} className={inputClass} placeholder="Tell us about your trip…" />
            </label>
            <button type="submit" className="btn-gold mt-7 w-full">
              {sent ? "Message sent — thank you" : "Send enquiry"}
            </button>
          </form>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
