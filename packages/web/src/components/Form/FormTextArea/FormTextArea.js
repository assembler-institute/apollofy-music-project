import React from "react";
import { string, bool, func } from "prop-types";
import cn from "clsx";

import "./FormTextArea.scss";

function FormTextArea({
  id,
  darkMode,
  title,
  name,
  placeholder,
  value,
  onChange,
  textError,
}) {
  const inputStyle = cn(
    {
      [`border-radius`]: true,
    },
    "FormTextArea__input",
  );

  const labelStyle = cn(
    {
      [`text-white`]: darkMode,
    },
    "FormTextArea__label",
  );

  return (
    <div className="FormTextArea">
      <div className="FormTextArea__label-wrapper">
        <label className={labelStyle} htmlFor={id}>
          {title}
        </label>
      </div>
      <textarea
        className={inputStyle}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={3}
        draggable={false}
      />
      <div className="p-1">
        <p className="text-error text-sm mb-0">{textError}</p>
      </div>
    </div>
  );
}

FormTextArea.propTypes = {
  id: string.isRequired,
  title: string,
  name: string,
  placeholder: string,
  value: string,
  onChange: func,
  darkMode: bool,
  textError: string,
};

FormTextArea.defaultProps = {
  title: "",
  name: "",
  placeholder: "Enter any text...",
  value: "",
  darkMode: false,
  textError: "",
  onChange: (_) => {},
};

export default FormTextArea;
