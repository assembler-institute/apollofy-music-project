const { PlaylistRepo, TrackRepo } = require("../repositories");
const { handleDbResponse } = require("../repositories/repo-utils");

async function createPlaylist(req, res, next) {
  const {
    body: { name, description, collaborative, thumbnail, tracks },
    user: { id },
  } = req;

  try {
    if (!name) {
      return res.status(400).send({
        data: null,
        error: "Missing fields (title, authorId)",
      });
    }

    const dbResponse = await PlaylistRepo.create({
      name: name,
      description: description,
      thumbnail: thumbnail ? thumbnail : null,
      collaborative: collaborative ? collaborative : false,
      tracks: tracks ? tracks : [],
      authorId: id,
    });

    handleDbResponse(res, dbResponse);
  } catch (err) {
    next(err);
  }
}

async function updatePlaylist(req, res, next) {
  const {
    body: { _id: id, name, description, collaborative, thumbnail, tracks },
  } = req;

  try {
    let dbResponse = await PlaylistRepo.findById({
      _id: id,
    });
    console.log("FIND RESPONSE");
    console.log(dbResponse.data);

    if (dbResponse.data) {
      if (name) dbResponse.data.name = name;
      if (description) dbResponse.data.description = description;
      if (collaborative) dbResponse.data.collaborative = collaborative;
      if (thumbnail) dbResponse.data.thumbnail = thumbnail;
      if (tracks) {
        dbResponse.data.tracks = tracks;
        dbResponse.data.total_tracks = tracks.length;
      }

      const putResponse = await PlaylistRepo.update(dbResponse.data);
      dbResponse = putResponse;
    }

    console.log("UPDATE RESPONSE");
    console.log(dbResponse.data);

    handleDbResponse(res, dbResponse);
  } catch (err) {
    next(err);
  }
}

async function fetchPlaylistById(req, res, next) {
  const {
    params: { id },
  } = req;

  try {
    const dbResponse = await PlaylistRepo.findById({
      _id: id,
    });
    console.log(dbResponse);
    handleDbResponse(res, dbResponse);
  } catch (err) {
    next(err);
  }
}

async function addFullTracksInfo(playlists) {
  try {
    const newPlaylists = await Promise.all(
      playlists.map(async (p) => {
        if (p.tracks.length > 0) {
          const tracks = await Promise.all(
            p.tracks.map(async (tId) => {
              const res = await TrackRepo.findById(tId);
              return res.data;
            }),
          );
          p.tracks = tracks;
        }
        return p;
      }),
    );
    return newPlaylists;
  } catch (err) {
    return playlists;
  }
}

async function fetchPlaylists(req, res, next) {
  const { params } = req;
  const {
    query: { fullFetch },
  } = req;
  try {
    const dbResponse = await PlaylistRepo.find(params);
    if (fullFetch) {
      dbResponse.data = await addFullTracksInfo(dbResponse.data);
    }

    handleDbResponse(res, dbResponse);
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
