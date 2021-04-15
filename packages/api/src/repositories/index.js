const UserRepository = require("./user-repository");
const TrackRepository = require("./track-repository");
const PlaylistRepository = require("./playlist-repository");
const PlaybackRepository = require("./playback-repository");
const GenreRepository = require("./genre-repository");

module.exports = {
  UserRepo: UserRepository,
  TrackRepo: TrackRepository,
  PlaylistRepo: PlaylistRepository,
  PlaybackRepo: PlaybackRepository,
  GenreRepo: GenreRepository,
};
