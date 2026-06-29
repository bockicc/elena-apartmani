import type { Spec } from "@/types/apartment";

interface Props {
  specs: Spec[];
}

export default function KeySpecsRow({ specs }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {specs.map((spec) => (
        <div
          key={spec.value}
          className="bg-white rounded-xl p-4 text-center border border-gray-100 shadow-sm"
        >
          <span className="text-xl block mb-2">{spec.icon}</span>
          <span className="text-sm text-charcoal font-medium">{spec.value}</span>
        </div>
      ))}
    </div>
  );
}
