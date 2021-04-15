import * as UploaderTypes from "./uploader-types";
import { getFileUrl } from "../../services/cloudinary";

export const uploadSongRequest = () => ({
  type: UploaderTypes.UPLOAD_SONG_REQUEST,
});

export const uploadSongError = (message) => ({
  type: UploaderTypes.UPLOAD_SONG_ERROR,
  payload: message,
});

export const uploadSongSuccess = (songUrl) => ({
  type: UploaderTypes.UPLOAD_SONG_SUCCESS,
  payload: songUrl,
});

export const uploadImageRequest = () => ({
  type: UploaderTypes.UPLOAD_IMAGE_REQUEST,
});

export const uploadImageError = (message) => ({
  type: UploaderTypes.UPLOAD_IMAGE_ERROR,
  payload: message,
});

export const uploadImageSuccess = (imageUrl) => ({
  type: UploaderTypes.UPLOAD_IMAGE_SUCCESS,
  payload: imageUrl,
});

export function uploadSong({
  file,
  name = "",
  genres = [],
  onUploadProgress = (_) => {},
}) {
  return async function uploadSongThunk(dispatch) {
    dispatch(uploadSongRequest());

    getFileUrl({
      file: file,
      onUploadProgress: onUploadProgress,
    })
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log(res.data.url);
        dispatch(uploadSongSuccess(res.data.url));
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        dispatch(uploadSongError(err));
      });
  };
}
