const db = require("../models");
const normalizeDBQuery = require("../utils/normalizeDBQuery");

class GenreRepository {
  create(options) {
    return normalizeDBQuery(db.Genre.create(options));
  }

  find(query) {
    return normalizeDBQuery(db.Genre.find(query, "-__v"));
  }

  findOne(query) {
    return normalizeDBQuery(db.Genre.findOne(query, "-__v"));
  }

  findById(id) {
    return normalizeDBQuery(db.Genre.findById(id, "-__v"));
  }
}

module.exports = new GenreRepository();
