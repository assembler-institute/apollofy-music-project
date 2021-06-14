/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";

import "./WebPlayerHome.scss";

import { Container, Column, Row } from "../../components/Layout";

import WebPlayer from "../WebPlayer";

import * as ROUTES from "../../routes";

import { selectPlaylistState } from "../../redux/playlist/playlist-selector";
import { authSelector } from "../../redux/auth/auth-selectors";

import { fetchAllPlaylists } from "../../redux/playlist/playlist-actions";

import CardPanel from "../../components/CardPanel";
import Card from "../../components/Card";

import { PlaylistCreateModal } from "../../components/Modals";

function WebPlayerHome(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false);
  const {
    byID,
    ids,
    playlistsLoading,
    playlistsLoadingError,
    playlistsFetched,
  } = useSelector(selectPlaylistState);

  const { isAuthenticated } = useSelector(authSelector);

  useEffect(() => {
    //if (isAuthenticated)
    if (!ids.ALL.length) {
      dispatch(fetchAllPlaylists());
    }
  }, [dispatch, ids.ALL]);

  /*if (!isAuthenticated) {
    return <Redirect to={ROUTES.HOME} />;
  }*/

  const handleCardClick = (id) => {
    // eslint-disable-next-line react/prop-types
    history.push(`/web-player/playlists/${id}`);
  };

  let playlists = [];
  if (playlistsFetched) {
    playlists = ids.ALL.map((id, index) => {
      return (
        <Card
          key={id}
          id={id}
          title={byID[id].title}
          thumbnail={byID[id].thumbnail}
          subtitle={byID[id].description}
          handleClick={handleCardClick}
        />
      );
    });
  }

  return (
    <WebPlayer>
      <Column>
        <h1>Home</h1>
        <br />
        <button type="button" onClick={() => setModalOpen(true)}>
          Open Modal
        </button>
        <PlaylistCreateModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />

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
      </Column>
    </WebPlayer>
  );
}

export default withRouter(WebPlayerHome);
