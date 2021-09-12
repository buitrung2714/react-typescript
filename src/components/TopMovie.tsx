import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useContext, useEffect } from "react";
import { topMovieContext } from "../contexts/TopMovieContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topMoviesHeader: {
      paddingBottom: 0,
    },
    topMoviesList: {
      paddingTop: 0,
    },
    topMovieItem: {
      paddingTop: "2px",
      paddingBottom: "2px",
    },
  })
);

const TopMovie = () => {
  //style
  const classes = useStyles();

  //Context
  const { topMovieState, getMovies, toggleWatched } =
    useContext(topMovieContext);

  //useEffect
  useEffect(() => getMovies(), []);

  return (
    <Box mt={1} ml={2}>
      <Card raised>
        <CardHeader
          title="Top 10 Movies of all time"
          className={classes.topMoviesHeader}
          titleTypographyProps={{
            variant: "h4",
            align: "center",
            color: "primary",
          }}
        />
        <CardContent className={classes.topMoviesList}>
          <List>
            {topMovieState.map((topMovie) => (
              <ListItem
                key={topMovie.imdbID}
                className={classes.topMovieItem}
                button
                onClick={toggleWatched.bind(this, topMovie.imdbID)}
              >
                <ListItemIcon>
                  <Checkbox checked={topMovie.Watched} />
                </ListItemIcon>
                <ListItemText primary={topMovie.Title} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TopMovie;
