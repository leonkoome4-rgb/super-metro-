import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function TestimonialCard({ quote, name, role }: (typeof TESTIMONIALS)[number]) {
  return (
    <div className="mx-3 flex w-[340px] shrink-0 flex-col rounded-2xl border border-metro-grey-100 bg-white p-6 shadow-sm">
      <Quote size={26} className="text-metro-orange-500/40" />
      <div className="mt-3 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} className="fill-metro-orange-500 text-metro-orange-500" />
        ))}
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-metro-grey-700">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-metro-navy-600 font-heading text-xs font-bold text-white">
          {initials(name)}
        </span>
        <div>
          <p className="font-heading text-sm font-bold text-metro-navy-800">{name}</p>
          <p className="text-xs text-metro-grey-500">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="overflow-hidden bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="What Nairobi Is Saying"
          title="Trusted by Commuters Across the City"
          subtitle="Real sentiment from Super Metro riders — known for disciplined crews, clean buses, and reliable service."
        />
      </Container>

      <div className="marquee-row mt-14">
        <div className="flex w-max animate-marquee py-2">
          {doubled.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
