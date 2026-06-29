import type { AvailabilityStatus } from "@/types/booking";

interface Props {
  status: AvailabilityStatus;
}

export default function AvailabilityResult({ status }: Props) {
  if (status === "checking") {
    return (
      <div className="bg-oak/10 rounded-xl p-4 text-center border border-oak/20">
        <p className="text-charcoal-muted text-sm">Proveravanje dostupnosti...</p>
      </div>
    );
  }

  if (status === "available") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
        <p className="text-green-700 font-medium text-sm">
          Termin je dostupan! ✅
        </p>
        <p className="text-green-600 text-xs mt-1">
          Popunite formu ispod i pošaljite upit.
        </p>
      </div>
    );
  }

  if (status === "unavailable") {
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
        <p className="text-red-700 font-medium text-sm">
          Izabrani termin nije dostupan, molimo izaberite drugi datum.
        </p>
      </div>
    );
  }

  return null;
}
