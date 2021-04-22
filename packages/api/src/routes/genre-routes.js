const Router = require("express").Router;

const { authMiddleware } = require("../middlewares");
const { genreController } = require("../controllers");

const genreRouter = Router();

genreRouter.post("/genres", authMiddleware, genreController.createGenre);
genreRouter.get("/genres", authMiddleware, genreController.fetchGenres);
//genreRouter.get("/genres/:id", authMiddleware, genreController.fetchGenreById);
genreRouter.get(
  "/genres/:name",
  authMiddleware,
  genreController.fetchGenreByName,
);

module.exports = {
  genreRouter: genreRouter,
};
