import Image from "next/image";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import { cn } from "@/lib/utils";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const AVATAR_PALETTE = [
  "bg-metro-orange-500",
  "bg-metro-navy-700",
  "bg-metro-orange-600",
  "bg-metro-navy-600",
  "bg-metro-navy-500",
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function avatarBg(name: string) {
  const hash = name.split("").reduce((sum, c) => sum + c.charCodeAt(0), 0);
  return AVATAR_PALETTE[hash % AVATAR_PALETTE.length];
}

function TestimonialCard({ quote, name, role }: (typeof TESTIMONIALS)[number]) {
  return (
    <div className="mx-3 flex w-[340px] shrink-0 flex-col rounded-2xl bg-white p-6 shadow-lg">
      <Quote size={26} className="text-metro-orange-500/40" />
      <p className="mt-3 flex-1 text-sm leading-relaxed text-metro-grey-700">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-3">
        <span
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-heading text-sm font-bold text-white shadow-sm ring-2 ring-white",
            avatarBg(name)
          )}
        >
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
    <section className="relative overflow-hidden bg-metro-grey-900 py-24">
      <Image
        src="https://images.unsplash.com/photo-1703768233926-b4bf1f0d3e13?fm=jpg&q=80&w=1800&auto=format&fit=crop"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover object-center opacity-10"
      />
      <div className="relative z-10">
        <Container>
          <SectionHeading
            eyebrow="What Nairobi Is Saying"
            title="Trusted by Commuters Across the City"
            subtitle="Real sentiment from Super Metro riders — known for disciplined crews, clean buses, and reliable service."
            light
          />
        </Container>

        <div className="marquee-row mt-14">
          <div className="flex w-max animate-marquee py-2">
            {doubled.map((t, i) => (
              <TestimonialCard key={`${t.name}-${i}`} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
