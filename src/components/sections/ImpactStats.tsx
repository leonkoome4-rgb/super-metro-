"use client";

import { motion } from "framer-motion";
import { IMPACT_STATS } from "@/data/stats";
import { staggerContainer, scaleIn, viewportOnce } from "@/lib/animations";
import AnimatedCounter from "../ui/AnimatedCounter";
import Container from "../ui/Container";

export default function ImpactStats() {
  return (
    <section className="relative overflow-hidden bg-metro-navy-800 py-16">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-metro-orange-500" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #fff 0px, #fff 2px, transparent 2px, transparent 36px)",
        }}
      />
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="relative grid grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {IMPACT_STATS.map((stat) => (
            <motion.div key={stat.label} variants={scaleIn} className="text-center">
              <p className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
                {stat.isYear ? (
                  stat.value
                ) : (
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                )}
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wide text-metro-grey-300 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
