import React from "react";

import { Container } from "../../../Layout";

import PlaylistsHeader from "./PlaylistsHeader";

function SidebarPlaylists() {
  return (
    <Container classes={["pr-6 pl-6 pt-6"]}>
      <PlaylistsHeader>playlists</PlaylistsHeader>
    </Container>
  );
}

export default SidebarPlaylists;
