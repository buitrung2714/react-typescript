import { useState, ChangeEvent, useEffect, useContext } from "react";
import {
  AppBar,
  Box,
  Button,
  Chip,
  FormControl,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { progressContext } from "../contexts/ProgressContext";
import { themeContext } from "../contexts/ThemeContext";
import WelcomeMessage from "./WelcomeMessage";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    positionSelect: {
      color: "white",
      borderBottom: "1px solid white",
    },
    chipLabel: {
      marginTop: "10px",
    },
  })
);

const Navbar = () => {
  //Style
  const classes = useStyles();

  //State Position
  const [position, setPosition] = useState("Full Stack Developer");

  //State Timer
  const [timer, setTimer] = useState<Date>(new Date(Date.now()));

  //useEffect time
  useEffect(() => {
    const time = setInterval(() => setTimer(new Date(Date.now())), 1000);
    return () => clearInterval(time);
  }, []);

  //Context Progress
  const { lastTime, status } = useContext(progressContext);

  //Context Theme
  const { theme } = useContext(themeContext);

  //Change
  const changePosition = (
    event: ChangeEvent<{
      value: unknown;
    }>
  ) => setPosition(event.target.value as string);

  return (
    <AppBar position="static" color={theme}>
      <Toolbar>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width={1}
          py={2}
        >
          <Typography variant="h6">My movies</Typography>

          <Box textAlign="center">
            <WelcomeMessage position={position} />
            <Chip
              label={`Date: ${lastTime} - In Progress: ${status}`}
              className={classes.chipLabel}
            />
            <Box mt={1}>
              <FormControl>
                <Select
                  className={classes.positionSelect}
                  value={position}
                  onChange={changePosition}
                >
                  <MenuItem value="Full stack developer">
                    Full stack developer
                  </MenuItem>
                  <MenuItem value="Front end developer">
                    Front end developer
                  </MenuItem>
                  <MenuItem value="Back end developer">
                    Back end developer
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          <Box textAlign="center">
            <Box my={1}>
              <Typography variant="h6">{timer.toUTCString()}</Typography>
            </Box>
            <Button variant="contained">Login</Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
