import { Siren, Phone, Clock3, Lock } from "lucide-react";
import { PHONE_NUMBERS } from "@/data/nav";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import IncidentReportForm from "../forms/IncidentReportForm";

const REASSURANCES = [
  {
    icon: Clock3,
    title: "Reviewed Within 24 Hours",
    description: "Every report reaches our safety team and is followed up promptly.",
  },
  {
    icon: Lock,
    title: "Anonymous Reporting",
    description: "No name, no contact needed — just the number plate.",
  },
];

export default function ReportIncidentSection() {
  return (
    <section id="report" className="bg-metro-navy-950 py-24">
      <Container>
        <span className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-xs font-heading font-bold uppercase tracking-[0.18em] text-red-400">
          <Siren size={13} className="animate-pulse" />
          Safety Alert Line
        </span>
        <SectionHeading
          title="See Bad Driving? Report It."
          subtitle="Reckless driving, overcharging, or an unsafe vehicle? Snap a photo, give us the number plate, and you're done."
          light
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-red-500/25 bg-red-500/5 p-6">
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-red-400" />
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
                    Immediate Danger?
                  </h3>
                </div>
                <p className="mt-3 text-sm text-metro-grey-300">
                  If a vehicle poses an immediate danger, call us directly instead of waiting for
                  a review.
                </p>
                <a
                  href={`tel:${PHONE_NUMBERS[0].replace(/\s+/g, "")}`}
                  className="mt-4 inline-flex items-center gap-2 text-base font-bold text-red-400 hover:text-red-300"
                >
                  <Phone size={18} />
                  {PHONE_NUMBERS[0]}
                </a>
              </div>

              {REASSURANCES.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <item.icon size={20} className="mt-0.5 shrink-0 text-metro-orange-400" />
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-metro-grey-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <IncidentReportForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
