import { createContext, useReducer } from "react";
import { topMovieReducer, TopMovieState } from "../reducers/TopMovieReducer";
import { TopMovieType } from "../reducers/types";
import TopMovieAPI from "../api/TopMovieAPI";

interface TopMovieContextChildren {
  children: React.ReactNode;
}

interface TopMovieDefaultType {
  topMovieState: TopMovieState;
  getMovies: () => void; // or: () => void
  toggleWatched: (id: string) => void;
}

const TopMovieDefault: TopMovieState = [];

export const topMovieContext = createContext<TopMovieDefaultType>({
  topMovieState: TopMovieDefault,
  getMovies: () => Promise.resolve(void 0),
  toggleWatched: (id: string) => {},
});

const TopMovieContextProvider = ({ children }: TopMovieContextChildren) => {
  //useReducer
  const [topMovieState, dispatch] = useReducer(
    topMovieReducer,
    TopMovieDefault
  );

  const { GET_MOVIE, TOGGLE_WATCHED } = TopMovieType;

  //GET MOVIES
  const getMovies = async () => {
    const topMovies = await Promise.all(TopMovieAPI);
    dispatch({
      type: GET_MOVIE,
      payload: topMovies.map((topMovie) => ({
        ...topMovie.data,
        Watched: false,
      })),
    });
  };

  //Watched
  const toggleWatched = (id: string) =>
    dispatch({ type: TOGGLE_WATCHED, payload: id });

  //Context Data
  const TopMovieContextData = { topMovieState, getMovies, toggleWatched };

  return (
    <topMovieContext.Provider value={TopMovieContextData}>
      {children}
    </topMovieContext.Provider>
  );
};

export default TopMovieContextProvider;
