import Hero from "@/components/home/Hero";
import DistanceFeatures from "@/components/home/DistanceFeatures";
import VoucherBanner from "@/components/home/VoucherBanner";
import ApartmentPreviewGrid from "@/components/home/ApartmentPreviewGrid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DistanceFeatures />
      <VoucherBanner />
      <ApartmentPreviewGrid />
    </>
  );
}
