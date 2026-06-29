import type { Metadata } from "next";
import ContactPageContent from "@/components/sections/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us | Super Metro",
  description: "Get in touch with Super Metro Transport — phone, address, and a contact form.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
