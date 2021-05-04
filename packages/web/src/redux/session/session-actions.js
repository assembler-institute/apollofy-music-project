import * as SessionTypes from "./session-types";

export const userAgentRequest = () => ({
  type: SessionTypes.USER_AGENT_REQUEST,
});

export const userAgentError = (message) => ({
  type: SessionTypes.USER_AGENT_ERROR,
  payload: message,
});

export const userAgentSuccess = (data) => ({
  type: SessionTypes.USER_AGENT_SUCCESS,
  payload: data,
});

export const coordinatesRequest = () => ({
  type: SessionTypes.COORDINATES_REQUEST,
});

export const coordinatesError = (message) => ({
  type: SessionTypes.COORDINATES_ERROR,
  payload: message,
});

export const coordinatesSuccess = (data) => ({
  type: SessionTypes.COORDINATES_SUCCESS,
  payload: data,
});

export function getUserAgent() {
  return async function userAgentThunk(dispatch) {
    dispatch(userAgentRequest());

    if (!("userAgent" in navigator)) {
      dispatch(userAgentError("User Agent not supported"));
    }

    dispatch(userAgentSuccess(navigator.userAgent));
  };
}

export function getCoordinates() {
  return async function coordinatesThunk(dispatch) {
    dispatch(coordinatesRequest());

    if (!("geolocation" in navigator)) {
      dispatch(coordinatesError("Geolocation not supported"));
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        dispatch(
          coordinatesSuccess({
            lat: pos.coords.latitude,
            long: pos.coords.longitude,
          }),
        );
      },
      (err) => {
        dispatch(coordinatesError(err));
      },
    );
  };
}
