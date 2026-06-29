import { DISTANCES } from "@/data/distances";
import MapEmbed from "./MapEmbed";

export default function SurroundingsSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="text-center mb-10">
        <p className="font-sans text-oak tracking-[0.2em] uppercase text-sm mb-2">
          Okolina smeštaja
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
          Sve na korak od Vas
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        {DISTANCES.map((item, i) => (
          <div
            key={item.label}
            className="group bg-ivory-dark rounded-xl p-6 text-center border border-oak/10 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:border-amber-200/50 cursor-pointer"
          >
            <span
              className={[
                "text-3xl block mb-3 transition-transform duration-300",
                i === 0 && "group-hover:-translate-y-1",
                i === 1 && "group-hover:translate-x-1",
                i === 2 && "group-hover:rotate-12",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {item.icon}
            </span>
            <span className="block font-serif text-2xl text-oak mb-1">
              {item.distance}
            </span>
            <p className="text-charcoal-muted text-sm">{item.label}</p>
          </div>
        ))}
      </div>

      <MapEmbed />
    </section>
  );
}
