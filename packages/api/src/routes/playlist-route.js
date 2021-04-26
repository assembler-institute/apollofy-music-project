const Router = require("express").Router;

const { authMiddleware } = require("../middlewares");
const { playlistController } = require("../controllers");

const playlistRouter = Router();

playlistRouter.post(
  "/playlists",
  authMiddleware,
  playlistController.createPlaylist,
);

playlistRouter.put(
  "/playlists",
  authMiddleware,
  playlistController.updatePlaylist,
);

playlistRouter.get(
  "/playlists",
  authMiddleware,
  playlistController.fetchPlaylists,
);

playlistRouter.get(
  "/playlists/:id",
  authMiddleware,
  playlistController.fetchPlaylistById,
);

module.exports = {
  playlistRouter: playlistRouter,
};
