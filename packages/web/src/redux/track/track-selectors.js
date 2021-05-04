import { useSelector } from "react-redux";
import { createSelector } from "reselect";

export const selectTracks = (state) => state.tracks.ids;

export const selectTrack = (state, trackID) => state.tracks.byID[trackID];

export const selectTrackState = (state) => state.tracks;

export const trackItemSelector = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useSelector((state) => state.tracks.byID[props.id]);
};

export const tracksSelector = createSelector(
  [selectTrack],
  (tracksIDS) => tracksIDS,
);

export const trackStateSelector = createSelector(
  [selectTrackState],
  (trackState) => trackState,
);
