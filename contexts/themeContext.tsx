import React, { createContext, ReactNode } from "react";
import { theme } from "../styles/theme";

export const ThemeContext = createContext({});

interface ThemeProviderProps {
  children: ReactNode;
}
export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
