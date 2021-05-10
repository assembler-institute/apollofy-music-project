// General
const UserModel = require("./general/user-model");
const TrackModel = require("./general/track-model");
const PlaylistModel = require("./general/playlist-model");
const GenreModel = require("./general/genre-model");
// Data Analysis
const PageRequestModel = require("./data-analysis/page-request-model");
const MonthlyPageRequestModel = require("./data-analysis/monthly-page-request-model");

const TrackPlaybackModel = require("./data-analysis/track-playback-model");
const TrackStatisticsModel = require("./data-analysis/track-statistics-model");

const GenreStatisticsModel = require("./data-analysis/genre-statistics-model");

module.exports = {
  User: UserModel,
  Track: TrackModel,
  Playlist: PlaylistModel,
  Genre: GenreModel,
  PageRequestModel: PageRequestModel,
  MonthlyPageRequest: MonthlyPageRequestModel,
  TrackPlayback: TrackPlaybackModel,
  TrackStatistics: TrackStatisticsModel,
  GenreStatistics: GenreStatisticsModel,
};
