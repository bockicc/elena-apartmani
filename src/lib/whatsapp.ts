import type { InquiryPayload } from "@/types/booking";
import { formatDMY } from "./dates";

/**
 * WhatsApp broj — ZAMENITE sa stvarnim brojem:
 * Format: 381601234567 (bez +, bez razmaka)
 */
const WHATSAPP_PHONE = "381601234567";

export function buildWhatsAppUrl(payload: InquiryPayload): string {
  const lines = [
    `Upit za rezervaciju — ${payload.apartmentName}`,
    `Datum: ${formatDMY(payload.dateRange.start)} - ${formatDMY(payload.dateRange.end)}`,
    `Broj gostiju: ${payload.numberOfGuests}`,
    `Ime: ${payload.firstName} ${payload.lastName}`,
    `Poruka: ${payload.message}`,
  ];

  const text = lines.join("\n");
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;
}
