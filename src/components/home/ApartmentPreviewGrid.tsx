import { Link } from "react-router-dom";
import { APARTMENTS } from "@/data/apartments";
import type { Apartment } from "@/types/apartment";

function ApartmentCard({ apartment }: { apartment: Apartment }) {
  return (
    <div className="bg-ivory rounded-2xl overflow-hidden shadow-sm border border-oak/10 transition-shadow hover:shadow-md">
      <div className="overflow-hidden">
        <img
          src={apartment.heroImage}
          alt={apartment.name}
          className="w-full h-64 object-cover rounded-t-xl"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl text-charcoal mb-2">
          {apartment.name}
        </h3>
        <p className="text-charcoal-muted text-sm leading-relaxed mb-4">
          {apartment.shortDescription}
        </p>
        <Link
          to={`/${apartment.slug}`}
          className="inline-flex items-center gap-1 text-pigeon hover:text-pigeon-hover font-medium text-sm transition-colors"
        >
          Pogledaj apartman
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}

export default function ApartmentPreviewGrid() {
  return (
    <section id="apartments-section" className="py-16 md:py-20 bg-ivory-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-oak tracking-[0.2em] uppercase text-sm mb-2">
            Naši apartmani
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            Izaberite savršen smeštaj za Vas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {APARTMENTS.map((apt) => (
            <ApartmentCard key={apt.id} apartment={apt} />
          ))}
        </div>
      </div>
    </section>
  );
}
