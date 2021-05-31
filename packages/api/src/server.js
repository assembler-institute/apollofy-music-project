const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const { json } = require("body-parser");
const cors = require("cors");

const { config } = require("./config");
const { errorMiddleware } = require("./middlewares");
const {
  authRouter,
  userRouter,
  trackRouter,
  playlistRouter,
  genreRouter,
  statsRouter,
} = require("./routes");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use(
  cors({
    origin: config.client.url,
  }),
);

app.use("/api", authRouter);
app.use("/api/users", userRouter);
app.use("/api/tracks", trackRouter);
app.use("/api/playlists", playlistRouter);
app.use("/api/genres", genreRouter);
app.use("/api/stats", statsRouter);

app.get("/", (req, res) => {
  res.status(200).send({
    data: "hello-world",
  });
});

app.use(errorMiddleware);

module.exports = {
  app: app,
};
