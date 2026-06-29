import ApartmentPage from "@/components/apartment/ApartmentPage";
import { getApartmentBySlug } from "@/data/apartments";
import { blockedRanges } from "@/data/availability/apartman-primavera";

export default function ApartmanPrimaveraPage() {
  const apartment = getApartmentBySlug("apartman-primavera");

  if (!apartment) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-charcoal-muted">Apartman nije pronađen.</p>
      </div>
    );
  }

  return <ApartmentPage apartment={apartment} blockedRanges={blockedRanges} />;
}
