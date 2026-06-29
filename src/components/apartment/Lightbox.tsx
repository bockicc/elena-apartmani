import { useEffect, useRef, useState } from "react";
import type { GalleryImage } from "@/types/apartment";

interface Props {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onGoTo: (index: number) => void;
}

function ChevronLeft() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  onGoTo,
}: Props) {
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNext, onPrev]);

  useEffect(() => {
    setFadeIn(false);
    const frame = requestAnimationFrame(() => setFadeIn(true));
    return () => cancelAnimationFrame(frame);
  }, [currentIndex]);

  useEffect(() => {
    if (!thumbnailsRef.current) return;
    const active = thumbnailsRef.current.children[currentIndex] as HTMLElement | undefined;
    if (active) {
      active.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [currentIndex]);

  const image = images[currentIndex];
  const label = String(currentIndex + 1).padStart(2, "0");
  const total = String(images.length).padStart(2, "0");

  return (
    <div
      className="fixed inset-0 z-50 bg-black flex flex-col select-none"
      onClick={onClose}
    >
      {/* Top bar — counter */}
      <div className="relative flex items-center justify-center h-16 shrink-0 px-6">
        <span className="font-sans text-white/50 tracking-[0.2em] text-sm uppercase">
          {label}
          <span className="mx-3 text-white/15">/</span>
          {total}
        </span>
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center text-white/30 hover:text-white transition-colors"
          aria-label="Zatvori"
        >
          <XIcon />
        </button>
      </div>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center text-white/25 hover:text-white hover:bg-white/8 transition-all"
            aria-label="Prethodna"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center text-white/25 hover:text-white hover:bg-white/8 transition-all"
            aria-label="Sledeća"
          >
            <ChevronRight />
          </button>
        </>
      )}

      {/* Main image area */}
      <div
        className="flex-1 flex items-center justify-center w-full px-8"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className={`max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl transition-opacity duration-300 ${fadeIn ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      {/* Bottom thumbnail strip */}
      {images.length > 1 && (
        <div className="relative w-full shrink-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
          <div className="relative backdrop-blur-sm bg-black/40 px-6 py-4">
            <div
              ref={thumbnailsRef}
              className="flex gap-2 overflow-x-auto scrollbar-hide justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {images.map((img, i) => (
                <button
                  key={img.src}
                  onClick={() => onGoTo(i)}
                  className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden transition-all duration-200 ${
                    i === currentIndex
                      ? "ring-2 ring-amber-500 scale-105 opacity-100 shadow-lg shadow-amber-500/20"
                      : "ring-1 ring-white/15 opacity-60 hover:opacity-90 hover:ring-white/40"
                  }`}
                >
                  <img
                    src={img.src}
                    alt=""
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
