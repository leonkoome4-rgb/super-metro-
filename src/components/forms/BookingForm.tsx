"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { STATIONS } from "@/data/stations";
import { estimateShuttleFare, formatKES, isValidKenyanPhone } from "@/lib/utils";
import type { BookingFormValues } from "@/types";
import { Input, Select } from "../ui/Field";
import Button from "../ui/Button";
import FormConfirmation from "./FormConfirmation";

const LOCATIONS = ["Jomo Kenyatta International Airport (JKIA)", "Wilson Airport", ...STATIONS];

const INITIAL_VALUES: BookingFormValues = {
  from: "Nairobi CBD",
  to: "Jomo Kenyatta International Airport (JKIA)",
  date: "",
  time: "",
  passengers: 1,
  phone: "",
};

type Errors = Partial<Record<keyof BookingFormValues, string>>;

export default function BookingForm() {
  const [values, setValues] = useState<BookingFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof BookingFormValues>(key: K, value: BookingFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): Errors {
    const next: Errors = {};
    if (values.from === values.to) next.to = "Pick-up and drop-off must differ.";
    if (!values.date) next.date = "Select a travel date.";
    else if (new Date(values.date) < new Date(new Date().toDateString())) {
      next.date = "Date cannot be in the past.";
    }
    if (!values.time) next.time = "Select a pick-up time.";
    if (!values.passengers || values.passengers < 1 || values.passengers > 50) {
      next.passengers = "Enter between 1 and 50 passengers.";
    }
    if (!isValidKenyanPhone(values.phone)) {
      next.phone = "Enter a valid phone, e.g. 0722730430.";
    }
    return next;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      setSubmitted(true);
    }
  }

  const total = estimateShuttleFare(values.passengers);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-metro-grey-100 bg-white p-6 shadow-xl sm:p-10">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-metro-orange-500" />
      <AnimatePresence mode="wait">
        {submitted ? (
          <FormConfirmation
            title="Booking Request Received"
            message={`We'll confirm your ${values.from} → ${values.to} shuttle for ${values.date} at ${values.time} via ${values.phone}. Estimated total: ${formatKES(total)}.`}
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
            <Select
              id="from"
              label="From"
              value={values.from}
              error={errors.from}
              onChange={(e) => update("from", e.target.value)}
            >
              {LOCATIONS.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </Select>

            <Select
              id="to"
              label="To"
              value={values.to}
              error={errors.to}
              onChange={(e) => update("to", e.target.value)}
            >
              {LOCATIONS.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </Select>

            <Input
              id="date"
              label="Date"
              type="date"
              value={values.date}
              error={errors.date}
              onChange={(e) => update("date", e.target.value)}
            />

            <Input
              id="time"
              label="Time"
              type="time"
              value={values.time}
              error={errors.time}
              onChange={(e) => update("time", e.target.value)}
            />

            <Input
              id="passengers"
              label="Passengers"
              type="number"
              min={1}
              max={50}
              value={values.passengers}
              error={errors.passengers}
              onChange={(e) => update("passengers", Number(e.target.value))}
            />

            <Input
              id="phone"
              label="Phone"
              type="tel"
              placeholder="0722730430"
              value={values.phone}
              error={errors.phone}
              onChange={(e) => update("phone", e.target.value)}
            />

            <div className="col-span-full mt-2 flex flex-col items-start justify-between gap-4 rounded-xl bg-metro-grey-50 p-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs uppercase tracking-wide text-metro-grey-500">
                  Estimated Total
                </p>
                <p className="font-heading text-2xl font-bold text-metro-navy-800">
                  {formatKES(total)}
                </p>
              </div>
              <Button type="submit" variant="primary">
                Book Airport Shuttle
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
