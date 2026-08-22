import { Link } from "@tanstack/react-router";
import { Compass, Instagram, Facebook, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <Compass className="size-5 text-gold" strokeWidth={1.5} />
            <span className="font-display text-xl uppercase tracking-[0.22em]">Travelia</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Curated luxury travel since 2009. We design slow, considered journeys for people who
            would rather feel a place than tick it off a list.
          </p>
          <div className="mt-6 flex gap-4 text-muted-foreground">
            <a href="#" aria-label="Instagram" className="transition-colors hover:text-gold">
              <Instagram className="size-4" />
            </a>
            <a href="#" aria-label="Facebook" className="transition-colors hover:text-gold">
              <Facebook className="size-4" />
            </a>
            <a href="#" aria-label="Twitter" className="transition-colors hover:text-gold">
              <Twitter className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.25em] text-gold">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/destinations" className="hover:text-gold">
                Destinations
              </Link>
            </li>
            <li>
              <Link to="/packages" className="hover:text-gold">
                Packages
              </Link>
            </li>
            <li>
              <Link to="/experiences" className="hover:text-gold">
                Experiences
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.25em] text-gold">Company</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="hover:text-gold">
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/booking" className="hover:text-gold">
                Book a journey
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 px-5 py-6 text-center text-xs tracking-[0.15em] text-muted-foreground uppercase">
        © {new Date().getFullYear()} Travelia · Curated Luxury Travel
      </div>
    </footer>
  );
}
