import React from "react";
import { node } from "prop-types";

import "./WebPlayerLayout.scss";

function WebPlayerMainContainer({ children }) {
  return <div className="WebPlayer__main-container">{children}</div>;
}

WebPlayerMainContainer.propTypes = {
  children: node.isRequired,
};

export default WebPlayerMainContainer;
