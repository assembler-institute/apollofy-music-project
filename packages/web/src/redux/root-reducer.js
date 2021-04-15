import { combineReducers } from "redux";

import authReducer from "./auth/auth-reducer";
import UserReducer from "./user/user-reducer";
import PlaylistReducer from "./playlist/playlist-reducer";
import SearchReducer from "./search/search-reducer";
import TrackReducer from "./track/track-reducer";
import SessionReducer from "./session/session-reducer";
import UploaderReducer from "./uploader/uploader-reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  users: UserReducer,
  tracks: TrackReducer,
  playlists: PlaylistReducer,
  search: SearchReducer,
  session: SessionReducer,
  uploader: UploaderReducer,
});

export default rootReducer;
