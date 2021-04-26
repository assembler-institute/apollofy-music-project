const db = require("../models");
const normalizeDBQuery = require("../utils/normalizeDBQuery");

class PlaylistRepository {
  create(options) {
    return normalizeDBQuery(db.Playlist.create(options));
  }

  update(options) {
    return normalizeDBQuery(
      db.Playlist.updateOne({ _id: options._id }, options),
    );
  }

  find(query) {
    return normalizeDBQuery(db.Playlist.find(query, "-__v"));
  }

  findOne(query) {
    return normalizeDBQuery(db.Playlist.findOne(query, "-__v"));
  }

  findOneAndUpdate(queryFilter, queryData, queryOptions) {
    return normalizeDBQuery(
      db.Playlist.findOneAndUpdate(queryFilter, queryData, queryOptions),
    );
  }

  findById(id) {
    return normalizeDBQuery(db.Playlist.findById(id, "-__v"));
  }
}

module.exports = new PlaylistRepository();
