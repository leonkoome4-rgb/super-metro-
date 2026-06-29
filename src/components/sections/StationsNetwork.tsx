"use client";

import { motion } from "framer-motion";
import { MapPin, Route } from "lucide-react";
import { STATIONS } from "@/data/stations";
import { ROUTES } from "@/data/routes";
import { staggerContainer, scaleIn, viewportOnce } from "@/lib/animations";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function StationsNetwork() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Network"
          title="Discover Our Extensive Network"
          subtitle={`Super Metro's ${STATIONS.length}+ stations and signature routes across Nairobi.`}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.08)}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {ROUTES.map((route) => (
            <motion.div
              key={route.number}
              variants={scaleIn}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-3 rounded-xl border border-metro-grey-100 bg-metro-grey-50 p-4"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-metro-orange-500 font-heading text-sm font-bold text-white">
                <Route size={18} />
              </span>
              <div>
                <p className="font-heading text-sm font-bold text-metro-navy-800">
                  Route {route.number}
                </p>
                <p className="text-xs text-metro-grey-500">{route.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-14 text-center text-sm font-medium uppercase tracking-wide text-metro-grey-500">
          Stages Along Our Routes
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.05)}
          className="mt-6 flex flex-wrap justify-center gap-3"
        >
          {STATIONS.map((station) => (
            <motion.span
              key={station}
              variants={scaleIn}
              whileHover={{ scale: 1.06 }}
              className="inline-flex items-center gap-1.5 rounded-full border border-metro-grey-100 bg-metro-grey-50 px-4 py-2 text-sm font-medium text-metro-grey-700 transition-colors hover:border-metro-orange-500 hover:text-metro-orange-600"
            >
              <MapPin size={14} className="text-metro-orange-500" />
              {station}
            </motion.span>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
