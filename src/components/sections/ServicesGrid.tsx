"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Siren } from "lucide-react";
import { SERVICES } from "@/data/services";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Card from "../ui/Card";
import ServiceCallbackForm from "../forms/ServiceCallbackForm";
import ParcelEstimator from "../forms/ParcelEstimator";

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="What We Offer"
          title="Here are some of our services"
          subtitle="Experience the difference with Super Metro Transport — our commitment to excellence in every mile."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.slug} variants={fadeUp}>
                <Card className="h-full" tilt={!service.interactive}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-metro-orange-500/10 text-metro-orange-600"
                  >
                    <Icon size={24} />
                  </motion.div>
                  <h3 className="mt-5 font-heading text-lg font-bold text-metro-navy-800">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-metro-grey-500">
                    {service.description}
                  </p>
                  {service.interactive === "callback" && <ServiceCallbackForm />}
                  {service.interactive === "estimate" && <ParcelEstimator />}
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <Reveal className="mt-8">
          <Link
            href="#report"
            className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-red-600/20 bg-metro-grey-900 px-6 py-5 transition-colors hover:border-red-600/50"
          >
            <span className="flex items-center gap-3">
              <Siren size={20} className="shrink-0 text-red-400" />
              <span className="text-sm font-semibold text-white">
                Witnessed reckless driving or overcharging?{" "}
                <span className="text-red-400">Report it now →</span>
              </span>
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
