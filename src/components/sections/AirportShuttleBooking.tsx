import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import BookingForm from "../forms/BookingForm";

export default function AirportShuttleBooking() {
  return (
    <section id="booking" className="bg-metro-grey-50 py-24">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="Airport Transfers"
          title="Book Your Airport Shuttle"
          subtitle="Hassle-free airport shuttle services so your journey begins or ends on a stress-free note — reliable pick-up and drop-off in spacious, well-maintained vehicles."
        />
        <div className="mt-12">
          <BookingForm />
        </div>
      </Container>
    </section>
  );
}
