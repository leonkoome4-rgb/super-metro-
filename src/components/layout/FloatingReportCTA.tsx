"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function FloatingReportCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-6 z-40"
        >
          <Link href="/#report">
            <motion.span
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full bg-metro-navy-800 px-5 py-3.5 font-heading text-sm font-semibold text-white shadow-lg"
            >
              <AlertTriangle size={16} className="text-metro-orange-400" />
              <span className="hidden sm:inline">Report</span>
            </motion.span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
