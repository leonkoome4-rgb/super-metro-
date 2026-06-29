"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/data/services";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";

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
                <Card className="h-full" tilt>
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
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
