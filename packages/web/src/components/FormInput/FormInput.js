import React from "react";
import { string, bool, func, oneOf } from "prop-types";
import cn from "clsx";

import "./FormInput.scss";

function FormInput({
  id,
  title,
  type,
  placeholder,
  isRequired,
  value,
  onChange,
  textError,
}) {
  const inputClassNames = cn(
    {
      [`border-radius`]: true,
    },
    "FormInput__input",
  );

  return (
    <div className="FormInput">
      <div className="FormInput__label-wrapper">
        <label className="FormInput__label" htmlFor={id}>
          {title}
        </label>
      </div>
      <input
        className={inputClassNames}
        type={type}
        id={id}
        name={id}
        required={isRequired}
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
  placeholder: string,
  isRequired: bool,
  value: string,
  onChange: func,
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
  placeholder: "Enter any text...",
  isRequired: false,
  value: "",
  textError: "",
  onChange: (_) => {},
};

export default FormInput;
