import type { DateRange } from "@/types/booking";

export function parseDate(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function dateToISO(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function formatDMY(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${d}.${m}.${y}`;
}

export function rangesOverlap(a: DateRange, b: DateRange): boolean {
  const aStart = parseDate(a.start).getTime();
  const aEnd = parseDate(a.end).getTime();
  const bStart = parseDate(b.start).getTime();
  const bEnd = parseDate(b.end).getTime();
  return aStart <= bEnd && aEnd >= bStart;
}

export function addDays(iso: string, days: number): string {
  const d = parseDate(iso);
  d.setDate(d.getDate() + days);
  return dateToISO(d);
}
