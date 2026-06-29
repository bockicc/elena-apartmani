import { img } from "@/lib/utils";

export default function Hero() {
  const handleScroll = () => {
    document
      .getElementById("apartments-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${img("/images/hero/hero.jpg")}')`,
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="font-sans text-oak-light tracking-[0.2em] uppercase text-sm md:text-base mb-4 [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]">
          Dobrodošli u Vrnjačku Banju
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]">
          Osetite toplinu doma
          <br />
          <span className="text-amber-400">usred bisera Srbije</span>
        </h1>
        <p className="text-white text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
          Uživajte u luksuzno opremljenim apartmanima u samom srcu Vrnjačke
          Banje, na korak od Promenade i svih sadržaja.
        </p>
        <button
          onClick={handleScroll}
          className="inline-block bg-pigeon hover:bg-pigeon-hover text-white font-sans font-medium px-8 py-3 rounded-xl transition-colors cursor-pointer"
        >
          Pogledaj apartmane
        </button>
      </div>
    </section>
  );
}
