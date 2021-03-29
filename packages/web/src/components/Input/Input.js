import React from "react";
import { oneOf, string, func, arrayOf } from "prop-types";
import cn from "clsx";

import "./Input.scss";

function Input({ type, id, value, onChange, classes, ...props }) {
  const classNames = cn(
    {
      [`border-radius`]: true,
      [`form-input`]: true,
    },
    ...classes,
  );

  return (
    <input
      className={classNames}
      type={type}
      id={id}
      onChange={onChange}
      {...props}
    />
  );
}

Input.propTypes = {
  id: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
  classes: arrayOf(string),
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

Input.defaultProps = {
  classes: [],
};

export default Input;
