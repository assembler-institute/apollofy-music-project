const userController = require("./user-controller");
const trackController = require("./track-controller");
const playlistController = require("./playlist-controller");
const genreController = require("./genre-controller");

const trackPlaybackController = require("./track-playback-controller");
const genreStatsController = require("./genre-stats-controller");

module.exports = {
  userController: userController,
  trackController: trackController,
  playlistController: playlistController,
  genreController: genreController,
  trackPlaybackController: trackPlaybackController,
  genreStatsController: genreStatsController,
};
