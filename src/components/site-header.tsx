import { Link } from "@tanstack/react-router";
import { Compass, Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const nav = [
  { to: "/", label: "Home", coords: "36.39°N · 25.46°E" },
  { to: "/destinations", label: "Destinations", coords: "31.63°N · 7.98°W" },
  { to: "/packages", label: "Packages", coords: "8.34°S · 115.09°E" },
  { to: "/experiences", label: "Experiences", coords: "3.20°N · 73.22°E" },
  { to: "/about", label: "About", coords: "41.01°N · 28.98°E" },
  { to: "/contact", label: "Contact", coords: "48.85°N · 2.35°E" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2.5">
          <Compass className="size-5 text-gold" strokeWidth={1.5} />
          <span className="font-display text-xl tracking-[0.22em] uppercase">Travelia</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group relative text-sm text-muted-foreground transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
              <span className="pointer-events-none absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] tracking-[0.18em] text-gold opacity-0 transition-opacity group-hover:opacity-100">
                {item.coords}
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link to="/booking" className="btn-gold hidden sm:inline-flex">
            Book Now
          </Link>
          <button
            aria-label="Toggle menu"
            className="text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border/40 px-5 pb-5 pt-3 lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-muted-foreground"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/booking" onClick={() => setOpen(false)} className="btn-gold mt-3 self-start">
            Book Now
          </Link>
        </nav>
      )}
    </header>
  );
}
