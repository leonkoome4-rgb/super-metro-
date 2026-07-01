"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Heart, Leaf, Bus } from "lucide-react";
import { IMPACT_STATS } from "@/data/stats";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import AnimatedCounter from "../ui/AnimatedCounter";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "Every driver is vetted, trained, and held to strict NTSA compliance standards. Passenger safety is never negotiated.",
  },
  {
    icon: Heart,
    title: "Community Rooted",
    description:
      "Born as a SACCO, Super Metro is a cooperative — owned by the operators who serve Nairobi, not by distant shareholders.",
  },
  {
    icon: Leaf,
    title: "A Greener Nairobi",
    description:
      "Our 100% electric fleet in partnership with BasiGo cuts tailpipe emissions on our busiest corridors every single day.",
  },
  {
    icon: Bus,
    title: "Reliability as Standard",
    description:
      "Timetables you can plan around. Buses that show up. Service that doesn't make you choose between work and getting there.",
  },
];

const PEOPLE_PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1564311049680-67ec2480cc7a?fm=jpg&q=80&w=600&h=750&auto=format&fit=crop",
    alt: "Bus driver silhouette at the wheel",
    caption: "Our Drivers",
    sub: "500+ trained, NTSA-licensed operators",
  },
  {
    src: "https://images.unsplash.com/photo-1765596155276-2b12fe4b714e?fm=jpg&q=80&w=600&h=750&auto=format&fit=crop",
    alt: "Commuters riding a bus",
    caption: "Our Riders",
    sub: "Millions of journeys served since 2013",
  },
  {
    src: "https://images.unsplash.com/photo-1771417128329-ae0514921349?fm=jpg&q=80&w=600&h=750&auto=format&fit=crop",
    alt: "Bus driver's hands on the steering wheel",
    caption: "Behind the Wheel",
    sub: "Discipline and care on every route, every day",
  },
];

export default function AboutPageContent() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-metro-grey-900 pb-20 pt-44">
        <Image
          src="https://images.unsplash.com/photo-1741991110666-88115e724741?fm=jpg&q=80&w=1800&auto=format&fit=crop"
          alt="Nairobi city skyline at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-metro-grey-900 via-metro-grey-900/65 to-metro-grey-900/25" />
        <Container className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-metro-orange-400"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            The story behind
            <span className="block italic text-metro-orange-500">the bus.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-metro-grey-300"
          >
            From a handful of routes in 2013 to Nairobi&apos;s largest
            transport SACCO — this is how Super Metro got here.
          </motion.p>
        </Container>
      </section>

      {/* ─── ORIGIN STORY ─────────────────────────────────────── */}
      <section className="bg-white py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1745438032897-f5b5ad5e2ce0?fm=jpg&q=80&w=1000&auto=format&fit=crop"
                  alt="Person boarding a Kenya bus"
                  width={800}
                  height={640}
                  className="h-[500px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-metro-grey-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 rounded-full bg-metro-orange-500 px-4 py-2 text-xs font-heading font-bold uppercase tracking-wide text-white shadow-lg">
                  Since 2013
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div>
                <SectionHeading
                  eyebrow="Where It Began"
                  title="A SACCO built on one simple belief."
                  align="left"
                  className="mx-0"
                />
                <div className="mt-6 space-y-4 text-base leading-relaxed text-metro-grey-500">
                  <p>
                    Super Metro began as a cooperative SACCO in 2013 — a group of
                    Nairobi transport operators who believed the city deserved
                    better. Better buses. Better crews. A schedule commuters could
                    actually plan their morning around.
                  </p>
                  <p>
                    What started as a handful of routes has grown to 500+ buses
                    operating across every major corridor — from Kikuyu to Thika
                    Road, Ngong to Kitengela, Juja to Rongai.
                  </p>
                  <p>
                    The cooperative structure means Super Metro is owned by the
                    people who operate it. Every fare collected, every route served,
                    every driver trained — it all comes back to a community
                    committed to moving Nairobi forward.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/#booking">
                    <Button variant="primary">Book a Shuttle</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="secondary">Get in Touch</Button>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─── NUMBERS ──────────────────────────────────────────── */}
      <section className="bg-metro-navy-800 py-20">
        <div className="absolute inset-x-0 h-1 bg-metro-orange-500" />
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer(0.1)}
            className="grid grid-cols-2 gap-10 sm:grid-cols-4"
          >
            {IMPACT_STATS.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="text-center">
                <p className="font-heading text-4xl font-extrabold text-white sm:text-5xl">
                  {stat.isYear ? (
                    stat.value
                  ) : (
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  )}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-widest text-metro-grey-300">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ─── PEOPLE ───────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="Who We Are"
            title="The people who keep Nairobi moving"
            subtitle="Super Metro is its drivers, its mechanics, its customer teams — and the 2,200+ people who show up every day to make the route run."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {PEOPLE_PHOTOS.map(({ src, alt, caption, sub }, i) => (
              <Reveal key={src} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl">
                  <Image
                    src={src}
                    alt={alt}
                    width={600}
                    height={750}
                    className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-metro-grey-900/85 via-metro-grey-900/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="font-heading text-lg font-bold text-white">{caption}</p>
                    <p className="mt-1 text-sm text-metro-grey-300">{sub}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── VALUES ───────────────────────────────────────────── */}
      <section className="bg-metro-grey-900 py-24">
        <Container>
          <SectionHeading
            eyebrow="What Drives Us"
            title="Our values, in practice"
            subtitle="Words mean nothing. Here's how our four founding principles show up on every route, every day."
            light
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer(0.1)}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {VALUES.map(({ title, description, icon: Icon }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-metro-orange-500/15 text-metro-orange-400">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 font-heading text-base font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-metro-grey-300">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ─── CINEMATIC BAND ───────────────────────────────────── */}
      <section className="relative h-72 overflow-hidden sm:h-96">
        <Image
          src="https://images.unsplash.com/photo-1764705637705-e5bf49da6a96?fm=jpg&q=80&w=1800&auto=format&fit=crop"
          alt="Bus driving through the city at dawn"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-metro-navy-950/70" />
        <div className="relative flex h-full items-center justify-center px-6 text-center">
          <p className="font-heading text-2xl font-bold italic text-white sm:text-3xl lg:text-4xl">
            &ldquo;Every route we run is a promise kept.&rdquo;
          </p>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="bg-metro-orange-500 py-20">
        <Container>
          <div className="flex flex-col items-center text-center">
            <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
              Ready to ride with us?
            </h2>
            <p className="mt-4 max-w-xl text-base text-orange-100">
              Whether it&apos;s your daily commute, a one-off airport transfer,
              or a private charter — Super Metro has a seat for you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/#booking">
                <Button
                  variant="secondary"
                  className="border-white text-white hover:bg-white hover:text-metro-orange-600"
                >
                  Book Airport Shuttle
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="secondary"
                  className="border-white text-white hover:bg-white hover:text-metro-orange-600"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
