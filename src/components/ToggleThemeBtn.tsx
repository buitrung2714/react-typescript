import { Fab } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useContext } from "react";
import { themeContext } from "../contexts/ThemeContext";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    toggleBtn: {
      position: "fixed",
      right: "3rem",
      bottom: "3rem",
    },
  })
);

const ToggleThemeBtn = () => {
  //Context
  const { theme, toggleTheme } = useContext(themeContext);

  //Style
  const classes = useStyle();

  return (
    <Fab
      color={theme}
      variant="extended"
      className={classes.toggleBtn}
      onClick={toggleTheme.bind(
        this,
        theme === "primary" ? "secondary" : "primary"
      )}
    >
      Change Mode
    </Fab>
  );
};

export default ToggleThemeBtn;
