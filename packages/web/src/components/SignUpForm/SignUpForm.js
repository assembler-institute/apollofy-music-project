import React, { useState } from "react";
import { string, object, func, arrayOf, oneOfType } from "prop-types";
import cn from "clsx";

import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";

import {
  makePrefix,
  validateName,
  validateEmail,
  validatePassword,
} from "../../utils/utils";

import "./SignUpForm.scss";

function SignUpForm({ id, onSubmit, signUpError, classes }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });

  const prefix = makePrefix("login-form");

  const formClassNames = cn({}, "SignUpForm", ...classes);

  function handleSubmit(e) {
    e.preventDefault();
    if (
      errors.username === "" &&
      errors.email === "" &&
      errors.password === "" &&
      errors.confirmedPassword === ""
    ) {
      onSubmit({ username, email, password });
    }
  }

  function handleNameChange(e) {
    e.preventDefault();
    setUsername(e.target.value);
    setErrors({
      ...errors,
      username: validateName(e.target.value),
    });
  }

  function handleEmailChange(e) {
    e.preventDefault();
    setEmail(e.target.value);
    setErrors({
      ...errors,
      email: validateEmail(e.target.value),
    });
  }

  function handlePasswordChange(e) {
    e.preventDefault();
    setPassword(e.target.value);
    setErrors({
      ...errors,
      password: validatePassword(e.target.value),
      confirmedPassword:
        e.target.value !== confirmedPassword
          ? "Value not matching original!"
          : "",
    });
  }

  function handleConfirmedPassword(e) {
    e.preventDefault();
    setConfirmedPassword(e.target.value);
    setErrors({
      ...errors,
      confirmedPassword:
        e.target.value !== password ? "Value not matching original!" : "",
    });
  }

  return (
    <section className={formClassNames}>
      <section className="SignUpForm__wrapper">
        <header className="SignUpForm__header">Create Account</header>
        <form
          id={id}
          onSubmit={handleSubmit}
          acceptCharset="utf-8"
          className="SignUpForm__form"
          autoComplete="off"
        >
          <FormInput
            id="username"
            type="text"
            title="Username"
            placeholder="Username"
            data-testid={prefix("username")}
            value={username}
            onChange={handleNameChange}
            textError={errors.username}
          />
          <FormInput
            id="email"
            type="email"
            title="Email"
            placeholder="Email"
            data-testid={prefix("email")}
            value={email}
            onChange={handleEmailChange}
            textError={errors.email}
          />
          <FormInput
            id="password"
            type="password"
            title="Password"
            placeholder="Password"
            data-testid={prefix("password")}
            value={password}
            onChange={handlePasswordChange}
            textError={errors.password}
          />
          <FormInput
            id="confirmedPassword"
            type="password"
            title="Confirm Password"
            placeholder="Password"
            data-testid={prefix("confirmedPassword")}
            value={confirmedPassword}
            onChange={handleConfirmedPassword}
            textError={errors.confirmedPassword}
          />
          <Button
            type="submit"
            eslint-disable-next-line="true"
            spaced-comment=""
            data-testid={prefix("submit")}
            classes={[`w-full mt-1 bg-primary hover:bg-primary-dark`]}
          >
            Sign Up
          </Button>
          <div className="w-full mt-2 text-center">
            <ul className="w-full flex flex-row justify-center list-none p-0">
              <p className="mx-2">¿Ya tienes una cuenta?</p>
              <li className="mx-1">
                <a href="/#">
                  <span>Iniciar Sesión</span>
                </a>
              </li>
            </ul>
          </div>

          {signUpError && (
            <div className="p-2 mt-2">
              <p className="text-error mb-0">{signUpError}</p>
            </div>
          )}
        </form>
      </section>
    </section>
  );
}

SignUpForm.propTypes = {
  id: string.isRequired,
  onSubmit: func,
  signUpError: oneOfType([string, object]),
  classes: arrayOf(string),
};

SignUpForm.defaultProps = {
  classes: [],
  onSubmit: () => {},
  signUpError: null,
};

export default SignUpForm;
