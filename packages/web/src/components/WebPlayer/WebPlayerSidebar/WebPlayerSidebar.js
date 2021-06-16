import React, { useState } from "react";

import "./WebPlayerSidebar.scss";

import { Container, Column, Flex } from "../../Layout";
import Button from "../../Button";

import SidebarItem from "./SidebarItem";
import { AddIcon } from "../../Icons";

import SidebarNav from "./SidebarNav";
import SidebarPlaylists from "./SidebarPlaylists";

import { PlaylistCreateModal, TrackCreateModal } from "../../Modals";

function WebPlayerSidebar() {
  const [trackModalOpen, setTrackModalOpen] = useState(false);
  const [playlistModalOpen, setPlaylistModalOpen] = useState(false);

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
        <Flex
          width="full"
          height="auto"
          direction="col"
          align="center"
          justify="center"
        >
          <hr className="w-full my-2" />
          <SidebarItem
            onClick={() => setTrackModalOpen(true)}
            classes={["p-2"]}
            icon={AddIcon}
          >
            Create Track
          </SidebarItem>
          <SidebarItem
            onClick={() => setPlaylistModalOpen(true)}
            classes={["p-2"]}
            icon={AddIcon}
          >
            Create Playlist
          </SidebarItem>
          <hr className="w-full my-2" />
        </Flex>
        <SidebarPlaylists />
      </Column>
      <TrackCreateModal
        isOpen={trackModalOpen}
        onClose={() => setTrackModalOpen(false)}
      />
      <PlaylistCreateModal
        isOpen={playlistModalOpen}
        onClose={() => setPlaylistModalOpen(false)}
      />
    </Container>
  );
}

export default WebPlayerSidebar;
