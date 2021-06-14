import { useSelector } from "react-redux";
import { createSelector } from "reselect";

export const selectPlaylists = (state) => state.playlists.ids;
export const selectPlaylistState = (state) => state.playlists;

export const playlistItemSelector = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useSelector((state) => state.playlists.byID[props.id]);
};

export const playlistTrackSelector = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useSelector((state) => state.playlists.trackByID[props.id]);
};

export const playlistsSelector = createSelector(
  [selectPlaylists],
  (ids) => ids,
);

export const playlistStateSelector = createSelector(
  [selectPlaylistState],
  (playlistState) => playlistState,
);
