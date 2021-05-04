const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const MonthlyPageRequestSchema = Schema({
  metadata: {
    type: {
      date: {
        type: Date,
        default: Date.now,
      },
      page: {
        type: String,
        required: true,
      },
    },
  },
  totalRequests: {
    type: Number,
    default: 0,
  },
  daily: {
    type: Map,
    of: Number,
  },
});

const MonthlyPageRequest = mongoose.model(
  "monthly-page-request",
  MonthlyPageRequestSchema,
);

module.exports = MonthlyPageRequest;
