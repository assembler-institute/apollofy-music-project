import React from "react";
import { node } from "prop-types";

import "./WebPlayerMainView.scss";

function WebPlayerMainView({ children }) {
  return <main className="WebPlayer__main-view">{children}</main>;
}

WebPlayerMainView.propTypes = {
  children: node.isRequired,
};

export default WebPlayerMainView;
