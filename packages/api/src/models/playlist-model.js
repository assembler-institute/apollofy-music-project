const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const { isEmail } = require("validator");

const PlaylistSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Playlist name is required"],
      trim: true,
    },
    description: {
      type: String,
      required: false,
    },
    collaborative: {
      type: Boolean,
      required: true,
    },
    thumbnail: {
      type: String,
      trim: true,
      required: false,
    },
    publicAccessible: {
      type: Boolean,
      required: true,
    },
    numberSongs: {
      type: Number,
    },
    rating: {
      type: Number,
      required: true,
    },
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    tracks: [
      {
        type: Schema.Types.ObjectId,
        ref: "track",
      },
    ],
    followedBy: [
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

const Playlist = mongoose.model("playlist", PlaylistSchema);

module.exports = Playlist;
