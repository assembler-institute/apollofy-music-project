import React from "react";
import Particles from "react-particles-js";

import { node } from "prop-types";
import { Container } from "../Layout";

function BasePageLayout({ children }) {
  return (
    <>
      <Particles
        className="fixed"
        width="100vw"
        height="100vh"
        params={{
          particles: {
            number: {
              density: {
                value_area: 800,
                enable: true,
              },
              value: 80,
            },
            links: {
              enable: false,
            },
            move: {
              speed: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 3,
            },
          },
        }}
      />
      <main className="h-full w-full">
        <Container
          width="full"
          height="full"
          classes={["absolute"]} /* justify="center" align="center" */
        >
          {children}
        </Container>
      </main>
    </>
  );
}

BasePageLayout.propTypes = {
  children: node.isRequired,
};

export default BasePageLayout;
