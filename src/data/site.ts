import type { NavLink } from "@/types/nav";

export const SITE = {
  name: "Elena Apartmani",
  shortName: "Elena",
  phone1: "+381691239972",
  phoneLabel1: "069/123-9972",
  phone2: "+381641763036",
  phoneLabel2: "064/176-3036",
  address: "Vrnjačka Banja, Srbija",
  description:
    "Luksuzni apartmani u Vrnjačkoj Banji — vaš dom na odmoru.",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Početna", href: "/" },
  { label: "Apartman Elena", href: "/apartman-elena" },
  { label: "Apartman La Casa Di Elena", href: "/apartman-la-casa-di-elena" },
  { label: "Apartman Primavera", href: "/apartman-primavera" },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Početna", href: "/" },
  { label: "Apartman Elena", href: "/apartman-elena" },
  { label: "Apartman La Casa Di Elena", href: "/apartman-la-casa-di-elena" },
  { label: "Apartman Primavera", href: "/apartman-primavera" },
];
