const Router = require("express").Router;

const { authMiddleware, geoMiddleware } = require("../middlewares");
const { userController } = require("../controllers");

const userRouter = Router();

userRouter.get("/", authMiddleware, userController.fetchUsers);

module.exports = {
  userRouter: userRouter,
};
