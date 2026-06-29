import type { Amenity } from "@/types/apartment";

interface Props {
  amenities: Amenity[];
}

function WifiIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A87C5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <circle cx="12" cy="20" r="1" fill="#A87C5A" />
    </svg>
  );
}

function TvIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A87C5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
      <polyline points="16 21 16 17 8 17 8 21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

function ParkingIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A87C5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </svg>
  );
}

function AcIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A87C5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 16H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2z" />
      <path d="M12 20v-4" />
      <path d="M8 22h8" />
    </svg>
  );
}

const ICON_MAP: Record<string, React.ReactNode> = {
  "📶": <WifiIcon />,
  "📺": <TvIcon />,
  "🅿️": <ParkingIcon />,
  "❄️": <AcIcon />,
};

export default function AmenityBar({ amenities }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
      {amenities.map((amenity) => (
        <div key={amenity.label} className="flex items-center gap-3">
          <span className="shrink-0 w-10 h-10 rounded-lg bg-oak/10 flex items-center justify-center">
            {ICON_MAP[amenity.icon] || <span className="text-oak text-lg">{amenity.icon}</span>}
          </span>
          <p className="font-sans text-sm font-medium text-charcoal leading-tight">
            {amenity.label}
          </p>
        </div>
      ))}
    </div>
  );
}
