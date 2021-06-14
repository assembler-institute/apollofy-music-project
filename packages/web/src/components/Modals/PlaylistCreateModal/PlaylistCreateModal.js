import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";

import { func, bool, string, arrayOf } from "prop-types";

import { createPlaylist } from "../../../redux/playlist/playlist-actions";
import { selectPlaylistState } from "../../../redux/playlist/playlist-selector";

import CustomModal from "../../Modal";
import { PlaylistForm } from "../../Forms";

function PlaylistCreateModal({ isOpen, onClose, classes, ...props }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [modalOpen, setModalOpen] = useState(false);
  const [btnClicked, setBtnClicked] = useState(false);
  const { playlistCreation, playlistCreationError } = useSelector(
    selectPlaylistState,
  );

  const handleSubmit = (values) => {
    setBtnClicked(true);
    dispatch(
      createPlaylist({
        title: values.title,
        description: values.description,
        type: "Playlist",
        thumbnail: values.thumbnail,
        publicAccessible: false,
      }),
    );
  };

  if (btnClicked && !playlistCreation && !playlistCreationError) {
    // eslint-disable-next-line no-console
    console.log("CREATE PLAYLIST SUCCESS!");
    setBtnClicked(false);
    onClose();
    // eslint-disable-next-line react/prop-types
    // history.push(`/web-player/playlists/${id}`);
  }

  return (
    <CustomModal
      darkMode
      title="New Playlist"
      isOpen={isOpen}
      onClose={onClose}
    >
      <PlaylistForm
        formError={playlistCreationError}
        handleSubmit={handleSubmit}
      />
    </CustomModal>
  );
}

PlaylistCreateModal.propTypes = {
  isOpen: bool,
  onClose: func.isRequired,
  classes: arrayOf(string),
};

PlaylistCreateModal.defaultProps = {
  isOpen: false,
  classes: [],
};

export default withRouter(PlaylistCreateModal);
