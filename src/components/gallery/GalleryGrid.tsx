"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GALLERY_IMAGES } from "@/data/gallery";
import { staggerContainer, viewportOnce } from "@/lib/animations";
import GalleryItem from "./GalleryItem";
import GalleryLightbox from "./GalleryLightbox";

export default function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.08)}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {GALLERY_IMAGES.map((image, i) => (
          <GalleryItem key={image.src} image={image} onClick={() => setActiveIndex(i)} />
        ))}
      </motion.div>

      <GalleryLightbox
        images={GALLERY_IMAGES}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  );
}
