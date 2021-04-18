import * as TrackTypes from "./track-types";
import { trackTypes } from "./track-types";
import api from "../../api";
import { normalizeTracks } from "../../schema/track-schema";

export const fetchTracksRequest = () => ({
  type: TrackTypes.FETCH_TRACKS_REQUEST,
});

export const fetchTracksError = (message) => ({
  type: TrackTypes.FETCH_TRACKS_ERROR,
  payload: message,
});

export const fetchTracksSuccess = ({
  fetchType = trackTypes.ALL,
  byID,
  ids,
}) => ({
  type: TrackTypes.FETCH_TRACKS_SUCCESS,
  payload: {
    byID: byID,
    ids: ids,
    type: fetchType,
  },
});

export const fetchTrackRequest = () => ({
  type: TrackTypes.FETCH_TRACK_REQUEST,
});

export const fetchTrackError = (message) => ({
  type: TrackTypes.FETCH_TRACK_ERROR,
  payload: message,
});

export const fetchTrackSuccess = (track) => ({
  type: TrackTypes.FETCH_TRACK_SUCCESS,
  payload: track,
});

export const publishTrackRequest = () => ({
  type: TrackTypes.PUBLISH_TRACK_REQUEST,
});

export const publishTrackError = (message) => ({
  type: TrackTypes.PUBLISH_TRACK_ERROR,
  payload: message,
});

export const publishTrackSuccess = (track) => ({
  type: TrackTypes.PUBLISH_TRACK_SUCCESS,
  payload: track,
});

export function fetchTracks({ fetchType = trackTypes.ALL, filters = {} }) {
  switch (fetchType) {
    case trackTypes.ALL:
      return fetchAllTracks(filters);
    case trackTypes.RECOMMENDED:
      return fetchRecommendedTracks();
    case trackTypes.POPULAR:
      return fetchPopularTracks();
    default:
      break;
  }
  return fetchAllTracks(filters);
}

export function fetchAllTracks(filters) {
  return async function fetchTracksThunk(dispatch) {
    dispatch(fetchTracksRequest());

    const res = await api.getTracks(filters);

    if (res.isSuccessful) {
      const normalizedTracks = normalizeTracks(res.data);
      dispatch(
        fetchTracksSuccess({
          byID: normalizedTracks.entities.tracks,
          ids: normalizedTracks.result,
        }),
      );
    } else {
      dispatch(fetchTracksError(res.errorMessage));
    }
  };
}

export function fetchPopularTracks(filters) {
  return async function fetchTracksThunk(dispatch) {
    dispatch(fetchTracksRequest());

    const res = await api.getPopularTracks(filters);

    if (res.isSuccessful) {
      const normalizedTracks = normalizeTracks(res.data);
      dispatch(
        fetchTracksSuccess({
          fetchType: trackTypes.POPULAR,
          byID: normalizedTracks.entities.tracks,
          ids: normalizedTracks.result,
        }),
      );
    } else {
      dispatch(fetchTracksError(res.errorMessage));
    }
  };
}

export function fetchRecommendedTracks(filters) {
  return async function fetchTracksThunk(dispatch) {
    dispatch(fetchTracksRequest());

    const res = await api.getRecommendedTracks(filters);

    if (res.isSuccessful) {
      const normalizedTracks = normalizeTracks(res.data);
      dispatch(
        fetchTracksSuccess({
          fetchType: trackTypes.RECOMMENDED,
          byID: normalizedTracks.entities.tracks,
          ids: normalizedTracks.result,
        }),
      );
    } else {
      dispatch(fetchTracksError(res.errorMessage));
    }
  };
}

export function fetchTrackById(trackID) {
  return async function fetchTrackByIdThunk(dispatch) {
    dispatch(fetchTrackRequest());

    const res = await api.getTrackById(trackID);

    if (res.isSuccessful) {
      dispatch(fetchTrackSuccess(res.data));
    } else {
      dispatch(fetchTrackError(res.errorMessage));
    }
  };
}

export function publishTrack(payload) {
  return async function publishTrackThunk(dispatch) {
    dispatch(publishTrackRequest());

    const res = await api.publishTrack(payload);

    if (res.isSuccessful) {
      dispatch(publishTrackSuccess(res.data));
    } else {
      dispatch(publishTrackError(res.errorMessage));
    }
  };
}
