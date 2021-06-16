import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";

import { func, bool, string, arrayOf } from "prop-types";

import { uploadSong } from "../../../redux/uploader/uploader-actions";
import { selectUploaderState } from "../../../redux/uploader/uploader-selectors";

import CustomModal from "../../Modal";
import { TrackForm } from "../../Forms";

function TrackCreateModal({ isOpen, onClose, classes, ...props }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [btnClicked, setBtnClicked] = useState(false);
  const { isUploadingSong, uploadSongSuccess, uploadSongError } = useSelector(
    selectUploaderState,
  );

  const handleSubmit = (values) => {
    // setBtnClicked(true);
    dispatch(
      uploadSong({
        title: values.title,
        track: values.trackFile,
        thumbnailFile: values.thumbnailFile,
        thumbnailUrl: values.thumbnailUrl,
        genre: values.genre,
      }),
    );
  };

  if (btnClicked && uploadSongSuccess) {
    setBtnClicked(false);
    onClose();
    // eslint-disable-next-line react/prop-types
    // history.push(`/web-player/playlists/${id}`);
  }

  return (
    <CustomModal darkMode title="New Track" isOpen={isOpen} onClose={onClose}>
      <TrackForm formError={uploadSongError} handleSubmit={handleSubmit} />
    </CustomModal>
  );
}

TrackCreateModal.propTypes = {
  isOpen: bool,
  onClose: func.isRequired,
  classes: arrayOf(string),
};

TrackCreateModal.defaultProps = {
  isOpen: false,
  classes: [],
};

export default withRouter(TrackCreateModal);
