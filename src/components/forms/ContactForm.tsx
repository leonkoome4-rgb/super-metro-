"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { isValidEmail } from "@/lib/utils";
import { staggerContainer, fadeUp } from "@/lib/animations";
import type { ContactFormValues } from "@/types";
import { Input, Textarea } from "../ui/Field";
import Button from "../ui/Button";
import FormConfirmation from "./FormConfirmation";

const INITIAL_VALUES: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

type Errors = Partial<Record<keyof ContactFormValues, string>>;

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof ContactFormValues>(key: K, value: ContactFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): Errors {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Tell us your name.";
    if (!isValidEmail(values.email)) next.email = "Enter a valid email address.";
    if (!values.message.trim() || values.message.trim().length < 10) {
      next.message = "Share at least a few words of detail.";
    }
    return next;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length === 0) setSubmitted(true);
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-metro-grey-100 bg-white p-6 shadow-xl sm:p-10">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-metro-orange-500" />
      <AnimatePresence mode="wait">
        {submitted ? (
          <FormConfirmation
            title="Message Sent"
            message="Thanks for reaching out — our team will get back to you shortly."
            onReset={() => {
              setSubmitted(false);
              setValues(INITIAL_VALUES);
            }}
          />
        ) : (
          <motion.form
            key="form"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            variants={staggerContainer(0.08)}
            onSubmit={handleSubmit}
            className="grid gap-5 sm:grid-cols-2"
          >
            <motion.div variants={fadeUp}>
              <Input
                id="contact-name"
                label="Your Name"
                value={values.name}
                error={errors.name}
                onChange={(e) => update("name", e.target.value)}
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <Input
                id="contact-email"
                label="Email"
                type="email"
                value={values.email}
                error={errors.email}
                onChange={(e) => update("email", e.target.value)}
              />
            </motion.div>
            <motion.div variants={fadeUp} className="sm:col-span-2">
              <Input
                id="contact-phone"
                label="Phone (optional)"
                type="tel"
                value={values.phone}
                onChange={(e) => update("phone", e.target.value)}
              />
            </motion.div>
            <motion.div variants={fadeUp} className="sm:col-span-2">
              <Textarea
                id="contact-message"
                label="Message"
                value={values.message}
                error={errors.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="How can we help?"
              />
            </motion.div>
            <motion.div variants={fadeUp} className="col-span-full flex justify-end">
              <Button type="submit" variant="primary">
                Send Message
              </Button>
            </motion.div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
