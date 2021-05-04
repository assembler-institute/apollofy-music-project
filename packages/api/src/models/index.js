// General
const UserModel = require("./general/user-model");
const TrackModel = require("./general/track-model");
const PlaylistModel = require("./general/playlist-model");
const GenreModel = require("./general/genre-model");
// Data Analysis
const DailyPageRequestModel = require("./data-analysis/daily-page-request-model");
const MonthlyPageRequestModel = require("./data-analysis/monthly-page-request-model");

const TrackPlaybackModel = require("./data-analysis/track-playback-model");
const MonthlyTrackPlaybackModel = require("./data-analysis/monthly-track-playback-model");

const DailyGenrePlaybackModel = require("./data-analysis/daily-genre-playback-model");
const MonthlyGenrePlaybackModel = require("./data-analysis/monthly-genre-playback-model");

module.exports = {
  User: UserModel,
  Track: TrackModel,
  Playlist: PlaylistModel,
  Genre: GenreModel,
  DailyPageRequest: DailyPageRequestModel,
  MonthlyPageRequest: MonthlyPageRequestModel,
  TrackPlayback: TrackPlaybackModel,
  MonthlyTrackPlayback: MonthlyTrackPlaybackModel,
  DailyGenrePlayback: DailyGenrePlaybackModel,
  MonthlyGenrePlayback: MonthlyGenrePlaybackModel,
};
