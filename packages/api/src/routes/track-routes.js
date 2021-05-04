const Router = require("express").Router;

const { authMiddleware } = require("../middlewares");
const { trackController, trackPlaybackController } = require("../controllers");

const trackRouter = Router();

trackRouter.post("/tracks", authMiddleware, trackController.createTrack);
trackRouter.get("/tracks", authMiddleware, trackController.fetchTracks);
trackRouter.get("/tracks/:id", authMiddleware, trackController.fetchTrackById);
trackRouter.post(
  "/tracks/:id/playback",
  authMiddleware,
  trackPlaybackController.addPlayback,
);

module.exports = {
  trackRouter: trackRouter,
};
