import React from "react";

import "./WebPlayerSidebar.scss";

import SidebarNav from "./SidebarNav";
import SidebarPlaylists from "./SidebarPlaylists";

function WebPlayerSidebar() {
  return (
    <aside className="WebPlayer__sidebar" aria-label="app sidebar">
      <SidebarNav />
      <SidebarPlaylists />
    </aside>
  );
}

export default WebPlayerSidebar;
