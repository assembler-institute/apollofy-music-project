import * as SessionTypes from "./session-types";

export const SessionInitState = {
  userAgentLoading: false,
  userAgentError: null,
  userAgent: null,
  coordinatesLoading: false,
  coordinatesError: null,
  coordinates: {
    lat: null,
    long: null,
  },
};

const SessionReducer = (state = SessionInitState, action) => {
  switch (action.type) {
    case SessionTypes.USER_AGENT_REQUEST: {
      return {
        ...state,
        userAgentLoading: true,
        userAgentError: false,
      };
    }
    case SessionTypes.USER_AGENT_ERROR: {
      return {
        ...state,
        userAgentLoading: false,
        userAgentError: action.payload,
      };
    }
    case SessionTypes.USER_AGENT_SUCCESS: {
      return {
        ...state,
        userAgentLoading: false,
        userAgentError: false,
        userAgent: action.payload,
      };
    }
    case SessionTypes.COORDINATES_REQUEST: {
      return {
        ...state,
        coordinatesLoading: true,
        coordinatesError: null,
      };
    }
    case SessionTypes.COORDINATES_ERROR: {
      return {
        ...state,
        coordinatesLoading: false,
        coordinatesError: action.payload,
        coordinates: {
          lat: null,
          long: null,
        },
      };
    }
    case SessionTypes.COORDINATES_SUCCESS: {
      return {
        ...state,
        coordinatesLoading: false,
        coordinatesError: null,
        coordinates: action.payload,
      };
    }

    default: {
      return { ...state };
    }
  }
};

export default SessionReducer;
