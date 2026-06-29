import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import type { BlockedRange } from "@/types/booking";

interface Props {
  apartmentName: string;
  blockedRanges: BlockedRange[];
}

const DatePickerInput = ({ value, onClick, placeholder }: any) => (
  <button
    type="button"
    onClick={onClick}
    className="w-full p-3 rounded-xl border border-gray-200 bg-white text-sm outline-none text-left focus:border-amber-500 focus:ring-1 focus:ring-amber-500 cursor-pointer"
  >
    {value || <span className="text-gray-400">{placeholder}</span>}
  </button>
);

export default function BookingSidebar({
  apartmentName,
  blockedRanges,
}: Props) {
  const [startDate, setStartDate] = useState<Date | null>(new Date("2026-06-29"));
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div className="lg:sticky lg:top-48">
      <div className="w-full max-w-sm bg-[#FAF8F5] rounded-2xl p-6 border border-amber-100/60 shadow-xl space-y-6 lg:mt-12">
        <div>
          <h3 className="text-xl font-serif text-[#2C2A29] font-medium">
            Proverite dostupnost
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            Izaberite željeni termin i pošaljite upit direktno na WhatsApp.
          </p>
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-gray-600 block mb-1">
                Datum dolaska
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date: Date | null) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                dateFormat="dd.MM.yyyy"
                placeholderText="Izaberite datum"
                customInput={
                  <DatePickerInput placeholder="Izaberite datum" />
                }
                showPopperArrow={false}
                popperPlacement="bottom-start"
                popperClassName="datepicker-premium"
                wrapperClassName="w-full"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-600 block mb-1">
                Datum odlaska
              </label>
              <DatePicker
                selected={endDate}
                onChange={(date: Date | null) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate || undefined}
                dateFormat="dd.MM.yyyy"
                placeholderText="Izaberite datum"
                customInput={
                  <DatePickerInput placeholder="Izaberite datum" />
                }
                showPopperArrow={false}
                popperPlacement="bottom-start"
                popperClassName="datepicker-premium"
                wrapperClassName="w-full"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-600 block mb-1">
              Broj gostiju
            </label>
            <select
              defaultValue="2"
              className="w-full p-3 pr-12 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 appearance-none bg-[right_1rem_center] bg-no-repeat"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='9' viewBox='0 0 14 9'%3E%3Cpath d='M1 1l6 6 6-6' stroke='%239CA3AF' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
              }}
            >
              <option value="1">1 gost</option>
              <option value="2">2 gosta</option>
              <option value="3">3 gosta</option>
              <option value="4">4 gosta</option>
            </select>
          </div>
        </div>

        <button className="w-full py-3.5 bg-[#2C2A29] hover:bg-amber-600 text-white font-medium rounded-xl transition-all duration-300 shadow-md text-sm tracking-wide">
          Proveri dostupnost
        </button>
      </div>
    </div>
  );
}
