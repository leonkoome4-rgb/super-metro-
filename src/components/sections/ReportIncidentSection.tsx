import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import IncidentReportForm from "../forms/IncidentReportForm";

export default function ReportIncidentSection() {
  return (
    <section id="report" className="bg-metro-grey-50 py-24">
      <Container className="max-w-2xl">
        <SectionHeading
          eyebrow="Accountability"
          title="Help Us Keep Our Standard High"
          subtitle="Spotted reckless driving, overcharging, or an unsafe vehicle on one of our routes? Give us the number plate — we'll investigate promptly."
        />
        <div className="mt-12">
          <IncidentReportForm />
        </div>
      </Container>
    </section>
  );
}
