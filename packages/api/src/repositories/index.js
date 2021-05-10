const UserRepository = require("./general/user-repository");
const TrackRepository = require("./general/track-repository");
const PlaylistRepository = require("./general/playlist-repository");
const GenreRepository = require("./general/genre-repository");

const TrackPlaybackRepository = require("./data-analysis/track-playback-repository");
const GenreStatsRepo = require("./data-analysis/genre-stats-repository");

module.exports = {
  UserRepo: UserRepository,
  TrackRepo: TrackRepository,
  PlaylistRepo: PlaylistRepository,
  GenreRepo: GenreRepository,
  TrackPlaybackRepo: TrackPlaybackRepository,
  GenreStatsRepo: GenreStatsRepo,
};
