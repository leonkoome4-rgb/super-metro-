"use client";

import { motion } from "framer-motion";
import { useIsReducedMotion } from "@/lib/use-reduced-motion";
import { viewportOnce } from "@/lib/animations";

type RoutePath = {
  number: string;
  destination: string;
  d: string;
  endX: number;
  endY: number;
  labelX: number;
  labelY: number;
  labelAnchor?: "start" | "middle" | "end";
  dur: number;
  begin: number;
};

const ROUTE_PATHS: RoutePath[] = [
  {
    number: "105",
    destination: "Kikuyu",
    d: "M240,300 C170,290 110,270 50,250",
    endX: 50,
    endY: 250,
    labelX: 48,
    labelY: 228,
    dur: 4.5,
    begin: 0,
  },
  {
    number: "237",
    destination: "Thika / Makongeni",
    d: "M240,300 C265,210 285,115 300,50",
    endX: 300,
    endY: 50,
    labelX: 300,
    labelY: 30,
    dur: 5.5,
    begin: 0.6,
  },
  {
    number: "236",
    destination: "Juja",
    d: "M240,300 C300,240 365,155 405,80",
    endX: 405,
    endY: 80,
    labelX: 412,
    labelY: 58,
    labelAnchor: "end",
    dur: 5,
    begin: 1.2,
  },
  {
    number: "110",
    destination: "Kitengela",
    d: "M240,300 C320,330 380,370 415,410",
    endX: 415,
    endY: 410,
    labelX: 422,
    labelY: 432,
    labelAnchor: "end",
    dur: 6.5,
    begin: 0.3,
  },
  {
    number: "111",
    destination: "Ngong",
    d: "M240,300 C180,360 120,405 75,440",
    endX: 75,
    endY: 440,
    labelX: 70,
    labelY: 462,
    dur: 6,
    begin: 1.8,
  },
  {
    number: "126",
    destination: "Rongai / Kiserian",
    d: "M240,300 C210,410 190,490 180,540",
    endX: 180,
    endY: 540,
    labelX: 180,
    labelY: 562,
    dur: 7,
    begin: 2.4,
  },
];

// Intermediate stages, plotted along their route's curve (computed from each path's
// bezier control points). Malaa and Mfangano Bus Station don't sit on any of the 6
// drawn routes (Malaa is on the Kangundo Road corridor; Mfangano is a CBD boarding
// stage), so they're shown as standalone grey stops rather than invented onto a route.
type StagePoint = {
  name: string;
  x: number;
  y: number;
  labelX: number;
  labelY: number;
  anchor?: "start" | "middle" | "end";
  onRoute: boolean;
};

const STAGE_POINTS: StagePoint[] = [
  { name: "Westlands", x: 179, y: 289, labelX: 179, labelY: 274, anchor: "middle", onRoute: true },
  { name: "Kinoo", x: 104, y: 268, labelX: 104, labelY: 253, anchor: "middle", onRoute: true },
  { name: "Roysambu", x: 295, y: 240, labelX: 306, labelY: 233, anchor: "start", onRoute: true },
  { name: "Kahawa West", x: 338, y: 184, labelX: 349, labelY: 180, anchor: "start", onRoute: true },
  { name: "Juja Farm", x: 385, y: 114, labelX: 396, labelY: 110, anchor: "start", onRoute: true },
  { name: "Makongeni", x: 290, y: 92, labelX: 277, labelY: 100, anchor: "end", onRoute: true },
  { name: "Kabiria", x: 169, y: 365, labelX: 153, labelY: 368, anchor: "end", onRoute: true },
  { name: "Bomas", x: 219, y: 377, labelX: 231, labelY: 380, anchor: "start", onRoute: true },
  { name: "Maasai Lodge", x: 203, y: 443, labelX: 189, labelY: 447, anchor: "end", onRoute: true },
  { name: "Ongata Rongai", x: 187, y: 506, labelX: 173, labelY: 510, anchor: "end", onRoute: true },
  { name: "Mfangano Bus Station", x: 268, y: 278, labelX: 279, labelY: 274, anchor: "start", onRoute: false },
  { name: "Malaa", x: 444, y: 230, labelX: 439, labelY: 224, anchor: "end", onRoute: false },
];

const MINOR_ROADS = [
  "M20,140 L460,180",
  "M10,360 L450,330",
  "M120,20 L160,560",
  "M340,30 L380,560",
  "M40,420 L420,440",
  "M60,480 L300,560",
];

export default function NetworkMap() {
  const reducedMotion = useIsReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-3xl border border-metro-grey-100 bg-metro-grey-50 p-4 shadow-sm"
    >
      <svg viewBox="0 0 480 600" className="h-full w-full" role="img" aria-label="Map of Super Metro's bus routes and stages across Nairobi">
        {MINOR_ROADS.map((d, i) => (
          <path key={i} d={d} stroke="#E5E7EB" strokeWidth={2} fill="none" />
        ))}

        {ROUTE_PATHS.map((route) => (
          <g key={route.number}>
            <path d={route.d} stroke="#D1D5DB" strokeWidth={9} strokeLinecap="round" fill="none" />
            <path
              d={route.d}
              stroke="#F4791F"
              strokeWidth={3.5}
              strokeLinecap="round"
              strokeDasharray="10 14"
              fill="none"
              className="route-flow"
            />
            {!reducedMotion && (
              <circle r={5.5} fill="#1E2A5E" stroke="#F4791F" strokeWidth={2}>
                <animateMotion
                  dur={`${route.dur}s`}
                  begin={`${route.begin}s`}
                  repeatCount="indefinite"
                  path={route.d}
                  rotate="auto"
                />
              </circle>
            )}
          </g>
        ))}

        {STAGE_POINTS.map((stage) => (
          <g key={stage.name}>
            <circle
              cx={stage.x}
              cy={stage.y}
              r={3.5}
              fill={stage.onRoute ? "#F4791F" : "#9CA3AF"}
              stroke="#FFFFFF"
              strokeWidth={1.5}
            />
            <text
              x={stage.labelX}
              y={stage.labelY}
              textAnchor={stage.anchor ?? "middle"}
              className="fill-metro-grey-700 text-[9.5px] font-medium"
            >
              {stage.name}
            </text>
          </g>
        ))}

        {ROUTE_PATHS.map((route) => (
          <g key={`label-${route.number}`}>
            <circle cx={route.endX} cy={route.endY} r={7} fill="#F4791F" stroke="#FFFFFF" strokeWidth={2} />
            <text
              x={route.labelX}
              y={route.labelY}
              textAnchor={route.labelAnchor ?? "middle"}
              className="fill-metro-navy-800 font-heading text-[13px] font-bold"
            >
              {route.destination}
            </text>
            <text
              x={route.labelX}
              y={route.labelY + 16}
              textAnchor={route.labelAnchor ?? "middle"}
              className="fill-metro-orange-600 text-[11px] font-semibold"
            >
              Route {route.number}
            </text>
          </g>
        ))}

        <circle cx={240} cy={300} r={15} fill="#1E2A5E" stroke="#FFFFFF" strokeWidth={3} />
        <text
          x={240}
          y={326}
          textAnchor="middle"
          className="fill-metro-navy-800 font-heading text-[14px] font-bold"
        >
          Nairobi CBD
        </text>
      </svg>

      <style>{`
        .route-flow {
          animation: route-dash-flow 1.4s linear infinite;
        }
        @keyframes route-dash-flow {
          from { stroke-dashoffset: 24; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </motion.div>
  );
}
