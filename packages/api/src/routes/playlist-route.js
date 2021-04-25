const Router = require("express").Router;

const { authMiddleware } = require("../middlewares");
const { playlistController } = require("../controllers");

const playlistRouter = Router();

playlistRouter.post(
  "/playlists",
  authMiddleware,
  playlistController.createPlaylist,
);

playlistRouter.get("/playlists", playlistController.fetchPlaylists);

playlistRouter.get(
  "/playlists/:id",
  authMiddleware,
  playlistController.fetchPlaylistById,
);

playlistRouter.put("/playlists", playlistController.updatePlaylist);

module.exports = {
  playlistRouter: playlistRouter,
};
