import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import "./PublishSong.scss";

import Header from "../../components/Header";
import * as ROUTES from "../../routes";

import { publishTrack } from "../../redux/track/track-actions";
import { authSelector } from "../../redux/auth/auth-selectors";

function PublishSong() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(authSelector);

  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(publishTrack(name));
    setName("");
  }

  function handleSetName(e) {
    setName(e.target.value);
  }

  if (isAuthenticated) {
    return <Redirect to={ROUTES.HOME} />;
  }

  return (
    <>
      <main className="Login">
        <Header />
        <section className="Login__wrapper">
          <h1 className="text-2xl font-bold mb-6">Publish Song</h1>
          <hr className="mt-1 mb-4" />
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="form-label">
              Song name
            </label>
            <input
              type="text"
              id="name"
              className="form-input"
              value={name}
              onChange={handleSetName}
            />
            <button className="btn btn-primary w-full" type="submit">
              Publish Song
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default PublishSong;
