import React from "react";

import "./WebPlayerLayout.scss";

import WebPlayerNowPlaying from "../WebPlayerNowPlaying/WebPlayerNowPlaying";

function WebPlayerFooter() {
  return (
    <div className="WebPlayer__main-footer">
      <WebPlayerNowPlaying />
    </div>
  );
}

export default WebPlayerFooter;
