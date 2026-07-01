"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import type { GalleryImage } from "@/types";

export default function GalleryItem({
  image,
  onClick,
}: {
  image: GalleryImage;
  onClick: () => void;
}) {
  return (
    <motion.button
      variants={fadeUp}
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.3 }}
      className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-metro-grey-100"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center bg-metro-orange-500/60"
      >
        <Eye size={28} className="text-white" />
      </motion.div>
      <span className="absolute bottom-3 left-3 rounded-full bg-metro-grey-900/70 px-3 py-1 text-xs font-medium text-white">
        {image.caption}
      </span>
    </motion.button>
  );
}
