import { combineReducers } from "redux";

import authReducer from "./auth/auth-reducer";
import UserReducer from "./user/user-reducer";
import PlaylistReducer from "./playlist/playlist-reducer";
import GenreReducer from "./genre/genre-reducer";
import SearchReducer from "./search/search-reducer";
import TrackReducer from "./track/track-reducer";
import SessionReducer from "./session/session-reducer";
import UploaderReducer from "./uploader/uploader-reducer";
import StatsReducer from "./stats/stats-reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  users: UserReducer,
  stats: StatsReducer,
  tracks: TrackReducer,
  playlists: PlaylistReducer,
  genres: GenreReducer,
  search: SearchReducer,
  session: SessionReducer,
  uploader: UploaderReducer,
});

export default rootReducer;
