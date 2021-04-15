const { TrackRepo } = require("../repositories");

async function createTrack(req, res, next) {
  const { title, url, thumbnail, duration, genre, authorId } = req.body;

  try {
    if (!title || !authorId) {
      res.status(400).send({
        data: null,
        error: "Missing Fields (title, authorId)",
      });
    }
    const response = await TrackRepo.create({
      title: title,
      url: url ? url : null,
      thumbnail: thumbnail ? thumbnail : null,
      duration: duration ? duration : 0,
      genre: genre ? genre : null,
      authorId: authorId,
    });

    if (response.error) {
      return res.status(400).send({
        data: null,
        error: response.error,
      });
    }

    if (response.data) {
      return res.status(201).send({
        data: "OK",
        error: null,
      });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createTrack: createTrack,
};
