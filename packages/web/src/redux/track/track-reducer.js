import * as TrackTypes from "./track-types";

export const TrackInitState = {
  tracksLoading: false,
  tracksLoadingError: null,
  tracksFetched: false,
  trackLoading: false,
  trackLoadingError: null,
  trackFetched: false,
  byID: {},
  ids: {
    ALL: [],
    RECOMMENDED: [],
    POPULAR: [],
  },
};

const TrackReducer = (state = TrackInitState, action) => {
  switch (action.type) {
    case TrackTypes.FETCH_TRACKS_REQUEST: {
      return {
        ...state,
        tracksLoading: true,
        tracksLoadingError: null,
      };
    }
    case TrackTypes.FETCH_TRACKS_ERROR: {
      return {
        ...state,
        tracksLoading: false,
        tracksLoadingError: action.payload,
      };
    }
    case TrackTypes.FETCH_TRACKS_SUCCESS: {
      const fetchType = action.payload.type;
      const newIds = { ...state.ids };
      newIds[fetchType] = [...action.payload.ids];

      return {
        ...state,
        tracksLoading: false,
        tracksFetched: true,
        tracksLoadingError: null,
        byID: {
          ...state.byID,
          ...action.payload.byID,
        },
        ids: newIds,
      };
    }
    case TrackTypes.FETCH_TRACK_REQUEST: {
      return {
        ...state,
        trackLoading: true,
        trackLoadingError: null,
      };
    }
    case TrackTypes.FETCH_TRACK_ERROR: {
      return {
        ...state,
        trackLoading: false,
        trackLoadingError: action.payload,
      };
    }
    case TrackTypes.FETCH_TRACK_SUCCESS: {
      const trackID = action.payload._id;
      return {
        ...state,
        trackLoading: false,
        trackFetched: true,
        trackLoadingError: null,
        byID: {
          ...state.byID,
          [trackID]: action.payload,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default TrackReducer;
