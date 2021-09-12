import { Box, Button, Chip, PropTypes, TextField } from "@material-ui/core";
import { ChangeEvent, Fragment, useContext, useState } from "react";
import { movieContext } from "../contexts/MovieContext";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { themeContext } from "../contexts/ThemeContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    movieInput: {
      marginRight: "5px",
    },
    movieChip: {
      fontSize: "2rem",
      padding: "30px 10px",
      margin: "5px",
    },
  })
);

const Movie = () => {
  //Style
  const classes = useStyles();

  //State
  const [title, setTitle] = useState("");

  //Context Theme
  const { theme } = useContext(themeContext);

  //Context Movie
  const { movies, addMovie, deleteMovie } = useContext(movieContext);

  //Change
  const changeTitle = (event: ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);

  //Add Movie
  const addE = () => {
    addMovie(title);
    setTitle("");
  };

  return (
    <Fragment>
      <Box display="flex" justifyContent="center" my={5}>
        <TextField
          label="Your favourite movie..."
          required
          variant="outlined"
          className={classes.movieInput}
          onChange={changeTitle}
          value={title}
        />
        <Button variant="contained" color={theme} onClick={addE}>
          Add
        </Button>
      </Box>

      <Box display="flex" justifyContent="center" flexWrap="wrap" my={5}>
        {movies.map((movie) => (
          <Chip
            key={movie.id}
            label={movie.title}
            color={theme as Exclude<PropTypes.Color, "inherit">}
            clickable
            onDelete={deleteMovie.bind(this, movie.id)}
            className={classes.movieChip}
          />
        ))}
      </Box>
    </Fragment>
  );
};

export default Movie;
