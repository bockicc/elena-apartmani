export default function MapEmbed() {
  return (
    <div className="rounded-2xl overflow-hidden border border-oak/10 bg-ivory-dark">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.3000826574694!2d20.89730467560073!3d43.62111285450637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4756582833dc4d09%3A0x4ff3b2ac3d0fd96a!2sApartman%20Elena%20-%20One-Bedroom%20Apartment!5e0!3m2!1ssr!2srs!4v1782771986238!5m2!1ssr!2srs"
        width="100%"
        height="450"
        style={{ border: 0, borderRadius: "12px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        className="w-full"
        title="Mapa apartmana Elena"
      />
    </div>
  );
}
