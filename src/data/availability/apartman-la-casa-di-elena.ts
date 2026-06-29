// BLOCKED DATE RANGES — Apartman La Casa Di Elena
//
// Već rezervisani termini. Format: ISO 8601 (YYYY-MM-DD).
// Podesite ove datume direktno po potrebi.
//
// Primer:
//   { start: "2026-07-10", end: "2026-07-15" }
//   → apartman je zauzet od 10. jula do 15. jula (uključujući oba dana)

import type { BlockedRange } from "@/types/booking";

export const blockedRanges: BlockedRange[] = [
  { start: "2026-07-03", end: "2026-07-08" },
  { start: "2026-08-01", end: "2026-08-10" },
  { start: "2026-09-18", end: "2026-09-22" },
];
