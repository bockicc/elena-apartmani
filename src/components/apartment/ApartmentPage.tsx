import type { Apartment } from "@/types/apartment";
import type { BlockedRange } from "@/types/booking";
import AmenityBar from "./AmenityBar";
import ApartmentDescription from "./ApartmentDescription";
import KeySpecsRow from "./KeySpecsRow";
import PhotoGallery from "./PhotoGallery";
import SurroundingsSection from "./SurroundingsSection";
import BookingSidebar from "@/components/booking/BookingSidebar";

interface Props {
  apartment: Apartment;
  blockedRanges: BlockedRange[];
}

export default function ApartmentPage({ apartment, blockedRanges }: Props) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-32 pb-8 md:pb-12">
      <div className="mb-6">
        <h1 className="font-serif text-3xl md:text-4xl text-charcoal mb-2">
          {apartment.name}
        </h1>
        <p className="text-charcoal-muted text-sm">
          {apartment.shortDescription}
        </p>
      </div>

      <div className="lg:grid lg:grid-cols-3 lg:gap-10">
        <div className="lg:col-span-2 space-y-8">
          <AmenityBar amenities={apartment.amenities} />
          <ApartmentDescription description={apartment.description} />
          <KeySpecsRow specs={apartment.specs} />
          <PhotoGallery images={apartment.gallery} />
          <SurroundingsSection />
        </div>

        <div className="mt-8 lg:mt-14 lg:col-span-1">
          <BookingSidebar
            apartmentName={apartment.name}
            blockedRanges={blockedRanges}
          />
        </div>
      </div>
    </div>
  );
}
