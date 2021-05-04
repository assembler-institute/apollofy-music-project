const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const PageRequestSchema = Schema({
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
  daily: {
    type: Number,
    default: 0,
  },
  hourly: {
    type: Map,
    of: String,
    default: {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
      13: 0,
      14: 0,
      15: 0,
      16: 0,
      17: 0,
      18: 0,
      19: 0,
      20: 0,
      21: 0,
      22: 0,
      23: 0,
    },
  },
});

const PageRequest = mongoose.model("page-request", PageRequestSchema);

module.exports = PageRequest;
