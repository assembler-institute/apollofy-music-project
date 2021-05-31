const Router = require("express").Router;

const { authMiddleware } = require("../middlewares");
const { playlistController } = require("../controllers");

const playlistRouter = Router();

playlistRouter.post("/", authMiddleware, playlistController.createPlaylist);

playlistRouter.put("/", authMiddleware, playlistController.updatePlaylist);

playlistRouter.get("/", authMiddleware, playlistController.fetchPlaylists);

playlistRouter.get(
  "/:id",
  authMiddleware,
  playlistController.fetchPlaylistById,
);

module.exports = {
  playlistRouter: playlistRouter,
};
