import { TopMovieType } from "./types";

interface TopMovie {
  imdbID: string;
  Title: string;
  Watched: boolean;
}

export type TopMovieState = TopMovie[];

const { GET_MOVIE, TOGGLE_WATCHED } = TopMovieType;

type TopMovieAction =
  | {
      type: typeof GET_MOVIE;
      payload: TopMovieState;
    }
  | { type: typeof TOGGLE_WATCHED; payload: string };

export const topMovieReducer = (
  state: TopMovieState,
  action: TopMovieAction
) => {
  switch (action.type) {
    case GET_MOVIE:
      return action.payload;
    case TOGGLE_WATCHED:
      return state.map((movie) =>
        movie.imdbID === action.payload
          ? { ...movie, Watched: !movie.Watched }
          : movie
      );
    default:
      return state;
  }
};
