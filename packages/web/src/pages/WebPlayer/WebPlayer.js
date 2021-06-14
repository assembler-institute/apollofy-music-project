/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import { node } from "prop-types";

import "./WebPlayer.scss";

import BasePageLayout from "../../components/BasePageLayout";
import { Container, Column, Row } from "../../components/Layout";

import { WebPlayerContent, WebPlayerSidebar } from "../../components/WebPlayer";

import { authSelector } from "../../redux/auth/auth-selectors";

function WebPlayer({ children, ...props }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const { isAuthenticated } = useSelector(authSelector);

  /*if (!isAuthenticated) {
    return <Redirect to={ROUTES.HOME} />;
  }*/

  return (
    <BasePageLayout>
      <Container fullSize padding={4}>
        <Column fullWidth>
          <Container fullSize>
            <Row fullHeight>
              <WebPlayerSidebar />
              <WebPlayerContent classes={["ml-4"]}>{children}</WebPlayerContent>
            </Row>
          </Container>
        </Column>
      </Container>
    </BasePageLayout>
  );
}

WebPlayer.propTypes = {
  children: node.isRequired,
};

export default withRouter(WebPlayer);
