/* eslint-disable no-console */
/* eslint-disable spaced-comment */
import * as PlaylistType from "./playlist-types";

export const PlaylistInitState = {
  playlistCreation: false,
  playlistCreationError: null,
  playlistUpdate: false,
  playlistUpdateError: null,
  playlistsLoading: false,
  playlistsLoadingError: null,
  playlistsFetched: false,
  playlistLoading: false,
  playlistLoadingError: null,
  playlistFetched: false,
  playlistByID: {},
  trackByID: {},
  playlistIds: {
    ALL: [],
    OWN: [],
    FOLLOWING: [],
    RECOMMENDED: [],
    LISTENED_RECENTLY: [],
    BASED_ON_LISTENED: [],
    POPULAR: [],
  },
};

const PlaylistReducer = (state = PlaylistInitState, action) => {
  switch (action.type) {
    case PlaylistType.CREATE_PLAYLIST_REQUEST: {
      return {
        ...state,
        playlistCreation: true,
        playlistCreationError: null,
      };
    }
    case PlaylistType.CREATE_PLAYLIST_ERROR: {
      return {
        ...state,
        playlistCreation: false,
        playlistCreationError: action.payload,
      };
    }
    case PlaylistType.CREATE_PLAYLIST_SUCCESS: {
      return {
        ...state,
        playlistCreation: false,
        playlistCreationError: null,
      };
    }
    case PlaylistType.UPDATE_PLAYLIST_REQUEST: {
      return {
        ...state,
        playlistUpdate: true,
        playlistUpdateError: null,
      };
    }
    case PlaylistType.UPDATE_PLAYLIST_ERROR: {
      return {
        ...state,
        playlistUpdate: false,
        playlistUpdateError: action.payload,
      };
    }
    case PlaylistType.UPDATE_PLAYLIST_SUCCESS: {
      return {
        ...state,
        playlistUpdate: false,
        playlistUpdateError: null,
      };
    }
    case PlaylistType.FETCH_PLAYLISTS_REQUEST: {
      return {
        ...state,
        playlistsLoading: true,
        playlistsLoadingError: null,
      };
    }
    case PlaylistType.FETCH_PLAYLISTS_ERROR: {
      return {
        ...state,
        playlistsLoading: false,
        playlistsLoadingError: action.payload,
      };
    }
    case PlaylistType.FETCH_PLAYLISTS_SUCCESS: {
      const actionType = action.payload.type;
      const newIds = { ...state.playlistIds };
      newIds[actionType] = [
        ...state.playlistIds[actionType],
        ...action.payload.playlistIds,
      ];

      return {
        ...state,
        playlistsLoading: false,
        playlistsLoadingError: null,
        playlistsFetched: true,
        playlistByID: {
          ...state.playlistByID,
          ...action.payload.playlistByID,
        },
        trackByID: {
          ...state.trackByID,
          ...action.payload.trackByID,
        },
        playlistIds: newIds,
      };
    }
    case PlaylistType.FETCH_PLAYLIST_REQUEST: {
      return {
        ...state,
        playlistLoading: true,
        playlistLoadingError: null,
      };
    }
    case PlaylistType.FETCH_PLAYLIST_ERROR: {
      return {
        ...state,
        playlistLoading: false,
        playlistLoadingError: action.payload,
      };
    }
    case PlaylistType.FETCH_PLAYLIST_SUCCESS: {
      const playlistID = action.payload.id;

      return {
        ...state,
        playlistLoading: false,
        playlistLoadingError: null,
        playlistFetched: true,
        playlistByID: {
          ...state.playlistByID,
          [playlistID]: {
            ...action.payload.data,
          },
        },
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default PlaylistReducer;
