const Router = require("express").Router;

const { authMiddleware } = require("../middlewares");
const { genreController } = require("../controllers");

const genreRouter = Router();

genreRouter.get("/:name", authMiddleware, genreController.fetchGenreByName);
genreRouter.post("/", authMiddleware, genreController.createGenre);
genreRouter.get("/", authMiddleware, genreController.fetchGenres);
//genreRouter.get("/genres/:id", authMiddleware, genreController.fetchGenreById);

module.exports = {
  genreRouter: genreRouter,
};
