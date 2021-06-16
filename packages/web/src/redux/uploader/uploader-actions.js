import * as UploaderTypes from "./uploader-types";
import { getFileUrl, fileTypes } from "../../services/cloudinary";
import api from "../../api";
import { getCurrentUserToken } from "../../services/auth";

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
  title,
  track,
  thumbnailFile,
  thumbnailUrl,
  genre,
}) {
  return async function uploadThunk(dispatch) {
    dispatch(uploadSongRequest());

    try {
      const userToken = await getCurrentUserToken();

      if (!userToken) {
        return dispatch(uploadSongError("User token null!"));
      }

      const urlRes = await getFileUrl({
        file: track,
        fileType: fileTypes.AUDIO,
      });

      if (urlRes.status >= 400) {
        return dispatch(uploadSongError(urlRes.statusText));
      }

      const { url, duration } = urlRes.data;

      let thumbnail = "";
      if (thumbnailFile) {
        const thumbnailRes = await getFileUrl({
          file: thumbnailFile,
          fileType: fileTypes.IMAGE,
        });

        if (thumbnailRes.status >= 400) {
          return dispatch(uploadSongError(thumbnailRes.statusText));
        }
        thumbnail = thumbnailRes.data.url;
      } else if (thumbnailUrl) {
        thumbnail = thumbnailUrl;
      }

      const songRes = await api.createTrack({
        body: {
          title: title,
          url: url,
          duration: duration,
          thumbnail: thumbnail,
          genres: [genre],
        },
      });

      if (songRes.errorMessage) {
        return dispatch(uploadSongError(songRes.errorMessage));
      }

      return dispatch(uploadSongSuccess(url));
    } catch (err) {
      return dispatch(uploadSongError(err.message));
    }
  };
}

export function uploadImage({
  file,
  name = "",
  genre = "",
  onUploadProgress = (_) => {},
}) {
  return async function uploadImageThunk(dispatch) {
    dispatch(uploadImageRequest());

    try {
      const urlRes = await getFileUrl({
        file: file,
        fileType: fileTypes.IMAGE,
        onUploadProgress: onUploadProgress,
      });

      const imageUrl = urlRes.data.url;

      const imgRes = api.createTrack({
        title: name,
        url: imageUrl,
      });

      if (imgRes.errorMessage) {
        return dispatch(uploadImageError(imgRes.errorMessage));
      }

      return dispatch(uploadImageSuccess(imgRes.data));
    } catch (err) {
      return dispatch(uploadImageError(err));
    }
  };
}
