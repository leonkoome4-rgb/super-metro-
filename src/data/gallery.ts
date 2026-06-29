import type { GalleryImage } from "@/types";

// Real fleet photography lives in /public/gallery (bus-01..05.jpg).
// Illustrative placeholders fill in the rest — see /public/gallery/README.md.
export const GALLERY_IMAGES: GalleryImage[] = [
  { src: "/gallery/bus-02.jpg", alt: "Row of Super Metro buses in grey, orange and white livery", caption: "Our Fleet" },
  { src: "/gallery/bus-01.jpg", alt: "Two Super Metro electric buses face to face", caption: "100% Electric Buses" },
  { src: "/gallery/placeholder-02.svg", alt: "City route network", caption: "City & Route Network" },
  { src: "/gallery/bus-03.jpg", alt: "Super Metro management at an electric bus launch event with BasiGo", caption: "Going Electric with BasiGo" },
  { src: "/gallery/placeholder-04.svg", alt: "Charter and group travel", caption: "Charter & Group Travel" },
  { src: "/gallery/bus-04.jpg", alt: "Super Metro 100% electric bus on the road", caption: "On The Road" },
  { src: "/gallery/placeholder-07.svg", alt: "Comfort onboard", caption: "Comfort Onboard" },
  { src: "/gallery/bus-05.jpg", alt: "New Super Metro electric bus in the assembly warehouse", caption: "Fresh Off The Line" },
];
