export default function VoucherBanner() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="group shimmer-card bg-oak/10 rounded-2xl p-8 md:p-12 border border-oak/20 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:border-amber-200/50 cursor-pointer">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left relative z-10">
            <div className="flex-shrink-0">
              <span className="text-5xl block transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">🎫</span>
            </div>
            <div>
              <p className="font-serif text-xl md:text-2xl text-charcoal mb-2">
                Primamo vaučere za odmor!
              </p>
              <p className="text-charcoal-muted text-sm md:text-base leading-relaxed max-w-2xl">
                Svim gostima je obezbeđena karta sa dodatnim popustima za
                korišćenje bazena u Vrnjačkim Termama i Akva Parku.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
