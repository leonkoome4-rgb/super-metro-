"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PhoneCall, CheckCircle2 } from "lucide-react";
import { isValidKenyanPhone } from "@/lib/utils";
import { Input } from "../ui/Field";
import Button from "../ui/Button";

export default function ServiceCallbackForm() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) {
      setError("Tell us your name.");
      return;
    }
    if (!isValidKenyanPhone(phone)) {
      setError("Enter a valid phone, e.g. 0722730430.");
      return;
    }
    setError("");
    setSubmitted(true);
  }

  return (
    <div className="mt-4" onClick={(e) => e.stopPropagation()}>
      {!open && (
        <motion.button
          type="button"
          whileHover={{ x: 3 }}
          onClick={() => setOpen(true)}
          className="flex items-center gap-1.5 text-sm font-semibold text-metro-orange-600 hover:text-metro-orange-700"
        >
          <PhoneCall size={14} />
          Request a Callback
        </motion.button>
      )}

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="confirmed"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-2 rounded-lg bg-metro-orange-500/10 p-3"
                >
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-metro-orange-600" />
                  <p className="text-sm text-metro-navy-800">
                    Thanks, {name.split(" ")[0]}! We&apos;ll call {phone} shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-2.5 pt-3"
                >
                  <Input
                    id="cb-name"
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="py-2 text-sm"
                  />
                  <Input
                    id="cb-phone"
                    label="Phone"
                    type="tel"
                    placeholder="0722730430"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="py-2 text-sm"
                  />
                  {error && <span className="text-xs font-medium text-red-600">{error}</span>}
                  <Button type="submit" variant="primary" className="mt-1 w-full justify-center py-2 text-sm">
                    Request Callback
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
