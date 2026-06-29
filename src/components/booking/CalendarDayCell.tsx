import { cn } from "@/lib/utils";

interface Props {
  day: number;
  isBlocked: boolean;
  isSelected: boolean;
  isInRange: boolean;
  isToday: boolean;
  onClick: () => void;
}

export default function CalendarDayCell({
  day,
  isBlocked,
  isSelected,
  isInRange,
  isToday,
  onClick,
}: Props) {
  return (
    <button
      onClick={isBlocked ? undefined : onClick}
      disabled={isBlocked}
      className={cn(
        "w-full aspect-square text-sm font-sans transition-all flex items-center justify-center",
        isBlocked &&
          "text-gray-300 line-through cursor-not-allowed",
        !isBlocked && "hover:bg-amber-50 rounded-full cursor-pointer text-charcoal",
        isSelected && "bg-amber-500 text-white rounded-full hover:bg-amber-600",
        isInRange && !isSelected && "bg-amber-50 text-charcoal rounded-none",
        isToday && !isSelected && "ring-1 ring-amber-300 rounded-full"
      )}
    >
      {day}
    </button>
  );
}
