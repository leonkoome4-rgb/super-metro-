"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Megaphone, X, ArrowRight, Heart } from "lucide-react";
import { NAV_LINKS } from "@/data/nav";
import { ANNOUNCEMENT } from "@/data/announcements";
import { cn } from "@/lib/utils";
import { useIsReducedMotion } from "@/lib/use-reduced-motion";
import MobileNavDrawer from "./MobileNavDrawer";

const DISMISSED_KEY = "super-metro-announcement-dismissed";
const LIKED_KEY = "super-metro-announcement-liked";

function subscribeToStorage(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function wasDismissedInStorage() {
  return localStorage.getItem(DISMISSED_KEY) === ANNOUNCEMENT.id;
}

function wasLikedInStorage() {
  return localStorage.getItem(LIKED_KEY) === ANNOUNCEMENT.id;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dismissedThisSession, setDismissedThisSession] = useState(false);
  const [likedThisSession, setLikedThisSession] = useState(false);
  const [showBurst, setShowBurst] = useState(false);
  const dismissedInStorage = useSyncExternalStore(
    subscribeToStorage,
    wasDismissedInStorage,
    () => false
  );
  const likedInStorage = useSyncExternalStore(subscribeToStorage, wasLikedInStorage, () => false);
  const pathname = usePathname();
  const reducedMotion = useIsReducedMotion();

  const announcementDismissed = dismissedInStorage || dismissedThisSession;
  const showAnnouncement = ANNOUNCEMENT.active && pathname === "/" && !announcementDismissed;
  const liked = likedInStorage || likedThisSession;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function dismissAnnouncement() {
    localStorage.setItem(DISMISSED_KEY, ANNOUNCEMENT.id);
    setDismissedThisSession(true);
  }

  function toggleLike() {
    if (liked) {
      localStorage.removeItem(LIKED_KEY);
      setLikedThisSession(false);
      return;
    }
    localStorage.setItem(LIKED_KEY, ANNOUNCEMENT.id);
    setLikedThisSession(true);
    setShowBurst(true);
    window.setTimeout(() => setShowBurst(false), 700);
  }

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
        <AnimatePresence initial={false}>
          {showAnnouncement && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-40 overflow-hidden bg-metro-navy-900"
            >
              <motion.div
                initial={{ y: -16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  animate={
                    reducedMotion
                      ? {}
                      : { boxShadow: ["0 0 0 0 rgba(244,121,31,0)", "0 0 0 6px rgba(244,121,31,0.25)", "0 0 0 0 rgba(244,121,31,0)"] }
                  }
                  transition={{ duration: 1.4, repeat: reducedMotion ? 0 : 2, repeatDelay: 0.3, ease: "easeOut" }}
                  className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-6 py-2 text-center sm:px-8"
                >
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-metro-orange-500 px-3 py-1 text-[10px] font-heading font-bold italic uppercase tracking-wide text-white">
                    <motion.span
                      animate={reducedMotion ? { opacity: 1 } : { opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.6, repeat: reducedMotion ? 0 : Infinity, ease: "easeInOut" }}
                      className="h-1.5 w-1.5 rounded-full bg-white"
                    />
                    <Megaphone size={11} />
                    Breaking News
                  </span>
                  <p className="text-xs font-medium text-metro-grey-100 sm:text-sm">
                    {ANNOUNCEMENT.message}
                  </p>
                  {ANNOUNCEMENT.linkHref && (
                    <Link
                      href={ANNOUNCEMENT.linkHref}
                      className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-metro-orange-400 hover:text-metro-orange-300 sm:text-sm"
                    >
                      {ANNOUNCEMENT.linkLabel}
                      <ArrowRight size={13} />
                    </Link>
                  )}

                  <div className="relative inline-flex shrink-0 items-center">
                    <motion.button
                      type="button"
                      onClick={toggleLike}
                      whileTap={{ scale: 0.8 }}
                      animate={liked && !reducedMotion ? { scale: [1, 1.35, 1] } : { scale: 1 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      aria-label={liked ? "Unlike this announcement" : "Like this announcement"}
                      aria-pressed={liked}
                      className="rounded-full p-1 text-metro-grey-400 hover:bg-white/10 hover:text-metro-orange-400"
                    >
                      <Heart
                        size={14}
                        className={cn(liked && "fill-metro-orange-500 text-metro-orange-500")}
                      />
                    </motion.button>
                    <AnimatePresence>
                      {showBurst && (
                        <motion.span
                          initial={{ opacity: 1, y: 0, scale: 0.6 }}
                          animate={{ opacity: 0, y: -18, scale: 1.1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                          className="pointer-events-none absolute -top-1 left-1/2 -translate-x-1/2 text-metro-orange-400"
                        >
                          <Heart size={12} className="fill-metro-orange-400" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    type="button"
                    onClick={dismissAnnouncement}
                    aria-label="Dismiss announcement"
                    className="shrink-0 rounded-full p-1 text-metro-grey-400 hover:bg-white/10 hover:text-white"
                  >
                    <X size={14} />
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
