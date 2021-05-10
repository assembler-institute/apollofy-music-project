import { normalize, schema } from "normalizr";

const trackStatistics = new schema.Entity(
  "trackStatistics",
  {},
  { idAttribute: "_id" },
);

export function normalizeTracksStats(stats) {
  return normalize(stats, [trackStatistics]);
}
