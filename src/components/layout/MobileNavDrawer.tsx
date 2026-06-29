import { Link } from "react-router-dom";
import type { NavLink } from "@/types/nav";
import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";

interface Props {
  links: NavLink[];
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNavDrawer({ links, isOpen, onClose }: Props) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={onClose}
        />
      )}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-72 bg-ivory shadow-xl transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-oak/20">
          <span className="font-serif text-xl text-charcoal tracking-wide">
            {SITE.name}
          </span>
          <button
            onClick={onClose}
            className="text-charcoal-muted hover:text-charcoal text-2xl leading-none"
            aria-label="Zatvori meni"
          >
            ✕
          </button>
        </div>
        <nav className="px-6 pt-6 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={onClose}
              className="text-lg text-charcoal hover:text-oak transition-colors font-sans"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="px-6 pt-8 mt-6 border-t border-oak/20 space-y-3">
          <a
            href={`tel:${SITE.phone1}`}
            className="inline-flex items-center gap-2 text-pigeon hover:text-pigeon-hover font-medium"
          >
            <span>📞</span>
            {SITE.phoneLabel1}
          </a>
          <a
            href={`tel:${SITE.phone2}`}
            className="inline-flex items-center gap-2 text-pigeon hover:text-pigeon-hover font-medium"
          >
            <span>📞</span>
            {SITE.phoneLabel2}
          </a>
        </div>
      </div>
    </>
  );
}
