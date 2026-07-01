"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "@/types";

export default function GalleryLightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}) {
  const isOpen = index !== null;
  const current = isOpen ? images[index] : null;

  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && index !== null) {
        onNavigate((index + 1) % images.length);
      }
      if (e.key === "ArrowLeft" && index !== null) {
        onNavigate((index - 1 + images.length) % images.length);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, index, images.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-metro-grey-900/90 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            key={current.src}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 rounded-full bg-metro-grey-900/60 p-2 text-white hover:bg-metro-orange-500"
            >
              <X size={18} />
            </button>

            <div className="relative aspect-[4/3] w-full bg-metro-grey-100">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <div className="flex items-center justify-between p-5">
              <p className="font-heading text-base font-semibold text-metro-navy-800">
                {current.caption}
              </p>
              <div className="flex gap-2">
                <button
                  aria-label="Previous image"
                  onClick={() => index !== null && onNavigate((index - 1 + images.length) % images.length)}
                  className="rounded-full border border-metro-grey-100 p-2 text-metro-grey-700 hover:border-metro-orange-500 hover:text-metro-orange-600"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  aria-label="Next image"
                  onClick={() => index !== null && onNavigate((index + 1) % images.length)}
                  className="rounded-full border border-metro-grey-100 p-2 text-metro-grey-700 hover:border-metro-orange-500 hover:text-metro-orange-600"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
