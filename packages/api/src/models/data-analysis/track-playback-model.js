const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const TrackPlaybackSchema = Schema(
  {
    metadata: {
      type: {
        date: {
          type: Date,
          default: Date.now,
        },
        track: {
          type: Schema.Types.ObjectId,
          ref: "track",
        },
      },
    },
    playbacks: {
      type: [
        {
          lat: {
            type: Number,
            required: false,
          },
          long: {
            type: Number,
            required: false,
          },
          user: {
            type: Schema.Types.ObjectId,
            ref: "user",
          },
          agent: {
            type: String,
            trim: true,
          },
          date: {
            type: Date,
            default: Date.now,
          },
        },
      ],
      default: [],
    },
  },
  {
    timestamps: false,
  },
);

const TrackPlayback = mongoose.model("track-playback", TrackPlaybackSchema);

module.exports = TrackPlayback;
