import { Bus, Plane, Users, Package } from "lucide-react";
import type { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    slug: "city-routes",
    title: "City & Route Transport",
    description:
      "Reliable, WiFi-enabled buses on Routes 105, 236, 237 and 111 — connecting 15+ stations from Kikuyu to Thika to Kitengela.",
    icon: Bus,
  },
  {
    slug: "airport-shuttle",
    title: "Airport Shuttle",
    description:
      "Door-to-door airport transfers with spacious, well-maintained vehicles so your journey starts and ends stress-free.",
    icon: Plane,
  },
  {
    slug: "charter",
    title: "Charter & Private Hire",
    description:
      "Buses for events, corporate trips, and group travel — comfortable, punctual, and tailored to your itinerary.",
    icon: Users,
  },
  {
    slug: "parcel-courier",
    title: "Parcel & Courier",
    description:
      "Fast, secure parcel delivery along our routes, getting packages where they need to be, on schedule.",
    icon: Package,
  },
];
