import { useState, useCallback } from "react";
import type {
  DateRange,
  BlockedRange,
  AvailabilityStatus,
  InquiryPayload,
} from "@/types/booking";
import { isRangeAvailable } from "@/lib/availability";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function useBookingFlow(blockedRanges: BlockedRange[]) {
  const [status, setStatus] = useState<AvailabilityStatus>("idle");
  const [dateRange, setDateRange] = useState<DateRange>({
    start: "",
    end: "",
  });
  const [guests, setGuests] = useState(1);

  const checkAvailability = useCallback(
    (range: DateRange) => {
      setDateRange(range);
      setStatus("checking");

      const available = isRangeAvailable(range, blockedRanges);
      setStatus(available ? "available" : "unavailable");
    },
    [blockedRanges]
  );

  const submitInquiry = useCallback(
    (payload: InquiryPayload) => {
      const url = buildWhatsAppUrl(payload);
      window.open(url, "_blank");
    },
    []
  );

  const reset = useCallback(() => {
    setStatus("idle");
    setDateRange({ start: "", end: "" });
    setGuests(1);
  }, []);

  return {
    status,
    dateRange,
    guests,
    setGuests,
    checkAvailability,
    submitInquiry,
    reset,
  };
}
