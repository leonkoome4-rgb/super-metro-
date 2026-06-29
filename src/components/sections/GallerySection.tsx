import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import GalleryGrid from "../gallery/GalleryGrid";

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="Visual Story"
          title="Step Inside Our Visual Story"
          subtitle="A look at our fleet, our stations, and the people who keep Super Metro moving."
        />
        <div className="mt-14">
          <GalleryGrid />
        </div>
      </Container>
    </section>
  );
}
