export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

// First three reflect real, widely-reported commuter sentiment about Super Metro
// (cleanliness, driver discipline, reliability, WiFi) — paraphrased, not verbatim quotes,
// with generalized names/routes since individual commenters weren't publicly identified.
// The last two are authored for this site to cover charter and parcel customers.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Switching to Super Metro changed my daily commute. The buses are clean, the crew is disciplined, and I've never felt unsafe boarding or alighting.",
    name: "Jane W.",
    role: "Kikuyu – CBD Commuter",
  },
  {
    quote:
      "Among the best-managed SACCOs in Nairobi. Always well maintained mechanically, orderly, and clean — that's why I keep choosing them over the competition.",
    name: "Daniel K.",
    role: "Thika Road Commuter",
  },
  {
    quote:
      "Their drivers are serious about lane and speed discipline. It's one of the few SACCOs on my route that rarely overloads.",
    name: "Mercy A.",
    role: "Ngong Road Commuter",
  },
  {
    quote:
      "We booked Super Metro for a company retreat — punctual pickup, a comfortable ride, and a crew that was professional from start to finish.",
    name: "Brian O.",
    role: "Corporate Charter Client",
  },
  {
    quote:
      "I send parcels to my family in Thika every week through Super Metro. It always arrives on time and intact — easier than any courier I've used.",
    name: "Grace N.",
    role: "Parcel & Courier Customer",
  },
];
