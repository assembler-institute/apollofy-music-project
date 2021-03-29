import React, { useState } from "react";
import { string, object, func, arrayOf, oneOf, oneOfType } from "prop-types";
import cn from "clsx";

import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import { makePrefix } from "../../utils/utils";

import "./LoginForm.scss";

function LoginForm({ id, onSubmit, loginError, shadowColor, classes }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const prefix = makePrefix("login-form");

  const formClassNames = cn(
    {
      [`Shadow--dark`]: shadowColor === "dark",
      [`Shadow--primary`]: shadowColor === "primary",
    },
    "LoginForm",
    ...classes,
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (username !== "" && password !== "") {
      onSubmit({ username, password });
    } else {
      setErrors({
        ...errors,
        username: username !== "" ? "" : "Value is empty!",
        password: password !== "" ? "" : "Value is empty!",
      });
    }
  }

  function handleNameChange(e) {
    e.preventDefault();
    setUsername(e.target.value);
    setErrors({
      ...errors,
      username: e.target.value !== "" ? "" : "Value is empty!",
    });
  }

  function handlePasswordChange(e) {
    e.preventDefault();
    setPassword(e.target.value);
    setErrors({
      ...errors,
      password: e.target.value !== "" ? "" : "Value is empty!",
    });
  }

  return (
    <section className={formClassNames}>
      <section className="LoginForm__wrapper">
        <header className="LoginForm__header">Log in</header>
        <form
          id={id}
          onSubmit={handleSubmit}
          acceptCharset="utf-8"
          className="LoginForm__form"
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
            id="password"
            type="password"
            title="Password"
            placeholder="Password"
            data-testid={prefix("password")}
            value={password}
            onChange={handlePasswordChange}
            textError={errors.password}
          />
          <Button
            type="submit"
            data-testid={prefix("submit")}
            classes={[`w-full mt-1`]}
          >
            Log in
          </Button>
          <div className="w-full mt-2 text-center">
            <ul className="w-full flex flex-row justify-center list-none p-0">
              <li className="mx-1">
                <a href="/#">
                  <span>¿Has olvidado tu contraseña?</span>
                </a>
              </li>
              <p className="mx-2">·</p>
              <li className="mx-1">
                <a href="/sign-up">
                  <span>Registrarse</span>
                </a>
              </li>
            </ul>
          </div>

          {loginError && (
            <div className="bg-dark p-2 mt-2">
              <p className="text-white mb-0">{loginError}</p>
            </div>
          )}
        </form>
      </section>
    </section>
  );
}

LoginForm.propTypes = {
  id: string.isRequired,
  onSubmit: func,
  loginError: oneOfType([string, object]),
  shadowColor: oneOf(["primary", "dark"]),
  classes: arrayOf(string),
};

LoginForm.defaultProps = {
  shadowColor: "dark",
  classes: [],
  onSubmit: () => {},
  loginError: null,
};

export default LoginForm;
