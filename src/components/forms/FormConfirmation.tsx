import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Button from "../ui/Button";

export default function FormConfirmation({
  title,
  message,
  onReset,
  light = false,
}: {
  title: string;
  message: string;
  onReset: () => void;
  light?: boolean;
}) {
  return (
    <motion.div
      key="confirmation"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col items-center py-10 text-center"
    >
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-16 w-16"
      >
        <svg viewBox="0 0 64 64" className="h-16 w-16">
          <motion.circle
            cx={32}
            cy={32}
            r={28}
            fill="none"
            stroke="#F4791F"
            strokeWidth={4}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <motion.path
            d="M20 33 L28 41 L44 23"
            fill="none"
            stroke="#F4791F"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4, delay: 0.45, ease: "easeOut" }}
          />
        </svg>
      </motion.div>
      <motion.h3
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.55 }}
        className={cn(
          "mt-4 font-heading text-2xl font-bold",
          light ? "text-white" : "text-metro-navy-800"
        )}
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.65 }}
        className={cn("mt-2 max-w-sm text-sm", light ? "text-neutral-400" : "text-metro-grey-500")}
      >
        {message}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.75 }}
      >
        <Button
          type="button"
          variant="secondary"
          className={cn("mt-6", light && "border-white/30 text-white hover:bg-white/10")}
          onClick={onReset}
        >
          Submit Another Response
        </Button>
      </motion.div>
    </motion.div>
  );
}
