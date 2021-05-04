const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const GenrePlaybackSchema = Schema(
  {
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
    daily: {
      type: Number,
      default: 0,
    },
    hourly: {
      type: Map,
      of: Number,
    },
  },
  {
    timestamps: false,
  },
);

const GenrePlayback = mongoose.model("genre-playback", GenrePlaybackSchema);

module.exports = GenrePlayback;
