"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Zap } from "lucide-react";
import Button from "../ui/Button";

import { useMediaQuery } from "@/lib/use-media-query";
import { useIsReducedMotion } from "@/lib/use-reduced-motion";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const canParallax = useMediaQuery("(min-width: 768px)");
  const reducedMotion = useIsReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const y = canParallax && !reducedMotion ? rawY : 0;

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[94vh] items-center overflow-hidden bg-metro-grey-900"
    >
      <motion.div
        style={{ y }}
        initial={{ scale: 1 }}
        animate={reducedMotion ? { scale: 1 } : { scale: 1.12 }}
        transition={{ duration: 22, ease: "linear" }}
        className="absolute inset-0"
      >
        <Image
          src="/gallery/bus-02.jpg"
          alt="Fleet of Super Metro buses"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-metro-grey-900/95 via-metro-grey-900/75 to-metro-grey-900/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-metro-grey-900/90 via-transparent to-metro-grey-900/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 flex flex-wrap items-center gap-3"
        >
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-heading font-semibold uppercase tracking-[0.18em] text-metro-orange-400">
            Super Metro Transport
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-heading font-semibold uppercase tracking-[0.14em] text-white/70">
            <Zap size={13} className="fill-white/70" />
            100% Electric — Powered by BasiGo
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="max-w-4xl font-heading text-5xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl"
        >
          Super Metro
          <span className="mt-2 block font-heading text-3xl font-semibold italic leading-snug text-metro-orange-500 sm:text-4xl lg:text-5xl xl:text-6xl">
            Moving beyond boundaries,
            <br className="hidden sm:block" /> one ride at a time.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="mt-8 max-w-lg text-base leading-relaxed text-metro-grey-300 sm:text-lg"
        >
          Since 2013, Nairobi&apos;s standard for clean, disciplined, and
          reliable public transport — 500+ buses across every major corridor.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link href="#booking">
            <Button variant="primary">Book Airport Shuttle</Button>
          </Link>
          <Link href="#services">
            <Button
              variant="secondary"
              className="border-white text-white hover:bg-white hover:text-metro-grey-900"
            >
              Explore Services
            </Button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
