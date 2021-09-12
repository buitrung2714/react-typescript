import { createContext, useReducer } from "react";
import { authReducer, AuthState } from "../reducers/AuthReducer";
import { AuthActionType } from "../reducers/types";

interface AuthContextChildren {
  children: React.ReactNode;
}

interface AuthContextType {
  authInfo: AuthState;
  toggleAuth: (username: string) => void;
}

const authDefault = {
  isAuthenticated: false,
  username: "",
};

const AuthContextDefault = {
  authInfo: authDefault,
  toggleAuth: () => {},
};

const { TOGGLE_AUTH } = AuthActionType;

export const authContext = createContext<AuthContextType>(AuthContextDefault);

const AuthContextProvider = ({ children }: AuthContextChildren) => {
  //useReducer
  const [authInfo, dispatch] = useReducer(authReducer, authDefault);

  //Dynamic Check
  const toggleAuth = (username: string) =>
    dispatch({ type: TOGGLE_AUTH, payload: username });

  //Context Data
  const AuthContextData = { authInfo, toggleAuth };

  return (
    <authContext.Provider value={AuthContextData}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
