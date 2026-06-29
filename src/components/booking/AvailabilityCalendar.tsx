import { useMemo } from "react";
import type { BlockedRange, DateRange } from "@/types/booking";
import { parseDate, dateToISO } from "@/lib/dates";
import CalendarDayCell from "./CalendarDayCell";

interface Props {
  blockedRanges: BlockedRange[];
  selectedRange: DateRange;
  onSelectRange: (range: DateRange) => void;
  monthOffset?: number;
}

function getMonthDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const days: (number | null)[] = [];

  for (let i = 0; i < firstDay.getDay(); i++) {
    days.push(null);
  }

  for (let d = 1; d <= lastDay.getDate(); d++) {
    days.push(d);
  }

  return days;
}

function isDateBlocked(date: Date, blocked: BlockedRange[]): boolean {
  const iso = dateToISO(date);
  const time = date.getTime();
  return blocked.some((b) => {
    const bStart = parseDate(b.start).getTime();
    const bEnd = parseDate(b.end).getTime();
    return time >= bStart && time <= bEnd;
  });
}

const MONTHS_SR = [
  "Januar", "Februar", "Mart", "April", "Maj", "Jun",
  "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar",
];

export default function AvailabilityCalendar({
  blockedRanges,
  selectedRange,
  onSelectRange,
  monthOffset = 0,
}: Props) {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + monthOffset;

  const days = useMemo(() => getMonthDays(year, month), [year, month]);

  const selectedStart = selectedRange.start
    ? parseDate(selectedRange.start)
    : null;
  const selectedEnd = selectedRange.end ? parseDate(selectedRange.end) : null;

  const handleDayClick = (day: number) => {
    const clicked = new Date(year, month, day);
    const iso = dateToISO(clicked);

    if (!selectedRange.start) {
      onSelectRange({ start: iso, end: "" });
    } else if (!selectedRange.end) {
      const startDate = parseDate(selectedRange.start);
      if (clicked < startDate) {
        onSelectRange({ start: iso, end: selectedRange.start });
      } else {
        onSelectRange({ start: selectedRange.start, end: iso });
      }
    } else {
      onSelectRange({ start: iso, end: "" });
    }
  };

  return (
    <div>
      <p className="font-sans text-sm font-semibold text-charcoal mb-2">
        {MONTHS_SR[month]} {year}
      </p>
      <div className="grid grid-cols-7 gap-1">
        {["Ned", "Pon", "Uto", "Sre", "Čet", "Pet", "Sub"].map((d) => (
          <div
            key={d}
            className="text-center text-xs text-charcoal-muted font-medium py-1"
          >
            {d}
          </div>
        ))}

        {days.map((day, i) => {
          if (day === null) {
            return <div key={`empty-${i}`} />;
          }

          const date = new Date(year, month, day);
          const iso = dateToISO(date);
          const isBlocked = isDateBlocked(date, blockedRanges);
          const isToday =
            date.toDateString() === today.toDateString();
          const isSelected =
            iso === selectedRange.start || iso === selectedRange.end;
          const isInRange = (() => {
            if (!selectedStart || !selectedEnd) return false;
            const t = date.getTime();
            return t > selectedStart.getTime() && t < selectedEnd.getTime();
          })();

          return (
            <CalendarDayCell
              key={iso}
              day={day}
              isBlocked={isBlocked}
              isSelected={isSelected}
              isInRange={isInRange}
              isToday={isToday}
              onClick={() => handleDayClick(day)}
            />
          );
        })}
      </div>
    </div>
  );
}
