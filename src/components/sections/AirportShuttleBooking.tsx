import Image from "next/image";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import BookingForm from "../forms/BookingForm";

export default function AirportShuttleBooking() {
  return (
    <section id="booking" className="relative overflow-hidden bg-metro-grey-900 py-24">
      <Image
        src="https://images.unsplash.com/photo-1664181220731-06219378d8c7?fm=jpg&q=80&w=1800&auto=format&fit=crop"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover object-center opacity-20"
      />
      <div className="relative z-10">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Airport Transfers"
            title="Book Your Airport Shuttle"
            subtitle="Hassle-free airport transfers — reliable pick-up and drop-off in spacious, well-maintained vehicles so your journey starts right."
            light
          />
          <div className="mt-12">
            <BookingForm />
          </div>
        </Container>
      </div>
    </section>
  );
}
