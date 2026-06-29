// BLOCKED DATE RANGES — Apartman Elena
//
// Već rezervisani termini. Format: ISO 8601 (YYYY-MM-DD).
// Podesite ove datume direktno po potrebi.
//
// Primer:
//   { start: "2026-07-10", end: "2026-07-15" }
//   → apartman je zauzet od 10. jula do 15. jula (uključujući oba dana)

import type { BlockedRange } from "@/types/booking";

export const blockedRanges: BlockedRange[] = [
  { start: "2026-07-01", end: "2026-07-05" },
  { start: "2026-08-15", end: "2026-08-22" },
  { start: "2026-09-10", end: "2026-09-14" },
];
