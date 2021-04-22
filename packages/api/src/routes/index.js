const { userRouter } = require("./user-routes");
const { trackRouter } = require("./track-routes");
const { playlistRouter } = require("./playlist-route");

module.exports = {
  userRouter: userRouter,
  trackRouter: trackRouter,
  playlistRouter: playlistRouter,
};
