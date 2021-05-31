const Router = require("express").Router;

const { authMiddleware } = require("../middlewares");
const {
  trackController,
  trackPlaybackController,
  genreStatsController,
} = require("../controllers");

const trackRouter = Router();

trackRouter.post("/", authMiddleware, trackController.createTrack);
trackRouter.get("/", authMiddleware, trackController.fetchTracks);
trackRouter.post(
  "/:id/playback",
  authMiddleware,
  genreStatsController.extractGenres,
  genreStatsController.addGenresStats,
  trackPlaybackController.addPlayback,
);
trackRouter.get("/:id", authMiddleware, trackController.fetchTrackById);

module.exports = {
  trackRouter: trackRouter,
};
