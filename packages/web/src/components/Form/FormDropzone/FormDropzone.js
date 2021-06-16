import React from "react";
import { string, object, func, bool, arrayOf } from "prop-types";
import { useDropzone } from "react-dropzone";
import cn from "clsx";
import "./FormDropzone.scss";

import { fileTypes } from "../../../services/cloudinary";

export { fileTypes };

function FormDropzone({
  id,
  name,
  fileType,
  file,
  error,
  onFileSelected,
  hintText,
  labelTitle,
  hideLabel,
  darkMode,
  classes,
  ...props
}) {
  const { setFieldValue } = props;

  const { getRootProps, getInputProps } = useDropzone({
    accept: fileType === fileTypes.AUDIO ? "audio/*" : "image/*",
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0)
        setFieldValue("trackFile", acceptedFiles[0]);
    },
  });

  const dropZoneStyle = cn(
    {
      [`w-full mt-1 p-4 border-2 rounded-md border-dashed outline-none`]: true,
      [`bg-dark border-dark-light`]: darkMode,
      [`bg-light border-light-light`]: !darkMode,
    },
    ...classes,
  );

  const labelStyle = cn({
    [`text-white`]: darkMode,
    [`font-medium text-base leading-normal`]: true,
  });

  const hintStyle = cn({
    [`text-white`]: darkMode,
    [`text-base leading-normal`]: true,
  });

  return (
    <div className="w-full flex flex-col">
      {!hideLabel && (
        <label className={labelStyle} htmlFor={id}>
          {labelTitle}
        </label>
      )}
      <section id={id} className={dropZoneStyle}>
        <div
          {...getRootProps({ className: "dropzone" })}
          className="w-full flex flex-col items-center p-4"
        >
          <input name={name} {...getInputProps()} />
          {!file && <p className={hintStyle}>{hintText}</p>}
          {file && <p className={hintStyle}>{file.name}</p>}
        </div>
      </section>
    </div>
  );
}

FormDropzone.propTypes = {
  id: string,
  name: string,
  fileType: string.isRequired,
  file: object,
  error: string,
  onFileSelected: func,
  hintText: string,
  labelTitle: string,
  hideLabel: bool,
  darkMode: bool,
  setFieldValue: func,
  classes: arrayOf(string),
};

FormDropzone.defaultProps = {
  id: "fileZone",
  name: "file",
  onFileSelected: (_) => {},
  file: null,
  error: null,
  hintText: "Drag n drop some files here, or click to select files",
  labelTitle: "File Zone",
  hideLabel: false,
  darkMode: false,
  setFieldValue: (_) => {},
  classes: [],
};

export default FormDropzone;
