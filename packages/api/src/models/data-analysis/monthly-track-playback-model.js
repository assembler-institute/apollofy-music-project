const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const MonthlyTrackPlaybackSchema = Schema(
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
    totalPlaybacks: {
      type: Number,
      default: 0,
    },
    daily: {
      type: Map,
      of: Number,
    },
  },
  {
    timestamps: false,
  },
);

const MonthlyTrackPlayback = mongoose.model(
  "monthly-playback",
  MonthlyTrackPlaybackSchema,
);

module.exports = MonthlyTrackPlayback;
