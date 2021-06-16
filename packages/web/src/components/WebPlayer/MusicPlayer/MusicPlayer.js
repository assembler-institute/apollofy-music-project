import React from "react";

import { Container, Column, Flex } from "../../Layout";

import "./MusicPlayer.scss";

function MusicPlayer() {
  return (
    <Container
      fullSize
      bg="dark"
      padding="4"
      roundedBorders
      aria-label="player controls"
    >
      <Flex align="center" justify="between">
        <Container>
          <h1>Volume Panel</h1>
        </Container>
        <Container>
          <h1>Player Panel</h1>
        </Container>
        <Container>
          <h1>Queue Panel</h1>
        </Container>
      </Flex>
    </Container>
  );
}

export default MusicPlayer;
