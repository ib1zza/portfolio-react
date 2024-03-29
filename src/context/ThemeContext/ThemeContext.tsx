import { createContext, FC, useMemo, useState } from "react";

export enum Theme {
  VIOLET = "violet",
  GREEN = "green",
  VIOLET_LIGHT = "violetLight",
  GREEN_LIGHT = "greenLight",
}

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const LOCAL_STORAGE_THEME_KEY = "theme";
const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) ||
  Theme.GREEN) as Theme;

export const ThemeContext = createContext<ThemeContextProps>({
  theme: defaultTheme,
  setTheme: () => {},
});

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: React.ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { initialTheme, children } = props;
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
