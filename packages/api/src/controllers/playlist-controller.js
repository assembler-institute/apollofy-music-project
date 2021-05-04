const { PlaylistRepo, TrackRepo } = require("../repositories");
// eslint-disable-next-line no-unused-vars
const { handleDbResponse } = require("../repositories/repo-utils");

async function createPlaylist(req, res, next) {
  const {
    body: { title, type, publicAccessible, tracks },
    user: { id },
  } = req;

  try {
    const dbResponse = await PlaylistRepo.create({
      title: title,
      type: type,
      author: id,
      publicAccessible: publicAccessible,
      tracks: tracks ? tracks : [],
    });

    if (dbResponse.error) {
      res.status(400).send({
        data: null,
        error: dbResponse.error,
      });
    }

    if (dbResponse.data) {
      res.status(201).send({
        data: dbResponse.data,
        error: null,
      });
    }
  } catch (err) {
    next(err);
  }
}

async function updatePlaylist(req, res, next) {
  const {
    body: { _id, title, type, publicAccessible, tracks, followedBy },
    user: { id },
  } = req;

  try {
    const dbResponse = await PlaylistRepo.findOneAndUpdate(
      {
        _id: _id,
      },
      {
        title: title,
        type: type,
        publicAccessible: publicAccessible,
        tracks: tracks,
        followedBy: followedBy,
      },
      {
        new: true,
        select: {
          __v: 0,
        },
      },
    );

    if (dbResponse.error) {
      res.status(400).send({
        data: null,
        error: dbResponse.error,
      });
    }

    if (dbResponse.data) {
      res.status(200).send({
        data: dbResponse.data,
        error: null,
      });
    }

    console.log(dbResponse);
  } catch (err) {
    next(err);
  }
}

async function addFullTracksInfo(playlist) {
  const newTracks = await Promise.all(
    playlist.tracks.map(async (trackId) => {
      const trackResponse = await TrackRepo.findById(trackId);
      if (trackResponse.data) {
        return trackResponse.data;
      }
      return { _id: trackId };
    }),
  );
  playlist.tracks = newTracks;
  return playlist;
}

async function fetchPlaylistById(req, res, next) {
  const {
    params: { id },
    query: { fullFetch },
  } = req;

  try {
    const dbResponse = await PlaylistRepo.findById(id);

    if (dbResponse.error) {
      res.status(400).send({
        data: null,
        error: dbResponse.error,
      });
    }

    if (dbResponse.data) {
      if (fullFetch) {
        dbResponse.data = await addFullTracksInfo(dbResponse.data);
      }
      if (dbResponse.data) {
        res.status(200).send({
          data: dbResponse.data,
          error: null,
        });
      }
    }
  } catch (err) {
    next(err);
  }
}

async function fetchPlaylists(req, res, next) {
  const {
    query: { fullFetch },
  } = req;

  try {
    let dbResponse = await PlaylistRepo.find();

    if (dbResponse.error) {
      res.status(400).send({
        data: null,
        error: dbResponse.error,
      });
    }

    if (dbResponse.data) {
      if (fullFetch) {
        dbResponse.data = await Promise.all(
          dbResponse.data.map(async (p) => {
            const newPlaylist = await addFullTracksInfo(p);
            return newPlaylist;
          }),
        );
      }
      res.status(200).send({
        data: dbResponse.data,
        error: null,
      });
    }
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createPlaylist: createPlaylist,
  updatePlaylist: updatePlaylist,
  fetchPlaylists: fetchPlaylists,
  fetchPlaylistById: fetchPlaylistById,
};
