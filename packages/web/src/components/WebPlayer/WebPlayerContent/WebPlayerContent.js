import React from "react";
import { node, arrayOf, string } from "prop-types";

import { Container, Column } from "../../Layout";
import { WebPlayerFooter } from "../WebPlayerLayout";
import "./WebPlayerContent.scss";

function WebPlayerContent({ classes, children }) {
  return (
    <Container
      fullSize
      bg="dark-dark"
      roundedBorders
      padding="8"
      classes={["bg-opacity-80 border-2 border-primary", classes]}
    >
      <Column fullWidth>
        <Container fullSize>{children}</Container>
        <WebPlayerFooter shrink={2} grow={0} />
      </Column>
    </Container>
  );
}

WebPlayerContent.propTypes = {
  classes: arrayOf(string),
  children: node.isRequired,
};

WebPlayerContent.defaultProps = {
  classes: [],
};

export default WebPlayerContent;
