"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ROUTES } from "@/data/routes";
import { PARCEL_SIZES, estimateParcelPrice, formatKES, type ParcelSize } from "@/lib/utils";
import { Select } from "../ui/Field";

export default function ParcelEstimator() {
  const [size, setSize] = useState<ParcelSize>("Small");
  const [routeNumber, setRouteNumber] = useState(ROUTES[0].number);

  const price = estimateParcelPrice(size, routeNumber);

  return (
    <div className="mt-4 rounded-xl bg-metro-grey-50 p-4" onClick={(e) => e.stopPropagation()}>
      <p className="text-xs font-semibold uppercase tracking-wide text-metro-grey-500">
        Estimate Your Delivery
      </p>
      <div className="mt-3 grid grid-cols-2 gap-2.5">
        <Select
          id="parcel-size"
          label="Size"
          value={size}
          onChange={(e) => setSize(e.target.value as ParcelSize)}
          className="py-2 text-sm"
        >
          {PARCEL_SIZES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </Select>
        <Select
          id="parcel-route"
          label="Route"
          value={routeNumber}
          onChange={(e) => setRouteNumber(e.target.value)}
          className="py-2 text-sm"
        >
          {ROUTES.map((r) => (
            <option key={r.number} value={r.number}>
              Route {r.number}
            </option>
          ))}
        </Select>
      </div>
      <motion.p
        key={price}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="mt-3 font-heading text-xl font-bold text-metro-navy-800"
      >
        {formatKES(price)}
      </motion.p>
    </div>
  );
}
