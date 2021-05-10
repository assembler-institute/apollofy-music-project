import { useSelector } from "react-redux";

export const selectStatsState = (state) => state.stats;

export const selectTracksStats = (state) => state.stats.tracks.stats;

export const selectTracksPlaybacks = (state) => state.stats.tracks.playbacks;

export const selectGenresStats = (state) => state.stats.genres;

export const trackStatsSelector = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useSelector((state) => state.stats.tracks.stats.byID[props.id]);
};

export const trackPlaybacksSelector = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useSelector((state) => state.stats.tracks.playbacks.byID[props.id]);
};
