const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const PageRequestSchema = Schema({
  url: {
    type: String,
    required: true,
  },
  httpVerb: {
    type: String,
    required: true,
  },
  totalRequests: {
    type: Number,
    default: 0,
  },
  requests: {
    type: [
      {
        userId: {
          type: Schema.Types.ObjectId,
          ref: "user",
        },
        requestDate: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    default: [],
  },
});

const PageRequest = mongoose.model("page-request", PageRequestSchema);

module.exports = PageRequest;
