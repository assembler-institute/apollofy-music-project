import { normalize, schema } from "normalizr";
import { track } from "./track-schema";

const owner = new schema.Entity("users");

const playlist = new schema.Entity("playlists", {
  owner: owner,
  tracks: track,
});

export function normalizePlaylists(playlists) {
  return normalize(playlists, [playlist]);
}
