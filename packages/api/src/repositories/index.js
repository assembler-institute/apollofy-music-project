const UserRepository = require("./user-repository");
const TrackRepository = require("./track-repository");
const PlaylistRepository = require("./playlist-repository");
const PlaybackRepository = require("./playback-repository");
const GenreRepository = require("./genre-repository");
const UserRepository = require("./general/user-repository");
const TrackRepository = require("./general/track-repository");
const PlaylistRepository = require("./general/playlist-repository");
const GenreRepository = require("./general/genre-repository");

const TrackPlaybackRepository = require("./data-analysis/track-playback-repository");

module.exports = {
  UserRepo: UserRepository,
  TrackRepo: TrackRepository,
  PlaylistRepo: PlaylistRepository,
  PlaybackRepo: PlaybackRepository,
  GenreRepo: GenreRepository,
  TrackPlaybackRepo: TrackPlaybackRepository,
};
