import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@material-ui/core";
import { useState, useContext, ChangeEvent, Dispatch } from "react";
import { authContext } from "../contexts/AuthContext";
import { themeContext } from "../contexts/ThemeContext";

interface LoginProps {
  isOpen: boolean;
  handleClose: Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ isOpen, handleClose }: LoginProps) => {
  //State
  const [userName, setUserName] = useState("");

  //Context Auth
  const { toggleAuth } = useContext(authContext);

  //Context Theme
  const { theme } = useContext(themeContext);

  //Change Username
  const changeUserName = (event: ChangeEvent<HTMLInputElement>) =>
    setUserName(event.target.value);

  //Submit
  const submitE = () => {
    toggleAuth(userName);
    setUserName("");
    handleClose(false);
  };

  return (
    <Dialog open={isOpen} onClose={handleClose.bind(this, false)}>
      <DialogContent>
        <TextField
          label="Username..."
          value={userName}
          onChange={changeUserName}
          required
        />
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color={theme}
          onClick={submitE}
          disabled={userName === ""}
        >
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Login;
