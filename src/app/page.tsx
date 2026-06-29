import Hero from "@/components/sections/Hero";
import ImpactStats from "@/components/sections/ImpactStats";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ElectricFleet from "@/components/sections/ElectricFleet";
import Testimonials from "@/components/sections/Testimonials";
import StationsNetwork from "@/components/sections/StationsNetwork";
import AirportShuttleBooking from "@/components/sections/AirportShuttleBooking";
import GallerySection from "@/components/sections/GallerySection";
import FeedbackSection from "@/components/sections/FeedbackSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <ServicesGrid />
      <ElectricFleet />
      <Testimonials />
      <StationsNetwork />
      <AirportShuttleBooking />
      <GallerySection />
      <FeedbackSection />
    </>
  );
}
