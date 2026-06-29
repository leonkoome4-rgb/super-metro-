import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import PartnersMarquee from "../partners/PartnersMarquee";

export default function PartnersSection() {
  return (
    <section id="partners" className="bg-metro-grey-50 py-24">
      <Container>
        <SectionHeading
          eyebrow="Strategic Alliances"
          title="Leading the way through strategic alliances"
          subtitle="At Super Metro, our unwavering commitment to excellence shines through collaboration with industry leaders. These partnerships, steeped in expertise and innovation, elevate our services and set new industry standards for customer satisfaction."
        />
      </Container>

      <div className="mt-14">
        <p className="mb-6 text-center font-heading text-sm font-semibold uppercase tracking-[0.18em] text-metro-grey-500">
          We Work With The Most Reputable Underwriters
        </p>
        <PartnersMarquee />
      </div>
    </section>
  );
}
