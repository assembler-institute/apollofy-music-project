import React from "react";
import { string, object, func, arrayOf, oneOf, oneOfType } from "prop-types";

import { Formik } from "formik";
import { validationSchema, initialValues } from "../../../utils/validation";

import { Container, Column, Flex } from "../../Layout";

import Button from "../../Button/Button";
import { FormInput } from "../../Form";
import { makePrefix } from "../../../utils/utils";

import "./LoginForm.scss";

function LoginForm({ id, onSubmit, loginWithGoogle, loginError, classes }) {
  const prefix = makePrefix("login-form");

  return (
    <Formik
      initialValues={initialValues.login}
      validationSchema={validationSchema.login}
      onSubmit={onSubmit}
    >
      {(formikProps) => (
        <Container>
          <Column>
            <form
              acceptCharset="utf-8"
              autoComplete="off"
              onSubmit={formikProps.handleSubmit}
            >
              <Column>
                <header className="LoginForm__header">Log in</header>
                <Flex>
                  <FormInput
                    darkMode
                    type="email"
                    id="login-email"
                    name="email"
                    title="Email"
                    placeholder="Enter email"
                    value={formikProps.values.email}
                    textError={formikProps.errors.email}
                    onChange={formikProps.handleChange}
                  />
                  <FormInput
                    darkMode
                    type="password"
                    id="login-password"
                    name="password"
                    title="Password"
                    placeholder="Enter password"
                    data-testid={prefix("password")}
                    value={formikProps.values.password}
                    textError={formikProps.errors.password}
                    onChange={formikProps.handleChange}
                  />
                  {loginError && (
                    <section className="mt-4">{loginError}</section>
                  )}
                  <Button
                    type="submit"
                    disabled={formikProps.isSubmitting}
                    data-testid={prefix("submit")}
                    classes={[`w-full mt-4`]}
                  >
                    Log in
                  </Button>
                </Flex>
              </Column>
            </form>
            <Button
              type="button"
              handleClick={loginWithGoogle}
              data-testid={prefix("btn-google")}
              classes={[`w-full mt-4`]}
            >
              Log in with Google
            </Button>
          </Column>
        </Container>
      )}
    </Formik>
  );
}

LoginForm.propTypes = {
  id: string.isRequired,
  onSubmit: func,
  loginWithGoogle: func,
  loginError: oneOfType([string, object]),
  classes: arrayOf(string),
};

LoginForm.defaultProps = {
  classes: [],
  onSubmit: () => {},
  loginWithGoogle: () => {},
  loginError: null,
};

export default LoginForm;
