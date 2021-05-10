import * as StatsTypes from "./stats-types";
import api from "../../api";

import { normalizeTracksPlayback } from "../../schema/track-playback-schema";
import { normalizeTracksStats } from "../../schema/track-statistics-schema";

export const tracksPlaybacksRequest = () => ({
  type: StatsTypes.TRACKS_PLAYBACKS_REQUEST,
});

export const tracksPlaybacksError = (message) => ({
  type: StatsTypes.TRACKS_PLAYBACKS_ERROR,
  payload: message,
});

export const tracksPlaybacksSuccess = ({ byId, ids }) => ({
  type: StatsTypes.TRACKS_PLAYBACKS_SUCCESS,
  payload: {
    byId: byId,
    ids: ids,
  },
});

export const tracksStatsRequest = () => ({
  type: StatsTypes.TRACK_STATS_REQUEST,
});

export const tracksStatsError = (message) => ({
  type: StatsTypes.TRACKS_STATS_ERROR,
  payload: message,
});

export const tracksStatsSuccess = ({ byId, ids }) => ({
  type: StatsTypes.TRACKS_STATS_SUCCESS,
  payload: {
    byId: byId,
    ids: ids,
  },
});

export function fetchTracksStats() {
  return async function fetchTracksStatsThunk(dispatch) {
    dispatch(tracksStatsRequest());

    try {
      const statsResponse = await api.getTracksStats();

      if (statsResponse.errorMessage) {
        return dispatch(tracksStatsError(statsResponse.errorMessage));
      }

      // eslint-disable-next-line no-console
      console.log(statsResponse.data);
      const normalizedData = normalizeTracksStats(statsResponse.data.data);

      // eslint-disable-next-line no-console
      console.log(normalizedData);
      return dispatch(
        tracksStatsSuccess({
          byId: normalizedData.entities.trackStatistics,
          ids: normalizedData.result,
        }),
      );
    } catch (err) {
      return dispatch(tracksStatsError(err));
    }
  };
}

export function fetchTracksPlaybacks() {
  return async function fetchTracksPlaybacksThunk(dispatch) {
    dispatch(tracksPlaybacksRequest());

    try {
      const statsResponse = await api.getTracksPlaybacks();

      if (statsResponse.errorMessage) {
        return dispatch(tracksPlaybacksError(statsResponse.errorMessage));
      }

      const normalizedData = normalizeTracksPlayback(statsResponse.data.data);

      return dispatch(
        tracksPlaybacksSuccess({
          byId: normalizedData.entities.trackPlayback,
          ids: normalizedData.result,
        }),
      );
    } catch (err) {
      return dispatch(tracksPlaybacksError(err));
    }
  };
}
