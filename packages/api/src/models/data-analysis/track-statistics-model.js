const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const TrackStatisticsSchema = Schema(
  {
    metadata: {
      type: {
        date: {
          type: Date,
          default: Date.now,
          transform: (v) => v.getUTCFullYear(),
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
    playbacks: {
      type: {
        monthly: {
          type: Map,
          of: {
            totalPlaybacks: {
              type: Number,
              default: 0,
            },
            daily: {
              type: Map,
              of: Number,
            },
          },
        },
      },
    },
  },
  {
    timestamps: false,
  },
);

const TrackStatistics = mongoose.model(
  "track-statistics",
  TrackStatisticsSchema,
);

module.exports = TrackStatistics;
