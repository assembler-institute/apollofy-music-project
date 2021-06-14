import React from "react";
import { string, func, bool, arrayOf } from "prop-types";
import { useDropzone } from "react-dropzone";
import cn from "clsx";
import "./Dropzone.scss";

import { fileTypes } from "../../services/cloudinary";

export { fileTypes };

function Dropzone({
  fileType,
  file,
  error,
  onFileSelected,
  darkMode,
  classes,
}) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: fileType === fileTypes.AUDIO ? "audio/*" : "image/*",
    maxFiles: 1,
    onDropAccepted: onFileSelected,
  });

  const dropZoneStyle = cn(
    {
      [`p-4 border-2 rounded-md  border-dashed outline-none`]: true,
      [`bg-dark border-dark-light`]: darkMode,
      [`bg-light border-light-light`]: !darkMode,
    },
    ...classes,
  );

  const fileComponent = <li key={file.path}>{file.path}</li>;

  return (
    <section className={dropZoneStyle}>
      <div
        {...getRootProps({ className: "dropzone" })}
        className="flex flex-col items-center p-4"
      >
        <input {...getInputProps()} />
        <p>Drag n drop some files here, or click to select files</p>
      </div>
    </section>
  );
}

Dropzone.propTypes = {
  fileType: string.isRequired,
  file: string,
  error: string,
  onFileSelected: func,
  darkMode: bool,
  classes: arrayOf(string),
};

Dropzone.defaultProps = {
  onFileSelected: (_) => {},
  file: null,
  error: null,
  darkMode: false,
  classes: [],
};

export default Dropzone;
