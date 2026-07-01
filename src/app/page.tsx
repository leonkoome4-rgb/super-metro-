import Hero from "@/components/sections/Hero";
import ImpactStats from "@/components/sections/ImpactStats";
import ServicesGrid from "@/components/sections/ServicesGrid";
import AboutStrip from "@/components/sections/AboutStrip";
import ElectricFleet from "@/components/sections/ElectricFleet";
import PartnersStrip from "@/components/sections/PartnersStrip";
import Testimonials from "@/components/sections/Testimonials";
import StationsNetwork from "@/components/sections/StationsNetwork";
import AirportShuttleBooking from "@/components/sections/AirportShuttleBooking";
import GallerySection from "@/components/sections/GallerySection";
import ReportIncidentSection from "@/components/sections/ReportIncidentSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <ServicesGrid />
      <AboutStrip />
      <ElectricFleet />
      <PartnersStrip />
      <Testimonials />
      <ReportIncidentSection />
      <StationsNetwork />
      <AirportShuttleBooking />
      <GallerySection />
    </>
  );
}
