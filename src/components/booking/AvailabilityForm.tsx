import { useState } from "react";
import type { BlockedRange, DateRange } from "@/types/booking";
import AvailabilityCalendar from "./AvailabilityCalendar";
import AvailabilityResult from "./AvailabilityResult";
import InquiryForm from "./InquiryForm";
import { useBookingFlow } from "@/hooks/useBookingFlow";

interface Props {
  apartmentName: string;
  blockedRanges: BlockedRange[];
}

export default function AvailabilityForm({
  apartmentName,
  blockedRanges,
}: Props) {
  const [dateRange, setDateRange] = useState<DateRange>({
    start: "",
    end: "",
  });
  const [guests, setGuests] = useState(2);

  const { status, checkAvailability, submitInquiry } =
    useBookingFlow(blockedRanges);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (dateRange.start && dateRange.end) {
      checkAvailability(dateRange);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <AvailabilityCalendar
            blockedRanges={blockedRanges}
            selectedRange={dateRange}
            onSelectRange={setDateRange}
            monthOffset={0}
          />
          <AvailabilityCalendar
            blockedRanges={blockedRanges}
            selectedRange={dateRange}
            onSelectRange={setDateRange}
            monthOffset={1}
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-charcoal mb-1">
                Datum od
              </label>
              <input
                type="date"
                value={dateRange.start}
                onChange={(e) =>
                  setDateRange((prev) => ({ ...prev, start: e.target.value }))
                }
                className="w-full p-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 bg-white text-sm outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-charcoal mb-1">
                Datum do
              </label>
              <input
                type="date"
                value={dateRange.end}
                onChange={(e) =>
                  setDateRange((prev) => ({ ...prev, end: e.target.value }))
                }
                className="w-full p-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 bg-white text-sm outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-charcoal mb-1">
              Broj gostiju
            </label>
            <input
              type="number"
              min={1}
              max={6}
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full p-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 bg-white text-sm outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={!dateRange.start || !dateRange.end}
            className="w-full py-3 bg-amber-500 hover:bg-amber-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors shadow-md"
          >
            Proveri dostupnost
          </button>
        </form>
      </div>

      <AvailabilityResult status={status} />

      {status === "available" && (
        <InquiryForm
          apartmentName={apartmentName}
          dateRange={dateRange}
          guests={guests}
          onSubmit={submitInquiry}
        />
      )}
    </div>
  );
}
