"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, BatteryCharging, Wifi, Leaf } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/animations";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const FACTS = [
  {
    icon: BatteryCharging,
    title: "Zero-Emission BYD Buses",
    description: "Built in partnership with BasiGo and assembled locally by Kenya Vehicle Manufacturers.",
  },
  {
    icon: Leaf,
    title: "Cleaner Nairobi Commutes",
    description: "Our electric buses cut tailpipe emissions on the Juja, Thika Road and Kikuyu corridors.",
  },
  {
    icon: Wifi,
    title: "WiFi-Enabled Fleet",
    description: "Modern, connected buses across our routes — built for the everyday commuter.",
  },
];

export default function ElectricFleet() {
  return (
    <section className="bg-metro-grey-900 py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/gallery/bus-03.jpg"
                alt="Super Metro management at an electric bus launch event with BasiGo"
                width={1840}
                height={1250}
                className="h-full w-full object-cover"
              />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-heading font-bold uppercase tracking-wide text-white shadow-lg"
              >
                <Zap size={14} className="fill-white" />
                100% Electric
              </motion.div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Sustainability"
              title="Going Electric with BasiGo"
              subtitle="Super Metro is leading Nairobi's shift to clean public transport, rolling out 100% electric buses in partnership with BasiGo on our busiest corridors."
              align="left"
              light
              className="mx-0"
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="mt-10 flex flex-col gap-6"
            >
              {FACTS.map((fact) => {
                const Icon = fact.icon;
                return (
                  <motion.div key={fact.title} variants={fadeUp} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-bold text-white">
                        {fact.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-metro-grey-300">
                        {fact.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
