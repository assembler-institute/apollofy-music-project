const { userRouter } = require("./user-routes");
const { trackRouter } = require("./track-routes");
const { playlistRouter } = require("./playlist-route");
const { genreRouter } = require("./genre-routes");
const { statsRouter } = require("./statistics-routes");
const { authRouter } = require("./auth-routes");

module.exports = {
  authRouter: authRouter,
  userRouter: userRouter,
  trackRouter: trackRouter,
  playlistRouter: playlistRouter,
  genreRouter: genreRouter,
  statsRouter: statsRouter,
};
