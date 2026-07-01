import type { Metadata } from "next";
import AboutPageContent from "@/components/sections/AboutPageContent";

export const metadata: Metadata = {
  title: "About Us | Super Metro Transport",
  description:
    "Super Metro began as a cooperative SACCO in 2013 with one belief: Nairobi's commuters deserve better. Learn how we grew to 500+ buses across every major corridor.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
