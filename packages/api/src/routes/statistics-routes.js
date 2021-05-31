/* eslint-disable no-unused-vars */
const Router = require("express").Router;

const { authMiddleware } = require("../middlewares");
const { trackPlaybackController } = require("../controllers");

const statsRouter = Router();

statsRouter.get(
  "/tracks/playbacks",
  authMiddleware,
  trackPlaybackController.fetchPlaybacks,
);

statsRouter.get("/tracks/", authMiddleware, trackPlaybackController.fetchStats);

module.exports = {
  statsRouter: statsRouter,
};
