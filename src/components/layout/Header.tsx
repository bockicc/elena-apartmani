import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS, SITE } from "@/data/site";
import { cn } from "@/lib/utils";
import MobileNavDrawer from "./MobileNavDrawer";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const THRESHOLD = 600;
    const handleScroll = () => setScrolled(window.scrollY > THRESHOLD);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300",
          transparent
            ? "bg-transparent"
            : "bg-ivory/95 backdrop-blur-sm border-b border-oak/20"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link
              to="/"
              className={cn(
                "font-serif text-2xl md:text-3xl font-medium tracking-wide transition-colors",
                transparent ? "text-white" : "text-charcoal"
              )}
            >
              {SITE.name}
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "text-sm font-sans tracking-wide transition-colors font-semibold",
                    location.pathname === link.href
                      ? transparent
                        ? "text-amber-400"
                        : "text-oak"
                      : transparent
                        ? "text-white/90 hover:text-white"
                        : "text-charcoal-muted hover:text-oak"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${SITE.phone1}`}
                className={cn(
                  "inline-flex items-center gap-1.5 font-semibold text-sm transition-colors",
                  transparent
                    ? "text-amber-400 hover:text-amber-300"
                    : "text-pigeon hover:text-pigeon-hover"
                )}
              >
                <span>📞</span>
                {SITE.phoneLabel1}
              </a>
              <span className={cn("text-xs", transparent ? "text-white/50" : "text-charcoal-muted")}>|</span>
              <a
                href={`tel:${SITE.phone2}`}
                className={cn(
                  "inline-flex items-center gap-1.5 font-semibold text-sm transition-colors",
                  transparent
                    ? "text-amber-400 hover:text-amber-300"
                    : "text-pigeon hover:text-pigeon-hover"
                )}
              >
                <span>📞</span>
                {SITE.phoneLabel2}
              </a>
            </div>

            <button
              onClick={() => setDrawerOpen(true)}
              className={cn(
                "md:hidden text-2xl leading-none p-1 transition-colors",
                transparent ? "text-white" : "text-charcoal"
              )}
              aria-label="Otvori meni"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      <MobileNavDrawer
        links={NAV_LINKS}
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
}
