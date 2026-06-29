"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "@/data/nav";
import { cn } from "@/lib/utils";
import MobileNavDrawer from "./MobileNavDrawer";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-30 transition-colors duration-300",
          scrolled
            ? "bg-white/95 shadow-md backdrop-blur-sm"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
          <Link
            href="/#home"
            className="flex items-center rounded-lg bg-white px-2.5 py-1.5 shadow-sm"
          >
            <Image
              src="/logo.png"
              alt="Super Metro"
              width={394}
              height={89}
              className="h-7 w-auto sm:h-8"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative font-heading text-sm font-semibold tracking-wide transition-colors",
                  scrolled
                    ? "text-metro-grey-900 hover:text-metro-orange-600"
                    : "text-white hover:text-metro-orange-400"
                )}
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-[2px] w-full origin-left scale-x-0 bg-metro-orange-500 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            className={cn(
              "rounded-full p-2 md:hidden",
              scrolled ? "text-metro-grey-900" : "text-white"
            )}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      <MobileNavDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
