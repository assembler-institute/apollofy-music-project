import React from "react";
import { string, bool, func, oneOf } from "prop-types";
import cn from "clsx";

import "./FormInput.scss";

function FormInput({
  id,
  title,
  name,
  type,
  placeholder,
  value,
  onChange,
  darkMode,
  textError,
}) {
  const inputStyle = cn(
    {
      [`border-radius`]: true,
    },
    "FormInput__input",
  );

  const labelStyle = cn(
    {
      [`text-white`]: darkMode,
    },
    "FormInput__label",
  );

  return (
    <div className="FormInput">
      <div className="FormInput__label-wrapper">
        <label className={labelStyle} htmlFor={id}>
          {title}
        </label>
      </div>
      <input
        className={inputStyle}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div className="p-1">
        <p className="text-error text-sm mb-0">{textError}</p>
      </div>
    </div>
  );
}

FormInput.propTypes = {
  id: string.isRequired,
  title: string,
  name: string,
  placeholder: string,
  value: string,
  onChange: func,
  darkMode: bool,
  textError: string,
  type: oneOf([
    "text",
    "password",
    "email",
    "number",
    "url",
    "date",
    "datetime-local",
    "month",
    "week",
    "time",
    "search",
    "tel",
    "checkbox",
    "radio",
  ]).isRequired,
};

FormInput.defaultProps = {
  title: "",
  name: "",
  placeholder: "Enter any text...",
  value: "",
  darkMode: false,
  textError: "",
  onChange: (_) => {},
};

export default FormInput;
