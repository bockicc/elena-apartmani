import { useState } from "react";
import type { DateRange, InquiryPayload } from "@/types/booking";

interface Props {
  apartmentName: string;
  dateRange: DateRange;
  guests: number;
  onSubmit: (payload: InquiryPayload) => void;
}

export default function InquiryForm({
  apartmentName,
  dateRange,
  guests,
  onSubmit,
}: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      apartmentName,
      dateRange,
      numberOfGuests: guests,
      firstName,
      lastName,
      message,
    });
  };

  return (
    <div className="space-y-4 border-t border-oak/20 pt-6">
      <p className="font-serif text-lg text-charcoal">
        Pošaljite upit za rezervaciju
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-charcoal mb-1">
              Ime
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 bg-white text-sm outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-charcoal mb-1">
              Prezime
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 bg-white text-sm outline-none"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-charcoal mb-1">
            Poruka
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="w-full p-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 bg-white text-sm outline-none resize-none"
            placeholder="Vaša poruka..."
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-colors shadow-md"
        >
          Pošalji upit
        </button>
      </form>
    </div>
  );
}
