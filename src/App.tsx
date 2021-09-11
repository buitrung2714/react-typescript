import React, { Fragment } from "react";
import "./App.css";
import Movie from "./components/Movie";
import Navbar from "./components/Navbar";
import ToggleThemeBtn from "./components/ToggleThemeBtn";
import MovieContextProvider from "./contexts/MovieContext";
import ProgressContextProvider from "./contexts/ProgressContext";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <Fragment>
      <ThemeContextProvider>
        <ProgressContextProvider>
          <Navbar />
          <MovieContextProvider>
            <Movie />
          </MovieContextProvider>
          <ToggleThemeBtn />
        </ProgressContextProvider>
      </ThemeContextProvider>
    </Fragment>
  );
}

export default App;
