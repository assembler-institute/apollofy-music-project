import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Home.scss";
import Header from "../../components/Header";
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

  return (
    <main className="p-4">
      <Header />
      <section className="p-4">
        {isAuthenticated ? (
          <h1 className="text-xl">Hello {currentUser.email}</h1>
        ) : (
          <h1 className="text-xl">Hello World</h1>
        )}
      </section>
    </main>
  );
}

export default Home;
