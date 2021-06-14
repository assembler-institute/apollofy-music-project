import React from "react";
import { node } from "prop-types";

import "./PlaylistsHeader.scss";

function PlaylistsHeader({ children }) {
  return <h3 className="PlaylistsHeader">{children}</h3>;
}

PlaylistsHeader.propTypes = {
  children: node.isRequired,
};

export default PlaylistsHeader;
