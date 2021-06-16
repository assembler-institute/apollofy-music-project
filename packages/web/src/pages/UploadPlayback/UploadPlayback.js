import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./UploadPlayback.scss";

import { FormSelect } from "../../components/Form";
import { authSelector } from "../../redux/auth/auth-selectors";

import { fetchAllTracks, playTrack } from "../../redux/track/track-actions";
import {
  selectUserAgent,
  selectCoordinates,
} from "../../redux/session/session-selectors";

import { selectTrackState } from "../../redux/track/track-selectors";

function UploadPlayback() {
  const dispatch = useDispatch();

  const [trackId, setTrackId] = useState();

  const {
    byID,
    ids,
    tracksLoading,
    tracksLoadingError,
    tracksFetched,
  } = useSelector(selectTrackState);

  useEffect(() => {
    if (ids.ALL.length === 0) {
      dispatch(fetchAllTracks());
    }
  }, [dispatch, ids.ALL]);

  const { lat, long } = useSelector(selectCoordinates);
  const userAgent = useSelector(selectUserAgent);

  let tracks = [];

  if (tracksFetched) {
    tracks = ids.ALL.map((id, idx) => {
      return {
        id: id,
        option: byID[id].title,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(
      playTrack({
        trackId: trackId,
        lat: lat,
        long: long,
        agent: userAgent,
      }),
    );
  }

  function handleSetTrack(e) {
    e.preventDefault();
    setTrackId(e.target.value);
  }

  return (
    <div className="h-full p-4">
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="p-4 bg-light rounded-md flex flex-col justify-center items-center">
          <h1 className="text-2xl text-dark font-bold mb-4">Play Track</h1>
          <form onSubmit={handleSubmit}>
            <FormSelect
              id="track-title"
              name="track-title"
              labelTitle="Track"
              placeholder="Select a track"
              options={tracks}
              value={byID[trackId]}
              handleChange={handleSetTrack}
            />
            <button className="btn btn-primary w-full" type="submit">
              Play
            </button>
          </form>

          {tracksLoading && <p>Fetching tracks</p>}
          {tracksLoadingError && <p>Fetching tracks went wrong</p>}
        </div>
      </div>
    </div>
  );
}

export default UploadPlayback;
