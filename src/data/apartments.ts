import { img } from "@/lib/utils";
import type { Apartment } from "@/types/apartment";

export const APARTMENTS: Apartment[] = [
  {
    id: "elena",
    slug: "apartman-elena",
    name: "Apartman Elena",
    shortDescription:
      "Moderan i potpuno opremljen apartman u centru Vrnjačke Banje.",
    description:
      "Nalazi se na drugom spratu novogradnje, ukupne kvadrature od 40m² i potpuno je opremljen. Gostima je na raspolaganju prostrani dnevni boravak, spavaća soba, kupatilo i terasa sa koje se pruža pogled na centar grada. Trudili smo se da prostor obogatimo brojnim detaljima kako bismo Vaš boravak učinili što ugodnijim.",
    amenities: [
      { icon: "📶", label: "Optički internet brzi" },
      { icon: "📺", label: "Kablovska TV" },
      {
        icon: "🅿️",
        label: "Besplatan privatni parking",
        subtext:
          "obezbeđen parking prostor ili garažno mesto ispred objekta",
      },
      { icon: "❄️", label: "Klima uređaj" },
    ],
    specs: [
      { icon: "🛏️", value: "1 spavaća soba" },
      { icon: "🛋️", value: "1 dnevna soba" },
      { icon: "👤", value: "Maksimalno 4 osobe" },
      { icon: "🌙", value: "Minimalan broj noćenja: 1" },
    ],
    gallery: [
      { src: img("/images/apartments/elena/elena1.jpg"), alt: "Dnevni boravak apartmana Elena" },
      { src: img("/images/apartments/elena/elena2.jpg"), alt: "Spavaća soba apartmana Elena" },
      { src: img("/images/apartments/elena/elena3.jpg"), alt: "Kupatilo apartmana Elena" },
      { src: img("/images/apartments/elena/elena4.jpg"), alt: "Terasa apartmana Elena" },
      { src: img("/images/apartments/elena/elena5.jpg"), alt: "Pogled sa terase apartmana Elena" },
      { src: img("/images/apartments/elena/elena6.jpg"), alt: "Kuhinja apartmana Elena" },
      { src: img("/images/apartments/elena/elena7.jpg"), alt: "Ulaz apartmana Elena" },
      { src: img("/images/apartments/elena/elena8.jpg"), alt: "Detalj enterijera apartmana Elena" },
      { src: img("/images/apartments/elena/elena9.jpg"), alt: "Detalj enterijera apartmana Elena" },
      { src: img("/images/apartments/elena/elena10.jpg"), alt: "Detalj enterijera apartmana Elena" },
      { src: img("/images/apartments/elena/elena11.jpg"), alt: "Detalj enterijera apartmana Elena" },
      { src: img("/images/apartments/elena/elena12.jpg"), alt: "Detalj enterijera apartmana Elena" },
    ],
    maxGuests: 4,
    minNights: 1,
    heroImage: img("/images/apartments/elena/poc-elena.jpg"),
  },
  {
    id: "la-casa-di-elena",
    slug: "apartman-la-casa-di-elena",
    name: "Apartman La Casa Di Elena",
    shortDescription:
      "Elegantan smeštaj u neposrednoj blizini Mosta ljubavi.",
    description:
      "Smešten na 400m od prepoznatljivog Mosta ljubavi, u blizini centralnog banjskog parka i na samo minut hoda od vrnjačke Promenade. Prostrana dnevna soba je odvojena od spavaće sobe sa udobnim francuskim ležajem koja u svom sastavu ima radni sto. Smeštajna jedinica je moderno opremljena elegantnim enterijerom, a gostima je na raspolaganju i čajna kuhinja sa trpezarijom. Pored svega toga, predusretljivi i gostoljubivi domaćini su tu da upotpune Vaše zasigurno prijatno iskustvo.",
    amenities: [
      { icon: "📶", label: "Optički internet brzi" },
      { icon: "📺", label: "Kablovska TV" },
      { icon: "🅿️", label: "Besplatan privatni parking" },
      { icon: "❄️", label: "Klima uređaj" },
    ],
    specs: [
      { icon: "📍", value: "Strogi centar grada" },
      { icon: "🅿️", value: "Obezbeđen parking" },
      { icon: "🏞️", value: "Terasa sa pogledom na grad" },
      { icon: "📶", value: "Optički internet i kablovska" },
    ],
    gallery: [
      { src: img("/images/apartments/la-casa-di-elena/lacasa1.jpg"), alt: "Dnevni boravak apartmana La Casa Di Elena" },
      { src: img("/images/apartments/la-casa-di-elena/lacasa2.jpg"), alt: "Spavaća soba apartmana La Casa Di Elena" },
      { src: img("/images/apartments/la-casa-di-elena/lacasa3.jpg"), alt: "Kuhinja apartmana La Casa Di Elena" },
      { src: img("/images/apartments/la-casa-di-elena/lacasa4.jpg"), alt: "Trpezarija apartmana La Casa Di Elena" },
      { src: img("/images/apartments/la-casa-di-elena/lacasa5.jpg"), alt: "Terasa apartmana La Casa Di Elena" },
      { src: img("/images/apartments/la-casa-di-elena/lacasa6.jpg"), alt: "Kupatilo apartmana La Casa Di Elena" },
      { src: img("/images/apartments/la-casa-di-elena/lacasa7.jpg"), alt: "Ulaz apartmana La Casa Di Elena" },
      { src: img("/images/apartments/la-casa-di-elena/lacasa8.jpg"), alt: "Detalj enterijera apartmana La Casa Di Elena" },
      { src: img("/images/apartments/la-casa-di-elena/lacasa9.jpg"), alt: "Detalj enterijera apartmana La Casa Di Elena" },
      { src: img("/images/apartments/la-casa-di-elena/lacasa10.jpg"), alt: "Detalj enterijera apartmana La Casa Di Elena" },
      { src: img("/images/apartments/la-casa-di-elena/lacasa11.jpg"), alt: "Detalj enterijera apartmana La Casa Di Elena" },
      { src: img("/images/apartments/la-casa-di-elena/lacasa12.jpg"), alt: "Detalj enterijera apartmana La Casa Di Elena" },
      { src: img("/images/apartments/la-casa-di-elena/lacasa13.jpg"), alt: "Detalj enterijera apartmana La Casa Di Elena" },
      { src: img("/images/apartments/la-casa-di-elena/lacasa14.jpg"), alt: "Detalj enterijera apartmana La Casa Di Elena" },
      { src: img("/images/apartments/la-casa-di-elena/lacasa15.jpg"), alt: "Detalj enterijera apartmana La Casa Di Elena" },
      { src: img("/images/apartments/la-casa-di-elena/lacasa16.jpg"), alt: "Detalj enterijera apartmana La Casa Di Elena" },
      { src: img("/images/apartments/la-casa-di-elena/lacasa17.jpg"), alt: "Detalj enterijera apartmana La Casa Di Elena" },
      { src: img("/images/apartments/la-casa-di-elena/lacasa18.jpg"), alt: "Detalj enterijera apartmana La Casa Di Elena" },
      { src: img("/images/apartments/la-casa-di-elena/lacasa19.jpg"), alt: "Detalj enterijera apartmana La Casa Di Elena" },
    ],
    maxGuests: 4,
    minNights: 1,
    heroImage: img("/images/apartments/la-casa-di-elena/poc-lacasa.jpg"),
  },
  {
    id: "primavera",
    slug: "apartman-primavera",
    name: "Apartman Primavera",
    shortDescription:
      "Prostran apartman sa terasom i parkingom u mirnom delu grada.",
    description:
      "Smešten na 500m od prepoznatljivog Mosta ljubavi, u blizini centralnog banjskog parka i na samo minut hod od vrnjačke Promenade. Apartman je površine 45m² sa terasom sa koje se pruža pogled na miran deo ulice. Prostrana dnevna soba sadrži ugaonu garnituru koja se razvlači i po potrebi pretvara u krevet za dvoje. Odvojena spavaća soba sadrži veliki francuski ležaj i radni sto sa ogledalom. Stan je potpuno opremljen svim potrebnim stvarima za Vaš ugodan boravak. Rezervacijom ovog apartmana osiguravate parking mesto ispred same zgrade.",
    amenities: [
      { icon: "📶", label: "Optički internet brzi" },
      { icon: "📺", label: "Kablovska TV" },
      {
        icon: "🅿️",
        label: "Besplatan privatni parking",
        subtext: "parking mesto ispred zgrade",
      },
      { icon: "❄️", label: "Klima uređaj" },
    ],
    specs: [
      { icon: "🛏️", value: "1 spavaća soba" },
      { icon: "🛋️", value: "1 dnevni boravak" },
      { icon: "👤", value: "Maksimalno 4 osobe" },
      { icon: "🌙", value: "Minimalan broj noćenja: 1" },
    ],
    gallery: [
      { src: img("/images/apartments/primavera/primavera1.jpg"), alt: "Dnevni boravak apartmana Primavera" },
      { src: img("/images/apartments/primavera/primavera2.jpg"), alt: "Spavaća soba apartmana Primavera" },
      { src: img("/images/apartments/primavera/primavera3.jpg"), alt: "Kuhinja apartmana Primavera" },
      { src: img("/images/apartments/primavera/primavera4.jpg"), alt: "Trpezarija apartmana Primavera" },
      { src: img("/images/apartments/primavera/primavera5.jpg"), alt: "Kupatilo apartmana Primavera" },
      { src: img("/images/apartments/primavera/primavera6.jpg"), alt: "Terasa apartmana Primavera" },
      { src: img("/images/apartments/primavera/primavera7.jpg"), alt: "Pogled sa terase apartmana Primavera" },
      { src: img("/images/apartments/primavera/primavera8.jpg"), alt: "Ulaz apartmana Primavera" },
      { src: img("/images/apartments/primavera/primavera9.jpg"), alt: "Detalj enterijera apartmana Primavera" },
      { src: img("/images/apartments/primavera/primavera10.jpg"), alt: "Detalj enterijera apartmana Primavera" },
      { src: img("/images/apartments/primavera/primavera11.jpg"), alt: "Detalj enterijera apartmana Primavera" },
    ],
    maxGuests: 4,
    minNights: 1,
    heroImage: img("/images/apartments/primavera/poc-primavera.jpg"),
  },
];

export function getApartmentBySlug(slug: string): Apartment | undefined {
  return APARTMENTS.find((a) => a.slug === slug);
}
