import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./styles/App.scss";

import * as ROUTES from "./routes";
import * as PAGES from "./pages";

import { onAuthStateChanged } from "./services/auth";
import { syncSignIn, signOut } from "./redux/auth/auth-actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let unsubscribeFromAuth = null;

    unsubscribeFromAuth = onAuthStateChanged((user) => {
      if (user) {
        dispatch(syncSignIn());
      } else {
        dispatch(signOut());
      }
    });

    return () => {
      if (unsubscribeFromAuth) {
        unsubscribeFromAuth();
      }
    };
  }, [dispatch]);

  return (
    <div className="App__container">
      <Switch>
        <Route path={ROUTES.SIGN_UP} component={PAGES.SignUp} />
        <Route path={ROUTES.LOGIN} component={PAGES.Login} />
        <Route path={ROUTES.UPLOAD_SONG} component={PAGES.UploadSong} />
        <Route path={ROUTES.UPLOAD_IMAGE} component={PAGES.UploadImage} />
        <Route path={ROUTES.UPLOAD_PLAYBACK} component={PAGES.UploadPlayback} />
        <Route path={ROUTES.CREATE_PLAYLIST} component={PAGES.CreatePlaylist} />
        <Route
          path={ROUTES.WEB_PLAYER_PLAYLIST}
          component={PAGES.WebPlayerPlaylist}
        />
        <Route
          path={ROUTES.WEB_PLAYER_LIBRARY}
          component={PAGES.WebPlayerLibrary}
        />
        <Route
          path={ROUTES.WEB_PLAYER_SEARCH}
          component={PAGES.WebPlayerSearch}
        />
        <Route
          path={ROUTES.WEB_PLAYER_STATS}
          component={PAGES.WebPlayerStats}
        />
        <Route path={ROUTES.WEB_PLAYER_HOME} component={PAGES.WebPlayerHome} />
        <Route path={ROUTES.RESET_PASSWORD} component={PAGES.ResetPassword} />
        <Route path={ROUTES.HOME} component={PAGES.Home} exact />
      </Switch>
    </div>
  );
}

export default App;
