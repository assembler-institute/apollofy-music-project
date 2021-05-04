const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const MonthlyGenrePlaybackSchema = Schema({
  metadata: {
    type: {
      date: {
        type: Date,
        default: Date.now,
      },
      genreId: {
        type: String,
        required: true,
      },
      genreName: {
        type: String,
        required: false,
      },
    },
  },
  totalPlaybacks: {
    type: Number,
    default: 0,
  },
  daily: {
    type: Map,
    of: Number,
  },
});

const MonthlyGenrePlayback = mongoose.model(
  "monthly-genre-playback",
  MonthlyGenrePlaybackSchema,
);

module.exports = MonthlyGenrePlayback;
