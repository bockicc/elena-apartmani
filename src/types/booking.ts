export interface DateRange {
  start: string;
  end: string;
}

export interface BlockedRange extends DateRange {}

export interface InquiryPayload {
  apartmentName: string;
  dateRange: DateRange;
  numberOfGuests: number;
  firstName: string;
  lastName: string;
  message: string;
}

export type AvailabilityStatus = "idle" | "checking" | "available" | "unavailable";
