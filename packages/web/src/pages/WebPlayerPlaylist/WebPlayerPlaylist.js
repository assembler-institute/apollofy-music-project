/* eslint-disable react/self-closing-comp */
/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import "./WebPlayerPlaylist.scss";

import * as ROUTES from "../../routes";

import { Container, Column, Row } from "../../components/Layout";

import WebPlayer from "../WebPlayer";
import { TracksTable } from "../../components/Tables";

import {
  playlistItemSelector,
  playlistTrackSelector,
} from "../../redux/playlist/playlist-selector";
import { authSelector } from "../../redux/auth/auth-selectors";

import HomeLayout from "../../components/HomeLayout";

function WebPlayerPlaylist() {
  const dispatch = useDispatch();
  const { id: playlistId } = useParams();
  const playlist = playlistItemSelector({ id: playlistId });

  const tracks = playlist.tracks.map((trackId) => {
    const t = playlistTrackSelector({ id: trackId });
    // eslint-disable-next-line no-console
    console.log(t);
    return t;
  });

  useEffect(() => {
    //if (isAuthenticated)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <WebPlayer>
      <Container>
        <Column fullWidth>
          <h1 className="mb-4 font-bold text-xl">{playlist.title}</h1>
          <TracksTable tracks={tracks} />
        </Column>
      </Container>
    </WebPlayer>
  );
}

export default WebPlayerPlaylist;
