import { Grid } from "@material-ui/core";
import React, { Fragment } from "react";
import "./App.css";
import Movie from "./components/Movie";
import Navbar from "./components/Navbar";
import ToggleThemeBtn from "./components/ToggleThemeBtn";
import TopMovie from "./components/TopMovie";
import AuthContextProvider from "./contexts/AuthContext";
import MovieContextProvider from "./contexts/MovieContext";
import ProgressContextProvider from "./contexts/ProgressContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import TopMovieContextProvider from "./contexts/TopMovieContext";

function App() {
  return (
    <Fragment>
      <TopMovieContextProvider>
        <AuthContextProvider>
          <ThemeContextProvider>
            <ProgressContextProvider>
              <Navbar />
              <MovieContextProvider>
                <Grid container>
                  <Grid item xs={4}>
                    <TopMovie />
                  </Grid>
                  <Grid item xs={8}>
                    <Movie />
                  </Grid>
                </Grid>
              </MovieContextProvider>
              <ToggleThemeBtn />
            </ProgressContextProvider>
          </ThemeContextProvider>
        </AuthContextProvider>
      </TopMovieContextProvider>
    </Fragment>
  );
}

export default App;
