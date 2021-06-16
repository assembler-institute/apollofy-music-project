import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import * as ROUTES from "../../routes";

import BasePageLayout from "../../components/BasePageLayout";
import Button from "../../components/Button";

import { Container, Column, Row, Flex, Grid } from "../../components/Layout";

import SocialSVG from "../../assets/images/undraw_social_interaction.svg";

import "./Home.scss";
import { signOut } from "../../redux/auth/auth-actions";

import { authSelector } from "../../redux/auth/auth-selectors";
import {
  getUserAgent,
  getCoordinates,
} from "../../redux/session/session-actions";

function Home() {
  const dispatch = useDispatch();
  const { isAuthenticated, currentUser } = useSelector(authSelector);

  useEffect(() => {
    dispatch(getUserAgent());
    dispatch(getCoordinates());
  }, [dispatch]);

  function handleSignOut() {
    dispatch(signOut());
  }

  const gridRows = (3 + isAuthenticated ? 1 : 2) / 2;

  return (
    <>
      <BasePageLayout>
        <Container width="4/6" margin="auto">
          <Flex justify="center" align="center" height="full">
            <Column fullWidth justify="center" align="center">
              <Container>
                <h1 className="uppercase font-bold text-3xl">Apollofy</h1>
              </Container>
              <Container classes={["mt-12"]}>
                <Flex
                  algin="center"
                  justify="center"
                  classes={["max-w-lg max-h-lg"]}
                >
                  <img alt="svg" src={SocialSVG} />
                </Flex>
              </Container>
              <Container classes={["mt-12"]}>
                <Flex align="center" justify="center">
                  <Grid gap="4" cols={2} rows={gridRows}>
                    <div classes={[""]}>
                      <Link to={ROUTES.WEB_PLAYER_HOME}>
                        <Button
                          roundedBorders
                          classes={["w-full"]}
                          type="button"
                        >
                          WebPlayer
                        </Button>
                      </Link>
                    </div>

                    <div classes={[]}>
                      <Link to={ROUTES.UPLOAD_PLAYBACK}>
                        <Button
                          roundedBorders
                          classes={["w-full"]}
                          type="button"
                        >
                          Upload Playback
                        </Button>
                      </Link>
                    </div>
                    {!isAuthenticated && (
                      <>
                        <div>
                          <Link to={ROUTES.LOGIN}>
                            <Button
                              roundedBorders
                              classes={["w-full"]}
                              type="button"
                            >
                              Login
                            </Button>
                          </Link>
                        </div>
                        <div>
                          <Link to={ROUTES.SIGN_UP}>
                            <Button
                              roundedBorders
                              classes={["w-full"]}
                              type="button"
                            >
                              Sign up
                            </Button>
                          </Link>
                        </div>
                      </>
                    )}
                    {isAuthenticated && (
                      <div>
                        <Button
                          roundedBorders
                          classes={["w-full"]}
                          type="button"
                          onClick={handleSignOut}
                        >
                          Sign Out
                        </Button>
                      </div>
                    )}

                    <div classes={[""]}>
                      <Link to={ROUTES.RESET_PASSWORD}>
                        <Button
                          roundedBorders
                          classes={["w-full"]}
                          type="button"
                        >
                          Reset password
                        </Button>
                      </Link>
                    </div>
                  </Grid>
                </Flex>
              </Container>
            </Column>
          </Flex>
        </Container>
      </BasePageLayout>
    </>
  );
}

export default Home;
