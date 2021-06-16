import api from "../../api";
import * as GenreTypes from "./genre-types";
import { normalizeGenres } from "../../schema/genre-schema";

export const genresRequest = () => ({
  type: GenreTypes.FETCH_GENRES_REQUEST,
});

export const genresError = (message) => ({
  type: GenreTypes.FETCH_GENRES_ERROR,
  payload: message,
});

export const genresSuccess = ({ byID, ids }) => ({
  type: GenreTypes.FETCH_GENRES_SUCCESS,
  payload: {
    byID: byID,
    ids: ids,
  },
});

export function fetchGenres() {
  return async function fetchGenresThunk(dispatch) {
    dispatch(genresRequest());
    const res = await api.getGenres();

    if (res.errorMessage) {
      return dispatch(genresError(res.errorMessage));
    }

    const normalizedGenres = normalizeGenres(res.data.data);
    return dispatch(
      genresSuccess({
        byID: normalizedGenres.entities.genres,
        ids: normalizedGenres.result,
      }),
    );
  };
}
