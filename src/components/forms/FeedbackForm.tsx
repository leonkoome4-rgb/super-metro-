"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { FeedbackFormValues } from "@/types";
import { Input, Select, Textarea } from "../ui/Field";
import Button from "../ui/Button";
import FormConfirmation from "./FormConfirmation";

const INITIAL_VALUES: FeedbackFormValues = {
  name: "",
  contact: "",
  category: "Feedback",
  message: "",
};

type Errors = Partial<Record<keyof FeedbackFormValues, string>>;

export default function FeedbackForm() {
  const [values, setValues] = useState<FeedbackFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FeedbackFormValues>(key: K, value: FeedbackFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): Errors {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Tell us your name.";
    if (!values.contact.trim()) next.contact = "Add a phone or email so we can follow up.";
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
            title="Thank You"
            message="Your voice matters — we've received your feedback and will follow up if needed."
            onReset={() => {
              setSubmitted(false);
              setValues(INITIAL_VALUES);
            }}
          />
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="grid gap-5 sm:grid-cols-2"
          >
            <Input
              id="fb-name"
              label="Your Name"
              value={values.name}
              error={errors.name}
              onChange={(e) => update("name", e.target.value)}
            />
            <Input
              id="fb-contact"
              label="Phone or Email"
              value={values.contact}
              error={errors.contact}
              onChange={(e) => update("contact", e.target.value)}
            />
            <Select
              id="fb-category"
              label="Category"
              value={values.category}
              onChange={(e) => update("category", e.target.value as FeedbackFormValues["category"])}
            >
              <option value="Feedback">Feedback</option>
              <option value="Complaint">Complaint</option>
              <option value="Suggestion">Suggestion</option>
            </Select>
            <div className="sm:col-span-2">
              <Textarea
                id="fb-message"
                label="Your Message"
                value={values.message}
                error={errors.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Tell us about your experience..."
              />
            </div>
            <div className="col-span-full flex justify-end">
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
