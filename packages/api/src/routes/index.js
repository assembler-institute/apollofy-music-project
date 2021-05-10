const { userRouter } = require("./user-routes");
const { trackRouter } = require("./track-routes");
const { playlistRouter } = require("./playlist-route");
const { genreRouter } = require("./genre-routes");
const { statsRouter } = require("./statistics-routes");

module.exports = {
  userRouter: userRouter,
  trackRouter: trackRouter,
  playlistRouter: playlistRouter,
  genreRouter: genreRouter,
  statsRouter: statsRouter,
};
