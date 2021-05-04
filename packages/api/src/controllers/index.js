const userController = require("./user-controller");
const trackController = require("./track-controller");
const playlistController = require("./playlist-controller");
const genreController = require("./genre-controller");

const trackPlaybackController = require("./track-playback-controller");
module.exports = {
  userController: userController,
  trackController: trackController,
  playlistController: playlistController,
  genreController: genreController,
  trackPlaybackController: trackPlaybackController,
};
