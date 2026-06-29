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
          className="object-cover object-[center_30%]"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-metro-grey-900/95 via-metro-grey-900/75 to-metro-grey-900/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-metro-grey-900/90 via-transparent to-metro-grey-900/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 sm:px-8">
        <motion.div
          initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 flex flex-wrap items-center gap-3"
        >
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-heading font-semibold uppercase tracking-[0.18em] text-metro-orange-400">
            Super Metro Transport
          </span>
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2.4, repeat: reducedMotion ? 0 : Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-heading font-semibold uppercase tracking-[0.14em] text-emerald-400"
          >
            <Zap size={13} className="fill-emerald-400" />
            100% Electric Buses, Powered by BasiGo
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="max-w-3xl font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          Welcome to Super Metro
          <span className="block italic text-metro-orange-500">
            Moving beyond boundaries, one ride at a time.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-metro-grey-300"
        >
          Experience the difference with Super Metro Transport. Our commitment
          to excellence in every mile — since 2013.
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

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        className="absolute inset-x-0 bottom-0 h-3 origin-left bg-metro-white"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
        className="absolute inset-x-0 bottom-0 h-3 origin-left translate-y-3 bg-metro-orange-500"
      />
    </section>
  );
}
