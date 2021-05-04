import * as TrackTypes from "./track-types";
import { trackTypes } from "./track-types";
import api from "../../api";
import { normalizeTracks } from "../../schema/track-schema";
import { signOutSuccess } from "../auth/auth-actions";

import { getCurrentUserToken } from "../../services/auth";

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

    try {
      const userToken = await getCurrentUserToken();

      if (!userToken) {
        return dispatch(signOutSuccess());
      }

      const res = await api.getTracks({
        Authorization: `Bearer ${userToken}`,
      });

      if (res.errorMessage) {
        return dispatch(fetchTracksError(res.errorMessage));
      }

      const normalizedTracks = normalizeTracks(res.data.data);
      return dispatch(
        fetchTracksSuccess({
          byID: normalizedTracks.entities.tracks,
          ids: normalizedTracks.result,
        }),
      );
    } catch (err) {
      return dispatch(fetchTracksError(err));
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

export function playTrack({ trackId, lat, long, agent }) {
  return async function playTrackThunk(dispatch) {
    try {
      const userToken = await getCurrentUserToken();

      if (!userToken) {
        return dispatch(signOutSuccess());
      }

      api.addTrackPlayback({
        trackID: trackId,
        body: {
          lat: lat,
          long: long,
          agent: agent,
        },
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      return {};
    } catch (err) {
      return {};
    }
  };
}
