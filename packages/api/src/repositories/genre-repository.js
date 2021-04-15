const db = require("../models");
const normalizeDBQuery = require("../utils/normalizeDBQuery");

class GenreRepository {
  create(options) {
    return normalizeDBQuery(db.Genre.create(options));
  }

  findOne(query) {
    return normalizeDBQuery(db.Genre.findOne(query, "-__v"));
  }
}

module.exports = new GenreRepository();
