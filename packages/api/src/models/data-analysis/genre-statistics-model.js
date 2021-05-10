const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const GenreStatisticsSchema = Schema(
  {
    metadata: {
      type: {
        date: {
          type: Date,
          default: Date.now,
        },
        genre: {
          type: Schema.Types.ObjectId,
          ref: "genre",
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

const GenreStatistics = mongoose.model(
  "genre-statistics",
  GenreStatisticsSchema,
);

module.exports = GenreStatistics;
