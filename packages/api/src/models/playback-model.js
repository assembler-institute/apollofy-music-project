const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const PlaybackSchema = Schema(
  {
    latitude: {
      type: Number,
      required: false,
    },
    longitude: {
      type: Number,
      required: false,
    },
    trackId: {
      type: Schema.Types.ObjectId,
      ref: "track",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    agent: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const Playback = mongoose.model("playback", PlaybackSchema);

module.exports = Playback;
