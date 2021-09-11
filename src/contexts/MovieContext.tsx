import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface MovieContextChildren {
  children: React.ReactNode;
}

interface Movie {
  id: string;
  title: string;
}

interface MovieDefaultType {
  movies: Movie[];
  addMovie: (title: string) => void;
  deleteMovie: (id: string) => void;
}

const MovieDefault = {
  movies: [],
  addMovie: () => {},
  deleteMovie: () => {},
};

export const movieContext = createContext<MovieDefaultType>(MovieDefault);

const MovieContextProvider = ({ children }: MovieContextChildren) => {
  //State
  const [movies, setMovie] = useState<Movie[]>(MovieDefault.movies);

  //Add
  const addMovie = (title: string) =>
    setMovie([...movies, { id: uuidv4(), title }]);

  //Delete
  const deleteMovie = (id: string) =>
    setMovie(movies.filter((movie) => movie.id !== id));

  //Context Data
  const MovieContextData = { movies, addMovie, deleteMovie };

  return (
    <movieContext.Provider value={MovieContextData}>
      {children}
    </movieContext.Provider>
  );
};

export default MovieContextProvider;
