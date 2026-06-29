import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import FeedbackForm from "../forms/FeedbackForm";

export default function FeedbackSection() {
  return (
    <section id="feedback" className="bg-metro-grey-50 py-24">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="We're Listening"
          title="Your Voice Matters"
          subtitle="Share your feedback and complaints — help us keep raising the bar."
        />
        <div className="mt-12">
          <FeedbackForm />
        </div>
      </Container>
    </section>
  );
}
