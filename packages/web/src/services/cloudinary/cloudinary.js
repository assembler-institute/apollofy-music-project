import axios from "axios";

export const getFileUrl = ({ file, onUploadProgress }) => {
  const unsignedUploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
  const unsignedCloudName = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;

  const url = `https://api.cloudinary.com/v1_1/${unsignedCloudName}/upload`;

  const fd = new FormData();
  fd.append("upload_preset", unsignedUploadPreset);
  fd.append("file", file);
  fd.append("resource_type", "video");
  fd.append("public_id", file.name);
  fd.append("tags", "browser_upload"); // Optional - add tag for image admin in Cloudinary

  const config = {
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": "multipart/form-data",
    },
    // eslint-disable-next-line func-names
    onUploadProgress: onUploadProgress,
  };

  return axios.post(url, fd, config);
};
