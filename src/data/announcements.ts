export type Announcement = {
  id: string;
  active: boolean;
  message: string;
  linkLabel?: string;
  linkHref?: string;
};

// Set `active: false` to turn the homepage announcement bar off entirely.
// Bump `id` whenever the message changes so previously-dismissed visitors see the new one.
export const ANNOUNCEMENT: Announcement = {
  id: "route-126-rongai-kiserian-2026-03",
  active: true,
  message: "New Route! Nairobi to Rongai to Kiserian (Route 126) is now live.",
  linkLabel: "View Routes",
  linkHref: "/#network",
};
