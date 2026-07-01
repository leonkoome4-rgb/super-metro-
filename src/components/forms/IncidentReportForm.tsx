"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Camera, ImagePlus, AlertTriangle, X } from "lucide-react";
import type { IncidentReportValues } from "@/types";
import { INCIDENT_TYPES } from "@/data/incidents";
import { cn } from "@/lib/utils";
import FormConfirmation from "./FormConfirmation";

const INITIAL_VALUES: IncidentReportValues = {
  vehicleReg: "",
  incidentType: INCIDENT_TYPES[0],
  note: "",
};

export default function IncidentReportForm() {
  const [values, setValues] = useState<IncidentReportValues>(INITIAL_VALUES);
  const [error, setError] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  function update<K extends keyof IncidentReportValues>(key: K, value: IncidentReportValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handlePhotoSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setPhoto(reader.result as string);
    reader.readAsDataURL(file);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    (document.activeElement as HTMLElement)?.blur();
    if (!values.vehicleReg.trim()) {
      setError("Add the number plate so we can identify the vehicle.");
      return;
    }
    setError("");
    setSubmitted(true);
  }

  return (
    <div className="rounded-3xl border border-metro-grey-100 bg-white p-6 shadow-sm sm:p-8">
      <AnimatePresence mode="wait">
        {submitted ? (
          <FormConfirmation
            title="Report Received"
            message="Thanks for keeping our roads safe. Our safety team will review this and follow up where needed."
            onReset={() => {
              setSubmitted(false);
              setValues(INITIAL_VALUES);
              setPhoto(null);
            }}
          />
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div className="flex items-center gap-2 text-metro-orange-500">
              <AlertTriangle size={16} />
              <span className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-metro-orange-600">
                Quick Report
              </span>
            </div>

            <div>
              <label htmlFor="ir-vehicle-reg" className="text-sm font-semibold text-metro-navy-800">
                Vehicle Number Plate
              </label>
              <input
                id="ir-vehicle-reg"
                value={values.vehicleReg}
                onChange={(e) => update("vehicleReg", e.target.value.toUpperCase())}
                placeholder="KDA 123A"
                className="mt-2 w-full rounded-lg border-2 border-metro-navy-800 bg-white px-4 py-3 text-center font-mono text-xl font-extrabold uppercase tracking-widest text-metro-navy-900 outline-none placeholder:text-metro-grey-300 focus:border-metro-orange-500 focus:ring-2 focus:ring-metro-orange-500/20"
              />
              {error && (
                <span className="mt-1.5 block text-xs font-medium text-metro-orange-600">
                  {error}
                </span>
              )}
            </div>

            <div>
              <p className="text-sm font-semibold text-metro-navy-800">What&apos;s Wrong?</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {INCIDENT_TYPES.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => update("incidentType", type)}
                    className={cn(
                      "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors",
                      values.incidentType === type
                        ? "border-metro-orange-500 bg-metro-orange-500 text-white"
                        : "border-metro-grey-200 bg-metro-grey-50 text-metro-grey-600 hover:border-metro-orange-400 hover:text-metro-orange-600"
                    )}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="ir-note" className="text-sm font-semibold text-metro-navy-800">
                Quick Note{" "}
                <span className="font-normal text-metro-grey-400">(optional)</span>
              </label>
              <input
                id="ir-note"
                value={values.note}
                onChange={(e) => update("note", e.target.value)}
                placeholder="e.g. Near Globe Roundabout, around 8am"
                className="mt-2 w-full rounded-lg border border-metro-grey-200 bg-metro-grey-50 px-4 py-2.5 text-sm text-metro-navy-800 outline-none placeholder:text-metro-grey-400 focus:border-metro-orange-500 focus:ring-2 focus:ring-metro-orange-500/20"
              />
            </div>

            <div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoSelect}
                className="hidden"
              />
              <input
                ref={cameraInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handlePhotoSelect}
                className="hidden"
              />

              {photo ? (
                <div className="relative inline-block">
                  <img src={photo} alt="Evidence preview" className="h-20 w-20 rounded-lg object-cover" />
                  <button
                    type="button"
                    onClick={() => setPhoto(null)}
                    aria-label="Remove photo"
                    className="absolute -right-2 -top-2 rounded-full bg-metro-grey-700 p-1 text-white"
                  >
                    <X size={12} />
                  </button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => cameraInputRef.current?.click()}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-dashed border-metro-grey-200 py-2.5 text-xs font-semibold text-metro-grey-500 hover:border-metro-orange-400 hover:text-metro-orange-600"
                  >
                    <Camera size={15} />
                    Take Photo
                  </button>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-dashed border-metro-grey-200 py-2.5 text-xs font-semibold text-metro-grey-500 hover:border-metro-orange-400 hover:text-metro-orange-600"
                  >
                    <ImagePlus size={15} />
                    Upload Photo
                  </button>
                </div>
              )}
            </div>

            <motion.button
              type="submit"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="mt-1 flex items-center justify-center gap-2 rounded-full bg-metro-orange-500 py-3.5 font-heading text-sm font-bold uppercase tracking-wide text-white shadow-sm shadow-metro-orange-500/25 hover:bg-metro-orange-600"
            >
              <AlertTriangle size={16} />
              Submit Report
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
