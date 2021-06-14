import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import "./Login.scss";

import BasePageLayout from "../../components/BasePageLayout";
import { LoginForm } from "../../components/Forms";
import Header from "../../components/Header";
import * as ROUTES from "../../routes";

import { Container, Column, Row, Flex } from "../../components/Layout";

import ClickSVG from "../../assets/images/undraw_boy_click.svg";

import {
  resetAuthState,
  signInWithEmailRequest,
  signUpWithGoogleRequest,
} from "../../redux/auth/auth-actions";

import { authSelector } from "../../redux/auth/auth-selectors";

function Login() {
  const dispatch = useDispatch();
  const { isSigningUp, signUpError, isAuthenticated } = useSelector(
    authSelector,
  );

  useEffect(() => {
    dispatch(resetAuthState());
  }, [dispatch]);

  function handleLoginWithGoogle(e) {
    e.preventDefault();
    dispatch(signUpWithGoogleRequest());
  }

  function handleSubmit(values, { setSubmiting }) {
    setSubmiting(true);
    dispatch(signInWithEmailRequest(values.email, values.password));
    setSubmiting(false);
  }

  if (isAuthenticated) {
    return <Redirect to={ROUTES.HOME} />;
  }

  return (
    <>
      <BasePageLayout>
        <Container width="4/6" margin="auto">
          <Flex justify="center" align="center">
            <Row>
              <Container>
                <Flex
                  algin="center"
                  justify="center"
                  classes={["max-w-lg max-h-lg"]}
                >
                  <img alt="svg" src={ClickSVG} />
                </Flex>
              </Container>
              <Container padding={12} classes={["mt-12"]}>
                <LoginForm
                  onSubmit={handleSubmit}
                  loginWithGoogle={handleLoginWithGoogle}
                  loginError=""
                />

                <section className="mt-4">
                  <hr className="mt-1 mb-4" />
                  <Link
                    to={ROUTES.RESET_PASSWORD}
                    className="underline text-blue-gray-200 w-full text-center block"
                  >
                    Reset password
                  </Link>
                </section>
              </Container>
            </Row>
          </Flex>
        </Container>
      </BasePageLayout>
    </>
  );
}

export default Login;
