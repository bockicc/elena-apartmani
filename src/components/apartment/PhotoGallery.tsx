import type { GalleryImage } from "@/types/apartment";

interface Props {
  images: GalleryImage[];
}

export default function PhotoGallery({ images }: Props) {
  if (images.length === 0) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 pointer-events-none">
      {images.map((img) => (
        <div
          key={img.src}
          className="aspect-[4/3] rounded-xl overflow-hidden bg-ivory-dark border border-oak/10"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${img.src})` }}
          />
        </div>
      ))}
    </div>
  );
}
