import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

export default function AboutStrip() {
  return (
    <section className="bg-metro-grey-50 py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="Built by Nairobians, for Nairobi."
                align="left"
                className="mx-0"
              />
              <p className="mt-5 text-base leading-relaxed text-metro-grey-500">
                Super Metro began in 2013 as a cooperative SACCO — operators who
                believed Nairobi&apos;s commuters deserved better: cleaner buses,
                disciplined crews, a schedule you could actually plan your morning
                around.
              </p>
              <p className="mt-4 text-base leading-relaxed text-metro-grey-500">
                More than a decade later, 500+ buses and 2,200 team members serve
                every major corridor. The founding discipline hasn&apos;t changed.
                The routes just got longer.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-metro-orange-600 hover:text-metro-orange-700"
              >
                Our full story →
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1741991110666-88115e724741?fm=jpg&q=80&w=1200&auto=format&fit=crop"
                alt="Nairobi cityscape — home of Super Metro"
                width={800}
                height={640}
                className="h-[420px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-metro-grey-900/90 via-metro-grey-900/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <span
                  aria-hidden="true"
                  className="block select-none font-heading text-5xl leading-none text-metro-orange-500/50"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-1 font-heading text-lg font-semibold italic leading-relaxed text-white sm:text-xl">
                  Reliable transport isn&apos;t a luxury. For the commuter who
                  wakes at 5 am in Rongai to make it to the CBD on time,
                  it&apos;s everything.
                </blockquote>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-metro-orange-400">
                  — The Super Metro Promise
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
