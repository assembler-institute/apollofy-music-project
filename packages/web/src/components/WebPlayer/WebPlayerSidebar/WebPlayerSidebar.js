import React from "react";

import "./WebPlayerSidebar.scss";

import { Container, Column } from "../../Layout";

import SidebarNav from "./SidebarNav";
import SidebarPlaylists from "./SidebarPlaylists";

function WebPlayerSidebar() {
  return (
    <Container
      bg="dark-dark"
      aria-label="app sidebar"
      width={72}
      roundedBorders
      classes={["bg-opacity-80 border-2 border-primary"]}
    >
      <Column fullWidth>
        <SidebarNav />
        <SidebarPlaylists />
      </Column>
    </Container>
  );
}

export default WebPlayerSidebar;
