const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const { isEmail } = require("validator");

const TrackSchema = Schema(
  {
    title: {
      type: String,
      required: [true, "Track title required"],
      trim: true,
    },
    url: {
      type: String,
      validate: {
        validator: (value) => isEmail(value),
        message: (props) => `The url ${props.value} is not valid`,
      },
      required: false,
    },
    thumbnail: {
      type: String,
      trim: true,
      required: false,
    },
    duration: {
      type: Number,
      required: false,
    },
    rating: {
      type: Number,
      required: false,
    },
    color: {
      type: String,
      trim: true,
    },
    genre: {
      type: Schema.Types.ObjectId,
      ref: "genre",
    },
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    playlists: [
      {
        type: Schema.Types.ObjectId,
        ref: "playlist",
      },
    ],
    likedBy: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Track = mongoose.model("track", TrackSchema);

module.exports = Track;
