import { normalize, schema } from "normalizr";

const trackPlayback = new schema.Entity(
  "trackPlayback",
  {},
  { idAttribute: "_id" },
);

export function normalizeTracksPlayback(playbacks) {
  return normalize(playbacks, [trackPlayback]);
}
