const Router = require("express").Router;

const { trackController } = require("../controllers");

const trackRouter = Router();

trackRouter.post("/tracks", trackController.createTrack);

module.exports = {
  trackRouter: trackRouter,
};
