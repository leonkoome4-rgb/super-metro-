import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PHONE_NUMBERS, COMPANY_ADDRESS, COMPANY_EMAIL } from "@/data/nav";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Card from "../ui/Card";
import ContactForm from "../forms/ContactForm";

export default function ContactPageContent() {
  return (
    <section className="bg-metro-grey-900 pb-24 pt-40">
      <Container>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact Us"
          subtitle="Have a question about routes, charter bookings, or a station near you? Reach out — we're happy to help."
          light
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="flex flex-col gap-6">
              <Card className="bg-white/5 border-white/10">
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-metro-orange-400" />
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
                    Phone
                  </h3>
                </div>
                <ul className="mt-4 flex flex-col gap-2">
                  {PHONE_NUMBERS.map((phone) => (
                    <li key={phone}>
                      <a
                        href={`tel:${phone.replace(/\s+/g, "")}`}
                        className="text-sm text-metro-grey-300 hover:text-metro-orange-400"
                      >
                        {phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-metro-orange-400" />
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
                    Email
                  </h3>
                </div>
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="mt-4 block text-sm text-metro-grey-300 hover:text-metro-orange-400"
                >
                  {COMPANY_EMAIL}
                </a>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-metro-orange-400" />
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
                    Address
                  </h3>
                </div>
                <p className="mt-4 text-sm text-metro-grey-300">{COMPANY_ADDRESS}</p>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-metro-orange-400" />
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
                    Office Hours
                  </h3>
                </div>
                <p className="mt-4 text-sm text-metro-grey-300">
                  Monday – Saturday, 6:00 AM – 8:00 PM
                </p>
              </Card>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
