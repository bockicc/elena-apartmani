import { DISTANCES } from "@/data/distances";

export default function DistanceFeatures() {
  return (
    <section className="py-16 md:py-20 bg-ivory-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-oak tracking-[0.2em] uppercase text-sm mb-2">
            U neposrednoj blizini
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            Sve što Vam treba je na doorstep-u
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {DISTANCES.map((item, i) => (
            <div
              key={item.label}
              className="group bg-ivory rounded-2xl p-8 text-center shadow-sm border border-oak/10 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:border-amber-200/50 cursor-pointer"
            >
              <span
                className={[
                  "text-4xl block mb-4 transition-transform duration-300",
                  i === 0 && "group-hover:-translate-y-1",
                  i === 1 && "group-hover:translate-x-1",
                  i === 2 && "group-hover:rotate-12",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {item.icon}
              </span>
              <span className="block font-serif text-3xl text-oak mb-2">
                {item.distance}
              </span>
              <p className="text-charcoal-muted text-sm leading-relaxed">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
