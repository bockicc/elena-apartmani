export interface GalleryImage {
  src: string;
  alt: string;
}

export interface Amenity {
  icon: string;
  label: string;
  subtext?: string;
}

export interface Spec {
  icon: string;
  value: string;
}

export interface Apartment {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  amenities: Amenity[];
  specs: Spec[];
  gallery: GalleryImage[];
  maxGuests: number;
  minNights: number;
  heroImage: string;
}
