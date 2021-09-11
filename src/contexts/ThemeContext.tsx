import { createContext, useState } from "react";
import { PropTypes } from "@material-ui/core";

interface ThemeContextChildren {
  children: React.ReactNode;
}

interface ThemeDefaultType {
  theme: PropTypes.Color;
  toggleTheme: (theme: PropTypes.Color) => void;
}

const ThemeDefault = {
  theme: "primary" as PropTypes.Color,
  toggleTheme: () => {},
};

export const themeContext = createContext<ThemeDefaultType>(ThemeDefault);

const ThemeContextProvider = ({ children }: ThemeContextChildren) => {
  //State
  const [theme, setTheme] = useState(ThemeDefault.theme);

  //Toggle
  const toggleTheme = (theme: PropTypes.Color) => setTheme(theme);

  //Context Data
  const ThemeContextData = { theme, toggleTheme };

  return (
    <themeContext.Provider value={ThemeContextData}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContextProvider;
