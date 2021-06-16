import React from "react";
import { string, bool, func, arrayOf, shape } from "prop-types";
import cn from "clsx";

import "./FormSelect.scss";

function FormSelect({
  id,
  options,
  value,
  name,
  labelTitle,
  placeholder,
  handleChange,
  handleBlur,
  isSubmiting,
  hideLabel,
  textError,
  disabled,
  darkMode,
  classes,
  ...props
}) {
  const classNames = cn(
    {
      [`border-radius`]: true,
      [`form-select`]: true,
      [`text-dark`]: true,
    },
    ...classes,
  );

  const labelStyle = cn({
    [`text-white`]: darkMode,
    [`font-medium text-base leading-normal`]: true,
  });

  return (
    <div className="flex flex-col">
      {!hideLabel && (
        <label className={labelStyle} htmlFor={id}>
          {labelTitle}
        </label>
      )}
      <select
        id={id}
        name={name}
        className={classNames}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={disabled}
        {...props}
      >
        {options &&
          options.map((opt) => (
            <option key={opt.id} value={opt.option}>
              {opt.option}
            </option>
          ))}
      </select>
      {textError && (
        <div className="mt-1">
          <p className="text-error text-sm mb-0">{textError}</p>
        </div>
      )}
    </div>
  );
}

FormSelect.propTypes = {
  id: string.isRequired,
  handleChange: func.isRequired,
  handleBlur: func.isRequired,
  isSubmiting: bool,
  value: string,
  name: string,
  labelTitle: string,
  placeholder: string,
  hideLabel: bool,
  textError: string,
  disabled: bool,
  darkMode: bool,
  options: arrayOf(
    shape(
      {
        id: string.isRequired,
        option: string.isRequired,
      }.isRequired,
    ),
  ).isRequired,
  classes: arrayOf(string),
};

FormSelect.defaultProps = {
  isSubmiting: false,
  name: "select",
  labelTitle: "Select",
  placeholder: "Select any option",
  hideLabel: false,
  value: "",
  textError: "",
  disabled: false,
  darkMode: false,
  classes: [],
};

export default FormSelect;
