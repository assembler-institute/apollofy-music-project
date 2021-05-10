import * as StatsTypes from "./stats-types";

const StatsInitState = {
  tracks: {
    stats: {
      loading: false,
      loadingError: null,
      loaded: false,
      byId: {},
      ids: [],
    },
    playbacks: {
      loading: false,
      loadingError: null,
      loaded: false,
      byId: {},
      ids: [],
    },
  },
  genres: {
    loading: false,
    loadingError: null,
    loaded: false,
    byId: {},
    ids: [],
  },
};

const StatsReducer = (state = StatsInitState, action) => {
  switch (action.type) {
    case StatsTypes.TRACKS_STATS_REQUEST: {
      return {
        ...state,
        tracks: {
          ...state.tracks,
          stats: {
            ...state.tracks.stats,
            loading: true,
            loadingError: null,
            loaded: false,
          },
        },
      };
    }
    case StatsTypes.TRACKS_STATS_ERROR: {
      return {
        ...state,
        tracks: {
          ...state.tracks,
          stats: {
            ...state.tracks.stats,
            loading: false,
            loadingError: action.payload,
            loaded: false,
          },
        },
      };
    }
    case StatsTypes.TRACKS_STATS_SUCCESS: {
      return {
        ...state,
        tracks: {
          ...state.tracks,
          stats: {
            ...state.tracks.stats,
            loading: false,
            loadingError: null,
            loaded: true,
            byId: { ...state.tracks.stats.byId, ...action.payload.byId },
            ids: [...state.tracks.stats.ids, ...action.payload.ids],
          },
        },
      };
    }
    case StatsTypes.TRACKS_PLAYBACKS_REQUEST: {
      return {
        ...state,
        tracks: {
          ...state.tracks,
          playbacks: {
            ...state.tracks.stats,
            loading: true,
            loadingError: null,
            loaded: false,
          },
        },
      };
    }
    case StatsTypes.TRACKS_PLAYBACKS_ERROR: {
      return {
        ...state,
        tracks: {
          ...state.tracks,
          playbacks: {
            ...state.tracks.stats,
            loading: false,
            loadingError: action.payload,
            loaded: false,
          },
        },
      };
    }
    case StatsTypes.TRACKS_PLAYBACKS_SUCCESS: {
      return {
        ...state,
        tracks: {
          ...state.tracks,
          playbacks: {
            ...state.tracks.stats,
            loading: false,
            loadingError: null,
            loaded: true,
            byId: { ...state.tracks.stats.byId, ...action.payload.byId },
            ids: [...state.tracks.stats.ids, ...action.payload.ids],
          },
        },
      };
    }
    case StatsTypes.TRACK_STATS_REQUEST: {
      return {
        ...state,
      };
    }
    case StatsTypes.TRACK_STATS_ERROR: {
      return {
        ...state,
      };
    }
    case StatsTypes.TRACK_STATS_SUCCESS: {
      return {
        ...state,
      };
    }
    case StatsTypes.GENRES_STATS_REQUEST: {
      return {
        ...state,
      };
    }
    case StatsTypes.GENRES_STATS_ERROR: {
      return {
        ...state,
      };
    }
    case StatsTypes.GENRES_STATS_SUCCESS: {
      return {
        ...state,
      };
    }
    default:
      return { ...state };
  }
};

export default StatsReducer;
