/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory, withRouter } from "react-router-dom";

import "./WebPlayerHome.scss";

import * as ROUTES from "../../routes";

import {
  WebPlayerFooter,
  WebPlayerLayout,
  WebPlayerMainContainer,
} from "../../components/WebPlayerLayout";

import { selectPlaylistState } from "../../redux/playlist/playlist-selector";
import { authSelector } from "../../redux/auth/auth-selectors";

import { fetchAllPlaylists } from "../../redux/playlist/playlist-actions";

import WebPlayerSidebar from "../../components/WebPlayerSidebar/WebPlayerSidebar";
import WebPlayerMainView from "../../components/WebPlayerMainView/WebPlayerMainView";

import HomeLayout from "../../components/HomeLayout";
import CardPanel from "../../components/CardPanel";
import Card from "../../components/Card";

function WebPlayerHome(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    playlistByID,
    playlistIds,
    playlistsLoading,
    playlistsLoadingError,
    playlistsFetched,
  } = useSelector(selectPlaylistState);

  const { isAuthenticated } = useSelector(authSelector);

  useEffect(() => {
    //if (isAuthenticated)
    //if (!playlistIds.ALL.length) {
    // eslint-disable-next-line no-console

    dispatch(fetchAllPlaylists());
    //}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  /*if (!isAuthenticated) {
    return <Redirect to={ROUTES.HOME} />;
  }*/

  const handleCardClick = (id) => {
    // eslint-disable-next-line no-console
    console.log(`Card id: ${id}`);

    // eslint-disable-next-line react/prop-types
    history.push(`/web-player/playlists/${id}`);
  };

  let playlists = [];
  if (playlistsFetched) {
    playlists = playlistIds.ALL.map((id, index) => {
      return (
        <Card
          key={id}
          id={id}
          title={playlistByID[id].title}
          thumbnail={playlistByID[id].thumbnail}
          subtitle={playlistByID[id].description}
          handleClick={handleCardClick}
        />
      );
    });
  }

  return (
    <WebPlayerLayout>
      <WebPlayerMainContainer>
        <WebPlayerSidebar />
        <WebPlayerMainView>
          <HomeLayout>
            <h1>Homes</h1>
            <br />
            {playlistsLoading && <h4>Playlist Loading</h4>}
            {playlistsLoadingError && <h4>Playlist Loading Error</h4>}
            {playlistsFetched && (
              <CardPanel
                endpoint=""
                subtitle="All playlists created"
                title="All Playlists"
              >
                {playlists}
              </CardPanel>
            )}
          </HomeLayout>
        </WebPlayerMainView>
      </WebPlayerMainContainer>
      <WebPlayerFooter />
    </WebPlayerLayout>
  );
}

export default withRouter(WebPlayerHome);
