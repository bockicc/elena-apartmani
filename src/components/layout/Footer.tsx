import { Link } from "react-router-dom";
import { FOOTER_LINKS, SITE } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-oak/20 bg-ivory-dark mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-serif text-xl text-charcoal mb-4">
              {SITE.name}
            </h3>
            <p className="text-charcoal-muted text-sm leading-relaxed">
              Luksuzni apartmani u samom centru Vrnjačke Banje. Vaš dom na
              odmoru.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold text-charcoal uppercase tracking-wider mb-4">
              Brzi linkovi
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-charcoal-muted hover:text-oak transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold text-charcoal uppercase tracking-wider mb-4">
              Kontakt
            </h4>
            <ul className="space-y-3 text-sm text-charcoal-muted">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a
                  href={`tel:${SITE.phone1}`}
                  className="hover:text-oak transition-colors"
                >
                  {SITE.phoneLabel1}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a
                  href={`tel:${SITE.phone2}`}
                  className="hover:text-oak transition-colors"
                >
                  {SITE.phoneLabel2}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>{SITE.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-oak/20 text-center text-sm text-charcoal-muted">
          &copy; {new Date().getFullYear()} {SITE.name}. Sva prava zadržana.
        </div>
      </div>
    </footer>
  );
}
