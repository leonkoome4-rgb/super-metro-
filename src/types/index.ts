import type { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Partner = {
  name: string;
  logo: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export type BookingFormValues = {
  from: string;
  to: string;
  date: string;
  time: string;
  passengers: number;
  phone: string;
};

export type FeedbackFormValues = {
  name: string;
  contact: string;
  category: "Feedback" | "Complaint" | "Suggestion";
  message: string;
};

export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};
