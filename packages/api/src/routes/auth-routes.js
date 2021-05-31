const Router = require("express").Router;

const { authMiddleware, geoMiddleware } = require("../middlewares");
const { userController } = require("../controllers");

const authRouter = Router();

authRouter.post(
  "/sign-up",
  authMiddleware,
  geoMiddleware,
  userController.signUp,
);
authRouter.post("/sign-out", authMiddleware, userController.signOut);

module.exports = {
  authRouter: authRouter,
};
