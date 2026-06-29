import type { DateRange, BlockedRange } from "@/types/booking";
import { rangesOverlap } from "./dates";

export function isRangeAvailable(
  range: DateRange,
  blocked: BlockedRange[]
): boolean {
  return !blocked.some((b) => rangesOverlap(range, b));
}
